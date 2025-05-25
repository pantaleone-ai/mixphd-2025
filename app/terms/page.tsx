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
 <h1 className="text-3xl font-bold text-center mb-6 text-gray-100">Terms of Use for MixPhD.com</h1>
    <p className="text-lg italic mb-4">Effective Date: May 5, 2025</p>

    <p className="mb-4">Welcome to MixPhD ("we," "our," or "us"). These Terms of Use ("Terms") govern your access to and use of our website (<a href="https://mixphd.com" className="text-indigo-400 hover:underline">https://mixphd.com</a>) and any services, features, or content we provide, including but not limited to accessing, submitting, or commenting on alcoholic and non-alcoholic drink recipes (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, you must refrain from using our Services.</p>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">1. Acceptance of Terms</h2>
      <p>By accessing or using the Services, you confirm that you are at least 19 years old (or the legal drinking age in your jurisdiction, if higher) or otherwise have the legal capacity to enter into this agreement. Your use of the Services constitutes your unconditional acceptance of these Terms and any additional policies, guidelines, or agreements we may provide, including our Privacy Policy. We may update these Terms at our sole discretion, and your continued use of the Services following such updates signifies your agreement to the revised Terms.</p>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">2. Description of Services</h2>
      <p>MixPhD provides an online platform for users to access, share, and comment on alcoholic and non-alcoholic drink recipes. The Services may include user accounts, recipe submission features, and community interactions. We reserve the absolute right to modify, suspend, or discontinue any aspect of the Services at any time, with or without notice, for any reason or no reason at all.</p>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">3. User Obligations</h2>
      <p className="font-semibold">As a user, you agree to:</p>
      <ul className="list-disc pl-6 mt-2 space-y-2">
        <li>Use the Services solely for lawful purposes and in strict accordance with these Terms and all applicable local, state, national, and international laws, including those related to alcohol consumption.</li>
        <li>Provide accurate, current, and complete information when registering an account, submitting recipes, or interacting with the Services.</li>
        <li>Safeguard your account credentials and promptly report any unauthorized access to us at <a href="mailto:support@mixphd.com" className="text-indigo-400 hover:underline">support@mixphd.com</a>.</li>
        <li>Refrain from engaging in prohibited activities, including but not limited to:</li>
        <ul className="list-circle pl-6 space-y-2">
          <li>Submitting false, misleading, or infringing content, including recipes or images that violate third-party rights.</li>
          <li>Hacking, scraping, reverse engineering, or attempting to gain unauthorized access to our systems or content.</li>
          <li>Transmitting viruses, malware, spam, or any content that disrupts or harms the Services or other users.</li>
          <li>Using the Services to promote illegal activities or content inappropriate for individuals under the legal drinking age.</li>
          <li>Misusing alcohol-related content in violation of Section 4 or Section 11.</li>
        </ul>
      </ul>
      <p className="mt-2">We may, at our sole discretion, suspend or terminate your access to the Services immediately if you breach these obligations or for any other reason we deem appropriate, including suspected misuse of alcohol-related content.</p>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">4. Intellectual Property and Alcohol Content Restrictions</h2>
      <p>All content, technology, and materials associated with the Services—including recipes, text, images, videos, logos, designs, and trademarks ("Site Content")—are the exclusive property of MixPhD or its licensors, unless otherwise specified. User-generated content (e.g., recipes, images, or comments you submit) remains your property, but by submitting it, you grant MixPhD a worldwide, non-exclusive, royalty-free, perpetual, and transferable license to use, reproduce, distribute, modify, display, and create derivative works of your content for the purpose of operating, promoting, and improving our Services.</p>
      <p className="mt-2 font-semibold">Alcohol Content Restrictions</p>
      <p>Our recipes and content involving alcohol are intended solely for individuals who are above the legal age limit for alcohol consumption in their respective countries or jurisdictions. MixPhD does not encourage or condone the use of alcohol by persons below the legal age limit, and we expressly prohibit such individuals from accessing, using, or sharing alcohol-related content on our website. You agree not to share alcohol-related content with minors or use it in any manner that violates applicable laws.</p>
      <p className="mt-2">You are prohibited from copying, modifying, distributing, scraping, or creating derivative works from any Site Content or user-generated content without our express prior written consent. Prohibited uses include, but are not limited to:</p>
      <ul className="list-disc pl-6 mt-2 space-y-2">
        <li>Commercial exploitation of recipes or content without permission.</li>
        <li>Training artificial intelligence models, machine learning algorithms, or other automated systems with our content.</li>
        <li>Republishing content on other platforms without attribution or approval.</li>
        <li>Creating competing services or products using our content.</li>
      </ul>
      <p className="mt-2">Unauthorized use of our intellectual property or violation of alcohol content restrictions is strictly forbidden and may result in account termination, legal action, or other remedies at our discretion. To request permission to use our content, contact us at <a href="mailto:permissions@mixphd.com" className="text-indigo-400 hover:underline">permissions@mixphd.com</a>.</p>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">5. Payment Terms</h2>
      <p>If you subscribe to or purchase any premium Services (e.g., enhanced account features or ad-free access), you agree to pay all fees as outlined on our website. We may adjust pricing at our sole discretion, and your continued use of the Services after such changes constitutes acceptance of the updated fees. Non-payment may lead to immediate suspension or termination of your access to the Services, and we reserve the right to pursue all available remedies for unpaid amounts, including collection actions.</p>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">6. Limitation of Liability</h2>
      <p>To the fullest extent permitted by applicable law, MixPhD, its affiliates, and their respective officers, directors, employees, and agents shall not be liable for any damages—whether direct, indirect, incidental, consequential, or punitive—arising from:</p>
      <ul className="list-disc pl-6 mt-2 space-y-2">
        <li>Your use of or inability to use the Services.</li>
        <li>Errors, inaccuracies, or omissions in recipes or other content, including user-generated content.</li>
        <li>Any harm or injury resulting from the preparation or consumption of recipes, including alcohol-related content.</li>
        <li>Unauthorized access to or use of your account or personal information.</li>
        <li>Reliance on information provided through the Services.</li>
      </ul>
      <p className="mt-2">Our aggregate liability for any claim related to the Services shall not exceed the total amount you paid us in the six (6) months prior to the claim. The Services are provided on an "as is" and "as available" basis, without any warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We disclaim all responsibility for the accuracy, reliability, safety, or availability of the Services, including the suitability of recipes for your needs or compliance with dietary or legal restrictions.</p>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">7. Indemnification</h2>
      <p>You agree to indemnify, defend, and hold harmless MixPhD, its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, or expenses (including reasonable attorneys’ fees) arising from:</p>
      <ul className="list-disc pl-6 mt-2 space-y-2">
        <li>Your use of the Services, including submission of recipes or comments.</li>
        <li>Your violation of these Terms, including misuse of alcohol-related content.</li>
        <li>Your infringement of any third-party rights, including intellectual property or privacy rights.</li>
        <li>Any harm or injury caused by your preparation or consumption of recipes accessed through the Services.</li>
      </ul>
      <p className="mt-2">This obligation survives the termination of your use of the Services.</p>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">8. Termination</h2>
      <p>We reserve the unrestricted right to terminate or suspend your access to the Services at any time, with or without cause, and with or without notice. Reasons for termination may include, but are not limited to, violations of these Terms, misuse of alcohol-related content, or any conduct we deem detrimental to our interests or other users. Upon termination, your rights to use the Services cease immediately, and we may, at our discretion, delete your account and all associated data without liability.</p>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">9. Governing Law and Dispute Resolution</h2>
      <p>These Terms are governed by the laws of the State of Delaware, without regard to its conflict of law principles. Any disputes arising from or related to these Terms or the Services shall be resolved exclusively through binding arbitration in Wilmington, Delaware, conducted under the rules of the American Arbitration Association. You waive any right to pursue claims through class actions or jury trials, and agree that arbitration is your sole remedy for resolving disputes with us. Notwithstanding the foregoing, we may seek injunctive relief in any court of competent jurisdiction to protect our intellectual property or enforce alcohol content restrictions.</p>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">10. Changes to Terms</h2>
      <p>We may revise these Terms at any time, at our sole discretion, with changes taking effect immediately upon posting on our website. Your continued use of the Services after such revisions constitutes your binding acceptance of the updated Terms. It is your responsibility to review these Terms regularly for any changes.</p>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">11. Responsible Use of Alcohol Content</h2>
      <p>MixPhD provides recipes and content involving alcohol solely for individuals who are of legal drinking age in their respective countries or jurisdictions. We do not encourage or condone the consumption of alcohol by persons below the legal age limit, and such individuals are prohibited from accessing, using, or sharing alcohol-related content on our website. Users are responsible for complying with all local laws regarding alcohol consumption, including age restrictions and safe consumption practices. MixPhD is not liable for any misuse of alcohol-related content or any harm resulting from alcohol consumption, including but not limited to health risks, legal violations, or accidents.</p>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">12. Miscellaneous</h2>
      <p className="font-semibold">Severability</p>
      <p>If any provision of these Terms is deemed invalid or unenforceable, the remaining provisions shall remain fully effective.</p>
      <p className="font-semibold mt-2">Entire Agreement</p>
      <p>These Terms, along with our Privacy Policy and any referenced agreements, constitute the complete agreement between you and MixPhD regarding the Services.</p>
      <p className="font-semibold mt-2">No Waiver</p>
      <p>Our failure to enforce any provision of these Terms does not constitute a waiver of that provision or any other rights.</p>
      <p className="font-semibold mt-2">Assignment</p>
      <p>You may not assign your rights or obligations under these Terms without our prior written consent. We may assign our rights and obligations at our discretion without notice to you.</p>
      <p className="font-semibold mt-2">Force Majeure</p>
      <p>We shall not be liable for any failure to perform our obligations due to events beyond our reasonable control, including natural disasters, cyber-attacks, or governmental actions.</p>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">13. Contact Us</h2>
      <p>For questions or concerns about these Terms, please reach out to us at:</p>
      <p className="mt-2"><span className="font-medium">Email</span>: <a href="mailto:support@mixphd.com" className="text-indigo-400 hover:underline">support@mixphd.com</a></p>
      <p><span className="font-medium">Address</span>: MixPhD, [Your Address], United States</p>
    </section>

    <p className="mt-4 text-center italic">Note: Recipes involving alcohol should be used responsibly. Always follow local laws regarding alcohol consumption and ensure you are of legal drinking age in your jurisdiction. MixPhD is not responsible for any misuse of recipes or alcohol-related harm.</p>
    <p className="mt-4 text-center italic">By accessing or using our Services, you acknowledge that you have read, understood, and agree to be fully bound by these Terms of Use.</p>      </div>
        <FadeIn>

          <ResourceCardGrid sortedData={data} filteredFeaturedData={null}>
            {search ?? category ?? label ?? tag ? (
              <div className="md:mr-auto mx-auto flex flex-col items-center md:items-start">
                <div className="flex mb-1 justify-center md:justify-start">
                
                  {search ? (
                    <Search className="mr-1 bg-neutral-800 size-6 p-1 rounded-full" />
                  ) : null}
                  {category ? (
                    <BoxIcon className="mr-1 bg-neutral-800 size-6 p-1 rounded-full" />
                  ) : null}
                  {label ? (
                    <Hash className="mr-1 bg-neutral-800 size-6 p-1 rounded-full" />
                  ) : null}
                  {tag ? (
                    <TagIcon className="mr-1 bg-neutral-800 size-6 p-1 rounded-full" />
                  ) : null}
                  {search ? "search" : ""}
                  {category ? "category" : ""}
                  {label ? "label" : ""}
                  {tag ? "tag" : ""}
                </div>
                <GradientHeading size="xxl">
                  {search ?? category ?? label ?? tag}
                </GradientHeading>
              </div>
            ) : null}

            <Separator className="mb-12 ml-auto w-[85%] bg-black/5 h-[2px] animate-pulse rounded-l-full" />
          </ResourceCardGrid>
        </FadeIn>
      </div>
    </>
  )
}
