import Link from 'next/link';
import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className='xs:pt-[45px] md:pt-0'>
            <div className="max-w-2xl mx-auto px-8 py-12">
                <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
                <p className="mb-8 text-lg">
                    Welcome to the Privacy Policy of <span className="font-bold">A2ZCasting</span>. Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect the information you provide when using our website or services.
                </p>

                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                <p className="mb-6">
                    We collect various types of information when you use our platform, including:
                </p>
                <ul className="list-disc pl-6 mb-6">
                    <li>Your name, email address, and contact information when you register for an account.</li>
                    <li>Information about your usage of our platform, such as log data and cookies.</li>
                    <li>Content you submit, including profiles, portfolios, and job postings.</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                <p className="mb-6">
                    We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 mb-6">
                    <li>Providing and improving our services</li>
                    <li>Communicating with you</li>
                    <li>Personalizing your experience</li>
                    <li>Analyzing usage trends and preferences</li>
                    <li>Complying with legal obligations</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
                <p className="mb-6">
                    We implement security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>

                <h2 className="text-2xl font-bold mb-4">4. Your Choices</h2>
                <p className="mb-6">
                    You have the right to access, update, or delete your personal information. You may also choose to opt-out of certain communications or data processing activities. Please contact us if you would like to exercise any of these rights.
                </p>

                <h2 className="text-2xl font-bold mb-4">5. Changes to This Policy</h2>
                <p className="mb-6">
                    We reserve the right to update or change our Privacy Policy at any time. Any changes will be effective immediately upon posting to our website. We encourage you to review this Privacy Policy periodically for any updates or changes.
                </p>

                <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
                <p className="mb-6">
                    If you have any questions or concerns about our Privacy Policy, please contact us at <span className="font-bold"><Link href="mailto:azcast857@gmail.com">Email</Link></span>.
                </p>

                <p>
                    Thank you for trusting <span className="font-bold">A2ZCasting</span> with your personal information. We are committed to protecting your privacy and providing a safe and secure platform for all our users.
                </p>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
