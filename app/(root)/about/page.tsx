"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { BackgroundGradientAnimation } from "@/components/background-gradient-animation";
import { SparklesCore } from "@/components/ui/sparkles";
import Link from "next/link";

export default function About() {
  return (
    <>
   
    <div className="min-h-screen bg-[#0A0A0B] overflow-hidden">
      {/* Hero Section */}
     
      <div className="h-[30rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl uppercase text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
      The AI Era
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
      {/* Vision Section */}
      <div className="relative py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-gradient-to-r from-violet-600/10 to-indigo-600/10 rounded-full text-violet-400 border border-violet-500/20">
                  Our Vision
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Transforming the Future of AI Communication
                </h2>
                <p className="text-lg text-zinc-400">
                  We're pioneering the next generation of AI interactions, making them more natural,
                  intuitive, and powerful than ever before.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { stat: "99.9%", label: "Accuracy" },
                  { stat: "150+", label: "Countries" },
                ].map((item, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50">
                    <div className="text-2xl font-bold text-white mb-2">{item.stat}</div>
                    <div className="text-zinc-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border border-zinc-800/50">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                  alt="AI Technology"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 aspect-square w-full rounded-2xl bg-gradient-to-br from-violet-600/30 to-indigo-600/30 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-full text-violet-400 border border-violet-500/20">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powered by Innovation
            </h2>
            <p className="text-lg text-zinc-400">
              Leveraging cutting-edge technology to deliver exceptional AI experiences
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced AI Models",
                description: "State-of-the-art language processing with Gemini 1.5",
                icon: "🤖",
                gradient: "from-blue-600/20 to-violet-600/20",
                border: "border-blue-500/20"
              },
              {
                title: "Real-time Processing",
                description: "Lightning-fast responses with neural networks",
                icon: "⚡",
                gradient: "from-violet-600/20 to-purple-600/20",
                border: "border-violet-500/20"
              },
              {
                title: "Smart Learning",
                description: "Continuous improvement through interactions",
                icon: "🧠",
                gradient: "from-purple-600/20 to-pink-600/20",
                border: "border-purple-500/20"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative p-8 rounded-2xl bg-gradient-to-b ${feature.gradient} border ${feature.border} backdrop-blur-sm hover:scale-105 transition-all duration-300`}
              >
                <div className="relative space-y-6">
                  <span className="text-4xl">{feature.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-zinc-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-600/10 via-indigo-600/10 to-transparent blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to Experience the Future?
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Join thousands of forward-thinking organizations revolutionizing their operations with AI
            </p>
            <Link
             href="/sign-up"
              className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-500/25 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  </>
  );
}
