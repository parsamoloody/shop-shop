import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Privacy Policy | Shop Shop",
    description: "Our privacy policy outlines how we collect, use, and protect your personal information.",
    alternates: {
        canonical: "/privacy-policy",
    }
}

const PrivacyPolicy = () => {
    return (
        <div className="max-w-[1240px] mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 dark:text-foreground">Privacy Policy</h1>
            
            <div className="space-y-8">
                <section>
                    <h2 className="text-xl font-semibold mb-4 dark:text-foreground">Information We Collect</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        We collect information that you provide directly to us, including:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                        <li>Name and contact information</li>
                        <li>Account credentials</li>
                        <li>Payment information</li>
                        <li>Shipping addresses</li>
                        <li>Purchase history</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 dark:text-foreground">How We Use Your Information</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                        <li>Process your orders and transactions</li>
                        <li>Communicate with you about your orders</li>
                        <li>Send you marketing communications (with your consent)</li>
                        <li>Improve our services and products</li>
                        <li>Protect against fraud and unauthorized transactions</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 dark:text-foreground">Data Security</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        We implement appropriate security measures to protect your personal information. 
                        However, no method of transmission over the Internet is 100% secure. 
                        We cannot guarantee absolute security of your data.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 dark:text-foreground">Cookies</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        We use cookies and similar technologies to enhance your browsing experience, 
                        analyze site traffic, and personalize content. You can control cookies 
                        through your browser settings.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 dark:text-foreground">Contact Us</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        If you have questions about our Privacy Policy, please contact us at:
                        <br />
                        <a href="mailto:privacy@shopshop.com" className="text-primary hover:underline">
                            privacy@shopshop.com
                        </a>
                    </p>
                </section>

                <section>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Last updated: August 13, 2025
                    </p>
                </section>
            </div>
        </div>
    )
}

export default PrivacyPolicy