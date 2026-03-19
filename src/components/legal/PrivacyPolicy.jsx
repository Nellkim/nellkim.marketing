import LegalPage from './LegalPage'

export default function PrivacyPolicy({ onBack }) {
  return (
    <LegalPage title="Privacy Policy" onBack={onBack}>
      <p className="legal-updated">Last updated: March 19, 2026</p>

      <p>
        Nellkim LLC ("Nellkim," "we," "us," or "our") respects your privacy. This Privacy Policy
        describes how we collect, use, disclose, and protect your information when you use our
        websites, mobile applications, software products, and services (collectively, the "Services").
      </p>

      <h2>1. Information We Collect</h2>

      <h3>Information You Provide</h3>
      <ul>
        <li>Account information: name, email address, phone number, company name</li>
        <li>Communications: messages you send through contact forms or email</li>
        <li>Payment information: billing details processed through secure third-party payment processors</li>
        <li>User content: data, files, and information you submit through our Services</li>
      </ul>

      <h3>Information Collected Automatically</h3>
      <ul>
        <li>Device information: device type, operating system, unique device identifiers</li>
        <li>Usage data: pages viewed, features used, interactions with the Services</li>
        <li>Log data: IP address, browser type, access times, referring URLs</li>
        <li>Location data: approximate location based on IP address (precise location only with your consent)</li>
      </ul>

      <h3>Information from Third Parties</h3>
      <p>
        We may receive information from third-party services you connect to our platform, analytics
        providers, and business partners, in accordance with their own privacy policies.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, maintain, and improve the Services</li>
        <li>Process transactions and send related information</li>
        <li>Respond to your inquiries and provide customer support</li>
        <li>Send administrative notices, updates, and security alerts</li>
        <li>Analyze usage patterns to improve user experience</li>
        <li>Detect, prevent, and address technical issues and fraud</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>3. How We Share Your Information</h2>
      <p>We do not sell your personal information. We may share information with:</p>
      <ul>
        <li>Service providers who assist in operating our Services (hosting, analytics, payment processing)</li>
        <li>Professional advisors (lawyers, auditors) as needed for business operations</li>
        <li>Law enforcement or government authorities when required by law or to protect our rights</li>
        <li>Business transferees in connection with a merger, acquisition, or sale of assets</li>
      </ul>

      <h2>4. Data Retention</h2>
      <p>
        We retain your personal information for as long as your account is active or as needed to
        provide the Services. We may retain certain information as required by law or for legitimate
        business purposes, such as resolving disputes and enforcing agreements.
      </p>

      <h2>5. Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your information
        against unauthorized access, alteration, disclosure, or destruction. However, no method of
        transmission over the Internet or electronic storage is completely secure, and we cannot
        guarantee absolute security.
      </p>

      <h2>6. Your Rights and Choices</h2>
      <p>Depending on your jurisdiction, you may have the right to:</p>
      <ul>
        <li>Access, correct, or delete your personal information</li>
        <li>Object to or restrict certain processing of your data</li>
        <li>Request portability of your data</li>
        <li>Withdraw consent where processing is based on consent</li>
        <li>Opt out of marketing communications at any time</li>
      </ul>
      <p>
        To exercise these rights, contact us at <a href="mailto:hello@nellkim.com">hello@nellkim.com</a>.
        We will respond to your request within the timeframe required by applicable law.
      </p>

      <h2>7. Children's Privacy</h2>
      <p>
        Our Services are not directed to children under 13. We do not knowingly collect personal
        information from children under 13. If we learn that we have collected information from a
        child under 13, we will take steps to delete that information promptly. If you believe a
        child has provided us with personal information, please contact us at hello@nellkim.com.
      </p>

      <h2>8. Mobile Applications</h2>
      <p>
        Our mobile applications (including Golf Revolver and Jemzy) may request access to certain
        device features such as location, camera, or notifications. You can manage these permissions
        through your device settings at any time. We only access features that are necessary for the
        functionality you choose to use.
      </p>

      <h2>9. Third-Party Links and Services</h2>
      <p>
        Our Services may contain links to third-party websites or services. We are not responsible
        for the privacy practices of these third parties. We encourage you to review the privacy
        policies of any third-party services you access through our platform.
      </p>

      <h2>10. International Data Transfers</h2>
      <p>
        Your information may be transferred to and processed in countries other than your country
        of residence. We take appropriate safeguards to ensure your information receives an adequate
        level of protection in the jurisdictions in which we process it.
      </p>

      <h2>11. California Privacy Rights</h2>
      <p>
        California residents have additional rights under the California Consumer Privacy Act (CCPA),
        including the right to know what personal information is collected, request deletion, and
        opt out of the sale of personal information. As stated above, we do not sell personal information.
        To exercise your California privacy rights, contact us at hello@nellkim.com.
      </p>

      <h2>12. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of material changes
        by posting the updated policy on our website with a revised "Last updated" date. Your continued
        use of the Services after changes are posted constitutes your acceptance of the updated policy.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
      </p>
      <p>
        Nellkim LLC<br />
        Email: <a href="mailto:hello@nellkim.com">hello@nellkim.com</a><br />
        Phone: 888-778-2766
      </p>
    </LegalPage>
  )
}
