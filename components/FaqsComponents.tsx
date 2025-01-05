import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
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
const FaqsComponents = () => {
  return (
    <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
    {faqItems.map((item: any, index: any) => (
      <AccordionItem
        key={index}
        value={`item-${index + 1}`}
        className="bg-zinc-900/50 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-zinc-800/50"
      >
        <AccordionTrigger className="px-6 py-4 text-left text-lg font-medium text-white">
          {item.question}
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-4 text-zinc-400">
          {item.answer}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
  )
}

export default FaqsComponents