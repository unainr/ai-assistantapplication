"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {  CheckCircle } from "lucide-react";
import { GoogleGeminiEffectDemo } from "@/components/GoogleGeminiEffectDemo";
import FaqsComponents from "@/components/FaqsComponents";

const features = [
	{
		icon: "🤖",
		title: "Human-like Interaction",
		description:
			"Engage in realistic AI-powered conversations with natural language understanding and contextual responses.",
	},
	{
		icon: "🌐",
		title: "Multi-language Support",
		description:
			"Chat seamlessly in multiple languages with automatic translation and cultural adaptation.",
	},
	{
		icon: "🧠",
		title: "Contextual Awareness",
		description:
			"AI remembers conversation history and adapts responses based on previous interactions.",
	},
	{
		icon: "⚡",
		title: "Real-time Insights",
		description:
			"Get instant, accurate answers and analytics powered by advanced AI processing.",
	},
	{
		icon: "🔗",
		title: "Seamless Integration",
		description:
			"Connect with your existing tools and platforms through our robust API and plugins.",
	},
	{
		icon: "🎨",
		title: "Customizable Responses",
		description:
			"Tailor AI responses to match your brand voice and communication style.",
	},
];

const faqItems = [
	{
		question: "What is an AI Chat Assistant?",
		answer:
			"Our AI Chat Assistant is a sophisticated digital companion that uses advanced artificial intelligence to engage in natural conversations, provide instant support, and deliver accurate information 24/7.",
	},
	{
		question: "How secure is my data?",
		answer:
			"We implement enterprise-grade encryption and security protocols to ensure your data remains private and protected. All conversations are encrypted end-to-end.",
	},
	{
		question: "Can I customize the AI's responses?",
		answer:
			"Yes! You can train the AI to match your brand voice, implement specific response patterns, and customize the interaction style to meet your needs.",
	},
	{
		question: "What languages are supported?",
		answer:
			"Our AI supports over 50 languages with real-time translation capabilities, ensuring smooth communication across language barriers.",
	},
	{
		question: "How can I integrate it with my existing systems?",
		answer:
			"We provide comprehensive APIs, webhooks, and plugins that make integration with your existing tools and platforms straightforward and efficient.",
	},
	{
		question: "What's included in the free trial?",
		answer:
			"The free trial gives you full access to all features for 14 days, including unlimited conversations, all language support, and integration capabilities.",
	},
];

const Home = () => {
	return (
		<>
			<GoogleGeminiEffectDemo />
			<div className="min-h-screen overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black">
  {/* Stats Section */}
  <div className="relative py-12">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { value: "99%", label: "Accuracy Rate", icon: "🎯" },
        { value: "50+", label: "Languages", icon: "🌍" },
        { value: "24/7", label: "Support", icon: "⚡" },
        { value: "10M+", label: "Messages", icon: "💬" }
      ].map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 border border-zinc-800/50 hover:border-zinc-700/50"
        >
          <div className="text-2xl mb-2">{stat.icon}</div>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            {stat.value}
          </h3>
          <p className="text-zinc-400 mt-2">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Features Section */}
  <div id="features" className="max-w-7xl mx-auto px-4 py-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      <span className="px-4 py-2 rounded-full bg-violet-900/20 text-violet-400 text-sm font-medium mb-4 inline-block border border-violet-800/30">
        Powerful Features
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
        Everything you need in one place
      </h2>
      <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
        Experience the next generation of AI-powered conversations
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature: any, index: any) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group bg-zinc-900/50 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-zinc-900/50 hover:to-black shadow-lg hover:shadow-2xl transition-all duration-500 border border-zinc-800/50 hover:border-zinc-700/50"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="text-4xl group-hover:scale-125 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-white">
              {feature.title}
            </h3>
          </div>
          <p className="text-zinc-400">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Demo Section */}
  <div className="bg-black py-20">
    <div className="max-w-6xl mx-auto px-4">
      <div className="rounded-2xl overflow-hidden border border-zinc-800/50">
        <div className="grid lg:grid-cols-2 gap-8 p-8 bg-zinc-900/30">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Try it yourself
            </h3>
            <div className="space-y-4">
              <p className="text-zinc-400">
                Experience the power of our AI assistant with a live demo.
                Unlock intelligent conversations powered by Gemini 1.5.
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time natural language processing",
                  "Multi-language support with instant translation",
                  "Context-aware responses for meaningful dialogue",
                  "Advanced problem-solving capabilities",
                  "Seamless integration with your workflow"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-zinc-400">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
			<Link href={'/chat'}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="w-full py-3 my-5 bg-gradient-to-r from-violet-500 to-indigo-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
            >
              Start Demo
            </motion.button>
			</Link>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
              alt="AI Chat Assistant Demo"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* FAQ Section with updated styling */}
  <div id="faq" className="bg-black py-20">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="px-4 py-2 rounded-full bg-violet-900/20 text-violet-400 text-sm font-medium mb-4 inline-block border border-violet-800/30">
          FAQ
        </span>
        <h2 className="text-4xl font-bold text-white mb-6">
          Got Questions?
        </h2>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
          Find answers to common questions about our AI assistant
        </p>
      </motion.div>

     <FaqsComponents/>
    </div>
  </div>

  {/* CTA Section */}
  <div className="relative overflow-hidden bg-black">
    <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-indigo-600/10" />
    <div className="relative max-w-4xl mx-auto px-4 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Start Your AI Journey Today
        </h2>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          Join thousands of satisfied users who have transformed their
          conversations with our AI assistant
        </p>
        <Link href={'/sign-in'}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          
          className="inline-block px-8 py-4 bg-gradient-to-r from-violet-500 to-indigo-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-violet-500/25 transition-all duration-300"
        >
          Get Started Free
        </motion.button>
        </Link>
      </motion.div>
    </div>
  </div>
</div>

		</>
	);
};

export default Home;
