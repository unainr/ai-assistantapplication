import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const ChatHeader = () => {
  return (
    <header className="w-full bg-white/60 backdrop-blur-sm border-b border-gray-100">
    <div className="max-w-5xl mx-auto py-4 px-6 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-200"></div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center relative">
            <svg className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
        </div>
        <h1 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
          AI Chat Assistant
        </h1>
      </Link>
      <div className="flex items-center gap-4">
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-600 hover:text-indigo-500 transition-colors">Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-indigo-500 transition-colors">About</Link>
        </nav>
        <div className="flex items-center gap-2 text-sm bg-white/50 px-3 py-1.5 rounded-full border border-gray-100">
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
          <span className="text-gray-600">Online</span>
        </div>
        <UserButton/>
      </div>
    </div>
  </header>
  )
}

export default ChatHeader