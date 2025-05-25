import { ReactElement } from "react"
import { BoxIcon, Hash, Search, TagIcon } from "lucide-react"

// import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { FadeIn } from "@/components/cult/fade-in"
import { GradientHeading } from "@/components/cult/gradient-heading"
import { ResourceCardGrid } from "@/components/directory-card-grid"

import { NavSidebar } from "../../components/nav"
import { getCachedFilters } from "../actions/cached_actions"
import { getProducts } from "../actions/product"
import { DirectorySearch } from "@/components/directory-search"

export const dynamic = "force-dynamic"

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: {
    search?: string
    category?: string
    label?: string
    tag?: string
  }
}): Promise<ReactElement> {
  const { search, category, label, tag } = searchParams
  const data = await getProducts(search, category, label, tag)
  let filters = await getCachedFilters()

  return (
    <>
      <NavSidebar
        categories={filters.categories}
        labels={filters.labels}
        tags={filters.tags}
      />
      <div className="grid">
      <div className=" max-w-full p-6 ml-auto">
 <h1 className="text-3xl font-bold text-center mb-6 text-gray-100">Privacy Policy for MixPhD.com</h1>
<FadeIn>
    <p className="text-lg italic mb-4">Effective Date: May 5, 2025</p>

    <p className="mb-4">MixPhD ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and safeguard your personal information when you interact with our website (<a href="https://mixphd.com" className="text-indigo-400 hover:underline">https://mixphd.com</a>) and services, including accessing, submitting, or commenting on alcoholic and non-alcoholic drink recipes (collectively, the "Services"). By accessing or using our Services, you agree to the terms outlined in this Privacy Policy. If you do not agree, please do not use our Services.</p>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">1. Information We Collect</h2>
      <p className="font-semibold">We may collect the following types of personal information:</p>
      <ul className="list-disc pl-6 mt-2 space-y-2">
        <li><span className="font-medium">Contact Information</span>: Name, email address, or other details you provide when contacting us or registering an account.</li>
        <li><span className="font-medium">Account Information</span>: Usernames, passwords, or other credentials you create to access our Services.</li>
        <li><span className="font-medium">User-Generated Content</span>: Recipes, images, comments, or other content you submit to our website.</li>
        <li><span className="font-medium">Usage Data</span>: IP addresses, browser types, device information, pages visited, timestamps, and interactions with our Services.</li>
        <li><span className="font-medium">Cookies and Tracking Data</span>: Information gathered through cookies, web beacons, or similar technologies to enhance user experience and analyze site performance.</li>
      </ul>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">2. How We Collect Information</h2>
      <p className="font-semibold">We gather information through:</p>
      <ul className="list-disc pl-6 mt-2 space-y-2">
        <li><span className="font-medium">Direct Interactions</span>: When you register an account, submit recipes, post comments, or contact us via forms or email.</li>
        <li><span className="font-medium">Automated Technologies</span>: Through cookies, web beacons, and other tracking tools that monitor your activity on our website.</li>
        <li><span className="font-medium">Third-Party Services</span>: From analytics providers, hosting services, or other partners that assist us in operating our Services.</li>
      </ul>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">3. How We Use Your Information</h2>
      <p className="font-semibold">We use your information to:</p>
      <ul className="list-disc pl-6 mt-2 space-y-2">
        <li>Provide, maintain, and enhance our Services, including displaying recipes and facilitating user interactions.</li>
        <li>Communicate with you, such as responding to inquiries, providing customer support, or sending newsletters (if you opt in).</li>
        <li>Personalize your experience, such as recommending recipes based on your preferences or activity.</li>
        <li>Analyze usage patterns to improve our website’s functionality and content.</li>
        <li>Protect our legal rights, safety, property, and intellectual property, including detecting and preventing unauthorized use of our content.</li>
        <li>Comply with legal obligations, such as responding to lawful requests from authorities.</li>
        <li>Train and refine our internal systems using only anonymized and aggregated data to ensure your privacy.</li>
      </ul>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">4. Sharing and Disclosure of Information</h2>
      <p className="font-semibold">We may share your information under the following circumstances:</p>
      <ul className="list-disc pl-6 mt-2 space-y-2">
        <li><span className="font-medium">Service Providers</span>: With third parties that perform services on our behalf (e.g., hosting, analytics, email delivery), who are contractually obligated to protect your information and use it only for specified purposes.</li>
        <li><span className="font-medium">Affiliates</span>: With companies within our corporate group, subject to this Privacy Policy.</li>
        <li><span className="font-medium">Legal Authorities</span>: When required by law, court order, or to protect our rights, safety, property, or intellectual property.</li>
        <li><span className="font-medium">Business Transfers</span>: In connection with a merger, acquisition, or sale of assets, where your information may be transferred to the new owner, subject to equivalent protections.</li>
        <li><span className="font-medium">User-Generated Content</span>: Recipes, comments, or images you submit may be publicly displayed on our website, as intended by the Service. You retain ownership of your content but grant us a license (see Section 9).</li>
      </ul>
      <p className="mt-2">We do not sell your personal information to third parties for monetary compensation. However, sharing with service providers or analytics partners as described above may constitute a “sale” or “sharing” under certain privacy laws (e.g., CCPA). You may opt out of such sharing by contacting us.</p>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">5. Data Storage, Security, and Retention</h2>
      <p>We store your information on secure servers and implement industry-standard technical and organizational measures to protect it from unauthorized access, disclosure, or destruction. These measures include encryption, access controls, and regular security audits. However, no online transmission or storage method is entirely risk-free, and we cannot guarantee absolute security.</p>
      <p className="mt-2">We retain your information only as long as necessary to fulfill the purposes outlined in this Policy, provide our Services, or comply with legal requirements. When retention is no longer necessary, we securely delete or anonymize your data.</p>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">6. Your Rights and Choices</h2>
      <p className="font-semibold">You have the following rights regarding your personal information, subject to applicable laws:</p>
      <ul className="list-disc pl-6 mt-2 space-y-2">
        <li><span className="font-medium">Access</span>: Request a copy of the data we hold about you.</li>
        <li><span className="font-medium">Correction</span>: Ask us to correct inaccurate or incomplete information.</li>
        <li><span className="font-medium">Deletion</span>: Request the deletion of your data, subject to legal exceptions (e.g., retaining data to comply with laws or protect our rights).</li>
        <li><span className="font-medium">Opt-Out</span>: Unsubscribe from marketing communications or opt out of certain data sharing (e.g., for analytics or advertising).</li>
        <li><span className="font-medium">Cookie Management</span>: Adjust your cookie preferences via your browser settings or our cookie consent tool (where available).</li>
      </ul>
      <p className="mt-2">To exercise these rights, contact us at <a href="mailto:privacy@mixphd.com" className="text-indigo-400 hover:underline">privacy@mixphd.com</a>. We will respond within a reasonable timeframe, as required by law (e.g., 30 days under GDPR, 45 days under CCPA). We may require identity verification to process your request.</p>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">7. Cookies and Tracking Technologies</h2>
      <p>We use cookies and similar technologies to improve your experience, analyze usage, and deliver tailored content. Cookies may store preferences, track navigation, or enable features like personalized recipe recommendations. You can control these technologies through your browser settings or our cookie consent tool (where available). Disabling cookies may limit some website functionality.</p>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">8. Children's Privacy</h2>
      <p>Our Services are not intended for children under the age of 13 (or 16 in certain jurisdictions, e.g., under GDPR). We do not knowingly collect personal information from children. If we discover such information has been collected, we will promptly delete it. If you believe we have collected data from a child, please contact us at <a href="mailto:privacy@mixphd.com" className="text-indigo-400 hover:underline">privacy@mixphd.com</a>.</p>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">9. Intellectual Property and Unauthorized Use of Content</h2>
      <p>All content on <a href="https://mixphd.com" className="text-indigo-400 hover:underline">https://mixphd.com</a>, including but not limited to recipes, text, images, videos, logos, and website design ("Site Content"), is the intellectual property of MixPhD or its licensors, unless otherwise specified. User-generated content (e.g., recipes or images you submit) remains your property, but by submitting it, you grant MixPhD a worldwide, non-exclusive, royalty-free, perpetual, and transferable license to use, reproduce, distribute, modify, display, and create derivative works of your content for the purpose of operating, promoting, and improving our Services.</p>
      <p className="mt-2 font-semibold">Alcohol Content Restrictions</p>
      <p>Our recipes and content involving alcohol are intended solely for individuals who are above the legal age limit for alcohol consumption in their respective countries or jurisdictions. MixPhD does not encourage or condone the use of alcohol by persons below the legal age limit, and we expressly prohibit such individuals from accessing or using alcohol-related content on our website.</p>
      <p className="mt-2">You may not use, reproduce, distribute, scrape, or otherwise exploit any Site Content or user-generated content for any purpose, including but not limited to:</p>
      <ul className="list-disc pl-6 mt-2 space-y-2">
        <li>Commercial use without our prior written permission.</li>
        <li>Training artificial intelligence models, machine learning algorithms, or other automated systems.</li>
        <li>Creating competing services or products.</li>
        <li>Republishing on other platforms without attribution or permission.</li>
      </ul>
      <p className="mt-2">Unauthorized use of our content is strictly prohibited and may result in:</p>
      <ul className="list-disc pl-6 mt-2 space-y-2">
        <li>Termination of your account and access to our Services.</li>
        <li>Legal action, including claims for damages or injunctive relief.</li>
        <li>Reporting to relevant authorities or platforms.</li>
      </ul>
      <p className="mt-2">To request permission to use our content, contact us at <a href="mailto:permissions@mixphd.com" className="text-indigo-400 hover:underline">permissions@mixphd.com</a>. Any use without explicit written approval is a violation of this Policy and our Terms of Use.</p>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">10. Limitation of Liability</h2>
      <p>To the fullest extent permitted by law, MixPhD, its affiliates, officers, directors, employees, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from:</p>
      <ul className="list-disc pl-6 mt-2 space-y-2">
        <li>Your use of or inability to use our Services.</li>
        <li>Errors, inaccuracies, or omissions in recipes or other content.</li>
        <li>Unauthorized access to or use of your personal information.</li>
        <li>Any reliance on information provided through our Services, including recipes, which may involve alcohol and should be used responsibly.</li>
      </ul>
      <p className="mt-2">Our Services are provided “as is” without warranties of any kind, express or implied. You assume all risks associated with using our Services, including following recipes or consuming alcohol.</p>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">11. International Data Transfers</h2>
      <p>If you reside outside the United States, your information may be transferred to, stored, and processed in the United States or other countries where our service providers operate. We implement safeguards, such as standard contractual clauses, to ensure your information remains protected in accordance with this Policy and applicable laws (e.g., GDPR).</p>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">12. Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy periodically to reflect changes in our practices, technology, or legal requirements. We will notify you of significant updates by posting the revised policy on our website and updating the effective date. Your continued use of our Services after such changes constitutes acceptance of the updated Policy.</p>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">13. Contact Us</h2>
      <p>For questions, concerns, or to exercise your rights under this Privacy Policy, please reach out to us at:</p>
      <p className="mt-2"><span className="font-medium">Email</span>: <a href="mailto:privacy@mixphd.com" className="text-indigo-400 hover:underline">privacy@mixphd.com</a></p>
      <p><span className="font-medium">Address</span>: MixPhD, [Your Address], United States</p>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">14. Compliance with Laws and Regulations</h2>
      <p>We are dedicated to complying with all applicable privacy laws, including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other relevant regulations. If you have questions about your rights under specific laws, please contact us for further assistance.</p>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">15. Responsible Use of Alcohol Content</h2>
      <p>MixPhD provides recipes and content involving alcohol solely for individuals who are of legal drinking age in their respective countries or jurisdictions. We do not encourage or condone the consumption of alcohol by persons below the legal age limit, and such individuals are prohibited from accessing or using alcohol-related content on our website. Users are responsible for complying with all local laws regarding alcohol consumption. MixPhD is not liable for any misuse of alcohol-related content or any harm resulting from alcohol consumption.</p>
    </section>

    <p className="mt-4 text-center italic">Note: Recipes involving alcohol should be used responsibly. Always follow local laws regarding alcohol consumption and ensure you are of legal drinking age in your jurisdiction. MixPhD is not responsible for any misuse of recipes or alcohol-related harm.</p>
      </FadeIn>
      </div>
        

       
      </div>
    </>
  )
}
