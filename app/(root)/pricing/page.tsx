'use client';

import FaqsComponents from "@/components/FaqsComponents";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

const PricingPage = () => {
  const { isSignedIn } = useAuth();

  const features = [
    "Unlimited AI conversations",
    "Priority response time",
    "Advanced AI capabilities",
    "24/7 availability",
    "Custom chat history",
    "Multi-language support"
  ];

  const renderPricingCard = (
    title: string,
    price: string,
    featureList: string[],
    badge: string,
    buttonText: string,
    buttonLink: string,
    isPro?: boolean
  ) => (
    <div className={`relative h-full flex flex-col ${
      isPro
        ? "bg-gradient-to-br from-indigo-500 to-purple-600"
        : "bg-gray-900"
    } rounded-2xl shadow-xl p-8 border border-gray-800 hover:scale-105 transition-transform duration-300 text-white`}>
      <div className={`absolute -top-4 left-4 px-4 py-1 ${
        isPro
          ? "bg-white text-indigo-600"
          : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
      } rounded-full text-sm font-medium`}>
        {badge}
      </div>
      
      <div className="flex-grow">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="opacity-80">/month</span>
        </div>
        <ul className="space-y-4 mb-8">
          {featureList.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-5 h-5 mr-3 text-indigo-400" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Link href={buttonLink}
            className={`block w-full py-4 px-6 text-center rounded-xl font-medium transition-all duration-200 ${
              isPro
                ? "bg-white text-indigo-600 hover:bg-gray-100"
                : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90"
            }`}>
        {buttonText}
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl my-10 font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Choose Your Perfect Plan
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Start with our free plan and upgrade anytime for unlimited access to advanced AI conversations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {renderPricingCard(
            "Basic",
            "$0",
            features.slice(0, 3),
            "Free Trial",
            "Start Free Trial",
            "/chat"
          )}

          {renderPricingCard(
            "Pro",
            "$19",
            features,
            "Most Popular",
            isSignedIn ? 'Upgrade Now' : 'Get Started',
            isSignedIn ? "/chat" : "/sign-up",
            true
          )}

          {renderPricingCard(
            "Enterprise",
            "Custom",
            [...features, "Custom API access", "Dedicated support", "SLA guarantee"],
            "Enterprise",
            "Contact Sales",
            "/sign-up"
          )}
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
         <FaqsComponents/>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
