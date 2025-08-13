import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Terms of Use | Shop Shop",
    description: "Our terms of use outline the rules and guidelines for using Shop Shop's services and platform.",
    alternates: {
        canonical: "/terms-of-use",
    }
}

const TermsOfUse = () => {
    return (
        <div className="max-w-[1240px] mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 dark:text-foreground">Terms of Use</h1>
            
            <div className="space-y-8">
                <section>
                    <h2 className="text-xl font-semibold mb-4 dark:text-foreground">1. Acceptance of Terms</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        By accessing and using Shop Shop, you agree to be bound by these Terms of Use. 
                        If you do not agree to these terms, please do not use our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 dark:text-foreground">2. User Accounts</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        When creating an account, you must provide accurate and complete information.
                        You are responsible for maintaining the confidentiality of your account.
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                        <li>You must be at least 18 years old to create an account</li>
                        <li>One account per person</li>
                        <li>You are responsible for all activities under your account</li>
                        <li>Notify us immediately of any unauthorized use</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 dark:text-foreground">3. Prohibited Activities</h2>
                    <p className="text-gray-600 dark:text-gray-300">Users must not:</p>
                    <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                        <li>Use the service for illegal purposes</li>
                        <li>Upload malicious content</li>
                        <li>Attempt to gain unauthorized access</li>
                        <li>Interfere with the proper working of the service</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 dark:text-foreground">4. Product Information</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        We strive to display accurate product information. However, we do not warrant that 
                        product descriptions or prices are accurate, complete, or current.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 dark:text-foreground">5. Shipping & Returns</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        Orders are subject to our shipping and return policies. We reserve the right to 
                        refuse service, terminate accounts, or cancel orders at our discretion.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 dark:text-foreground">6. Changes to Terms</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        We reserve the right to modify these terms at any time. Changes will be effective 
                        immediately upon posting on our website.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 dark:text-foreground">Contact</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        For questions about these Terms of Use, please contact us at:
                        <br />
                        <a href="mailto:legal@shopshop.com" className="text-primary hover:underline">
                            legal@shopshop.com
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

export default TermsOfUse