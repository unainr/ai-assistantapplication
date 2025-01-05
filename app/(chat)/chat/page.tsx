'use client';

import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import React, { useEffect, useState } from 'react'
import { generateContent } from '@/actions/generate'
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type Message = {
  id: string;
  content: string;
  type: 'user' | 'ai';
  timestamp: Date;
}

const Chat = () => {
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [prompt, setPrompt] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [promptCount, setPromptCount] = useState<number>(0);

  useEffect(() => {
    if (!isSignedIn) {
      const count = localStorage.getItem('promptCount');
      if (count) {
        setPromptCount(parseInt(count));
      }
    }
  }, [isSignedIn]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!prompt.trim()) {
      setError("Please enter a prompt");
      return;
    }

    if (!isSignedIn && promptCount >= 5) {
      router.push('/sign-in');
      return;
    }

    setLoading(true);
    setError(null);

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: prompt,
      type: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    try {
      const response = await generateContent(prompt);
      
      // Add AI response
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        type: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setPrompt('');

      if (!isSignedIn) {
        const newCount = promptCount + 1;
        setPromptCount(newCount);
        localStorage.setItem('promptCount', newCount.toString());

        if (newCount === 4) {
          setError("You have 1 free prompt remaining. Sign in for unlimited access.");
        }
      }
    } catch (error: any) {
      const errorMessage = error.cause || "Failed to generate content. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50">
      {!isSignedIn && promptCount < 5 && (
        <div className="text-center py-3 bg-gradient-to-r from-indigo-50 to-purple-50">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 text-indigo-600 text-sm font-medium shadow-sm">
            {5 - promptCount} free {promptCount === 4 ? 'prompt' : 'prompts'}
          </span>
        </div>
      )}

      <div className="flex-grow overflow-y-auto px-4 md:px-6 pb-32 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
        <div className="max-w-5xl mx-auto pt-8 space-y-6">
          {messages.map((message) => (
            <div key={message.id} className="relative animate-fadeIn">
              <div className="relative bg-white/80  backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg shadow-indigo-500/5">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-2xl"></div>
                <div className="relative p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative animate-float">
                      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-25"></div>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center relative">
                        {message.type === 'ai' ? (
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ) : (
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {message.type === 'ai' ? 'AI Response' : 'You'}
                      </h3>
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-gray-500">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                        <p className="text-sm text-gray-500">
                          {message.type === 'ai' ? 'AI Assistant' : 'User'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pl-4 border-l-2 border-indigo-100">
                    <div className="prose prose-lg max-w-none text-gray-600">
                      {message.type === 'ai' ? (
                        <TextGenerateEffect words={message.content}  />
                      ) : (
                        <p>{message.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="text-center">
                <div className="relative inline-block">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center animate-pulse">
                    <div className="processing-spinner">
                      <div className="processing-circle"></div>
                      <div className="processing-circle"></div>
                      <div className="processing-circle"></div>
                    </div>
                  </div>
                </div>
                <h2 className="mt-8 text-2xl font-semibold text-gray-900">Processing Your Request</h2>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <p className="text-gray-600">AI is thinking</p>
                </div>
              </div>
            </div>
          )}

          {messages.length === 0 && !loading && (
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="text-center">
                <div className="relative inline-block animate-float">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25"></div>
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center transform rotate-12 transition-transform duration-300 hover:rotate-0 relative">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>
                <h2 className="mt-8 text-2xl font-semibold text-gray-900">Start a Conversation</h2>
                <p className="mt-2 text-gray-600">Ask anything you'd like to know</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white/70 backdrop-blur-md border-t border-gray-100">
        <div className="max-w-4xl mx-auto p-4 md:p-6">
          {!isSignedIn && promptCount >= 5 ? (
            <div className="text-center p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ready to unlock unlimited AI conversations?
              </h3>
              <p className="text-gray-600 mb-4">
                Sign in now to continue exploring with our AI assistant
              </p>
              <Link
                href="/sign-in"
                className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium hover:opacity-90 transition-all duration-200"
              >
                Sign In to Continue
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="relative flex-grow group">
                <Input
                  type="text"
                  placeholder="Ask me anything..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
                {loading && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <div className="typing-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                )}
              </div>
              <Button
                onClick={handleSubmit}
                disabled={loading}
                className="px-6 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium transition-all duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed min-w-[100px] hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95"
              >
                {loading ? 'Thinking...' : 'Ask'}
              </Button>
            </div>
          )}
          {error && (
            <div className="mt-4 animate-fadeIn">
              <div className="px-4 py-2 bg-red-50 border-l-4 border-red-500 rounded-r-md">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
