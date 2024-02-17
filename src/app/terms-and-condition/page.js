import Link from 'next/link'
import React from 'react'

export default function Terms() {
    return (
        <div className='pt-[80px]'>
            <div className="max-w-2xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Terms and Conditions of Use</h1>
                <p className="mb-4">
                    Welcome to <span className="font-bold">A2ZCasting</span>, a talent hiring platform connecting performers, artists, and creators with opportunities worldwide. By accessing or using our platform, you agree to comply with and be bound by the following terms and conditions of use. Please read these terms carefully before using our service.
                </p>
                <h2 className="text-xl font-bold mb-2">1. Acceptance of Terms</h2>
                <p className="mb-4">
                    These terms and conditions, along with our Privacy Policy, govern your use of <span className="font-bold">A2ZCasting</span>. By accessing or using our platform, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree with any part of these terms, you may not access or use our platform.
                </p>
                <h2 className="text-xl font-bold mb-2">2. Eligibility</h2>
                <p className="mb-4">
                    Users of our platform must be at least 18 years old or have parental consent to use our services. By using our platform, you represent and warrant that you meet these eligibility requirements.
                </p>
                <h2 className="text-xl font-bold mb-2">3. Account Registration</h2>
                <p className="mb-4">
                    To access certain features of our platform, you may be required to register for an account. You agree to provide accurate and complete information during the registration process and to keep your account credentials secure. You are responsible for all activities that occur under your account.
                </p>
                <h2 className="text-xl font-bold mb-2">4. User Conduct</h2>
                <p className="mb-4">
                    You agree to use our platform responsibly and in compliance with all applicable laws and regulations. You may not use our platform for any unlawful purpose or engage in any conduct that violates these terms or infringes on the rights of others.
                </p>
                <h2 className="text-xl font-bold mb-2">5. Intellectual Property</h2>
                <p className="mb-4">
                    You retain ownership of any content you submit to our platform, including but not limited to profiles, portfolios, and submissions. By submitting content to our platform, you grant us a worldwide, non-exclusive, royalty-free license to use, display, and distribute your content in connection with our services.
                </p>
                <h2 className="text-xl font-bold mb-2">6. Job Postings</h2>
                <p className="mb-4">
                    Employers are solely responsible for the accuracy and legality of job postings on our platform. This includes ensuring compliance with all applicable employment laws and regulations. We reserve the right to remove any job posting that violates these terms or our policies.
                </p>
                <h2 className="text-xl font-bold mb-2">7. Payment Terms</h2>
                <p className="mb-4">
                    Certain features of our platform may require payment of fees. By using these features, you agree to pay all applicable fees and charges in accordance with our payment terms. All payments are non-refundable unless otherwise stated.
                </p>
                <h2 className="text-xl font-bold mb-2">8. Privacy Policy</h2>
                <p className="mb-4">
                    Our collection and use of personal information are governed by our Privacy Policy. By using our platform, you consent to the collection and use of your information as described in our Privacy Policy.
                </p>
                <h2 className="text-xl font-bold mb-2">9. Limitation of Liability</h2>
                <p className="mb-4">
                    In no event shall <span className="font-bold">A2ZCasting</span> or its affiliates be liable for any indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of our platform. Our total liability to you for any claim arising out of or relating to these terms or your use of our platform shall not exceed the amount paid by you, if any, for the use of our platform.
                </p>
                <h2 className="text-xl font-bold mb-2">10. Termination</h2>
                <p className="mb-4">
                    We reserve the right to suspend or terminate your account and access to our platform at any time and for any reason, without prior notice or liability. Upon termination, all licenses and rights granted to you under these terms will immediately cease.
                </p>
                <h2 className="text-xl font-bold mb-2">11. Changes to Terms</h2>
                <p className="mb-4">
                    We may update these terms and conditions from time to time without prior notice. Any changes will be effective immediately upon posting to our platform. It is your responsibility to review these terms periodically for changes.
                </p>
                <h2 className="text-xl font-bold mb-2">12. Governing Law</h2>
                <p className="mb-4">
                    These terms and conditions shall be governed by and construed in accordance with the laws of Mahrashtra. Any disputes arising out of or relating to these terms or your use of our platform shall be resolved exclusively in the courts of Mumbai.
                </p>
                {/* Additional points go here */}
                <h2 className="text-xl font-bold mb-2">13. Contact Information</h2>
                <p>
                    If you have any questions or concerns about these terms and conditions, please contact us our <span className="font-bold"><Link href="mailto:azcast857@gmail.com">Email</Link></span>.
                    By using our platform, you agree to abide by these terms and conditions. Thank you for choosing <span className="font-bold">A2ZCasting</span>!
                </p>
            </div>
        </div>
    )
}
