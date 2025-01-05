"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-950 text-gray-300 relative overflow-hidden">
			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/50" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 xl:gap-16">
					{/* Company Info */}
					<div className="space-y-6">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="space-y-4">
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
							<p className="text-gray-400 text-sm leading-relaxed max-w-xs">
								Experience the future of conversation with our advanced AI chat
								platform. Transforming the way we communicate.
							</p>
							<div className="flex space-x-5 pt-2">
								{["twitter", "github", "linkedin"].map((social) => (
									<Link
										key={social}
										href={`https://${social}.com`}
										className="hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110">
										<span className="sr-only">{social}</span>
										<svg
											className="h-6 w-6"
											fill="currentColor"
											viewBox="0 0 24 24">
											{/* SVG paths here */}
										</svg>
									</Link>
								))}
							</div>
						</motion.div>
					</div>

					{/* Quick Links */}
					<div className="space-y-6">
						<h4 className="text-lg font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
							Quick Links
						</h4>
						<ul className="space-y-3">
							{[
								{ name: "Home", path: "/" },
								{ name: "Pricing", path: "/pricing" },
								{ name: "About", path: "/about" },
							].map((item) => (
								<li key={item.name}>
									<Link
										href={item.path}
										className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
										<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Legal */}
					<div className="space-y-6">
						<h4 className="text-lg font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
							Legal
						</h4>
						<ul className="space-y-3">
							{["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
								(item) => (
									<li key={item}>
										<Link
											href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
											className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
											<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
											{item}
										</Link>
									</li>
								)
							)}
						</ul>
					</div>

					{/* Newsletter */}
					<div className="space-y-6">
						<h4 className="text-lg font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
							Stay Updated
						</h4>
						<form className="space-y-4">
							<div className="relative group">
								<input
									type="email"
									placeholder="Enter your email"
									className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg 
                           focus:outline-none focus:border-indigo-500 text-gray-300 transition-all duration-300
                           group-hover:border-gray-700"
								/>
								<button
									type="submit"
									className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r 
                           from-indigo-500 to-purple-500 rounded-md text-white hover:opacity-90 
                           transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25">
									Join
								</button>
							</div>
							<p className="text-xs text-gray-500">
								Get weekly insights and updates. No spam, unsubscribe anytime.
							</p>
						</form>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-16 pt-8 border-t border-gray-800/50">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<p className="text-gray-400 text-sm">
							© {currentYear} AI Chat. All rights reserved.
						</p>
						<div className="flex items-center space-x-4">
							<div className="h-px w-8 bg-gradient-to-r from-indigo-500 to-purple-500" />
							<span className="text-gray-400 text-sm">
								Made with
								<span className="mx-1 text-red-500">❤️</span>
								by AI Chat Team
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
