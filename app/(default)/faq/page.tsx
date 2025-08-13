import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "FAQ | Shop Shop",
    description: "Frequently asked questions about Shop Shop's services, shipping, returns, and more.",
    alternates: {
        canonical: "/faq",
    }
}

type FAQItem = {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All payments are processed securely through our payment partners."
    },
    {
        question: "How long does shipping take?",
        answer: "Standard shipping typically takes 3-5 business days within the continental US. Express shipping (1-2 business days) is available for an additional fee. International shipping times vary by location."
    },
    {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for most items. Products must be unused and in their original packaging. Some restrictions apply to certain product categories."
    },
    {
        question: "Do you ship internationally?",
        answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. Import duties and taxes may apply."
    },
    {
        question: "How can I track my order?",
        answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order through your account dashboard on our website."
    },
    {
        question: "Are my payment details secure?",
        answer: "Yes, we use industry-standard SSL encryption for all transactions. Your payment information is never stored on our servers."
    }
]

const FAQPage = () => {
    return (
        <div className="max-w-[1240px] mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 dark:text-foreground">Frequently Asked Questions</h1>
            
            <div className="space-y-6">
                {faqItems.map((item, index) => (
                    <div 
                        key={index} 
                        className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0"
                    >
                        <h2 className="text-xl font-semibold mb-3 dark:text-foreground">
                            {item.question}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            {item.answer}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h2 className="text-xl font-semibold mb-4 dark:text-foreground">
                    Still have questions?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Can't find the answer you're looking for? Please contact our customer support team.
                </p>
                <a 
                    href="mailto:support@shopshop.com"
                    className="text-primary hover:underline dark:text-white"
                >
                    support@shopshop.com
                </a>
            </div>
        </div>
    )
}

export default FAQPage