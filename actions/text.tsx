'use client';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import React,{useState} from 'react'
import { generateContent } from '@/actions/generate'
import Link from 'next/link';
const Chat =  () => {
  const [response, setresponse] = useState<string>("")
  const [prompt, setprompt] = useState<string>('')
  const [loading, setloading] = useState<boolean>(false)
  const [error, seterror] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setloading(true);
    seterror(null);
    setresponse('');
    try {
      const response = await generateContent(prompt);
      setresponse(response);
      setprompt('');
    } catch (error:any) {
      const errormessage = error.cause || "Failed to generate content. Please try again.";
      seterror(errormessage);
    } finally {
      setloading(false);
    }
  };
  const words = `${response}`
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50">
  {/* Enhanced Header */}


  {/* Enhanced Chat Area */}
  <div className="flex-grow overflow-y-auto px-4 md:px-6 pb-32 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
    <div className="max-w-5xl mx-auto pt-8">
      {response ? (
        <div className="relative animate-fadeIn">
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg shadow-indigo-500/5">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-2xl"></div>
            <div className="relative p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative animate-float">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-25"></div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center relative">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">AI Response</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-500">Generated just now</p>
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                    <p className="text-sm text-gray-500">AI Assistant</p>
                  </div>
                </div>
              </div>
              <div className="pl-4 border-l-2 border-indigo-100">
                <div className="prose prose-lg max-w-none text-gray-600">
                  <TextGenerateEffect duration={2} filter={false} words={words} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : loading ? (
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
      ) : (
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

  {/* Enhanced Input Section */}
  <div className="fixed bottom-0 left-0 right-0 bg-white/70 backdrop-blur-md border-t border-gray-100">
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <div className="flex items-center gap-3">
        <div className="relative flex-grow group">
          <input
            type="text"
            placeholder="Ask me anything..."
            value={prompt}
            onChange={(e) => setprompt(e.target.value)}
            className="w-full px-6 py-3.5 text-gray-700 bg-white/80 rounded-xl border border-gray-200 group-hover:border-indigo-300 focus:border-indigo-500 focus:ring focus:ring-indigo-100 transition-all duration-200"
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
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="px-6 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium transition-all duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed min-w-[100px] hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95"
        >
          {loading ? 'Thinking...' : 'Ask'}
        </button>
      </div>
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


  
  )
}

export default Chat