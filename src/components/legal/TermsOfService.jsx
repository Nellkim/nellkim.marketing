import LegalPage from './LegalPage'

export default function TermsOfService({ onBack }) {
  return (
    <LegalPage title="Terms of Service" onBack={onBack}>
      <p className="legal-updated">Last updated: March 19, 2026</p>

      <p>
        Welcome to the websites and applications operated by Nellkim LLC ("Nellkim," "we," "us," or "our").
        By accessing or using our websites, mobile applications, software products, and services
        (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms").
        If you do not agree to these Terms, do not use the Services.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By creating an account, downloading our applications, or otherwise using the Services, you
        confirm that you are at least 18 years of age (or the age of majority in your jurisdiction)
        and that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
      </p>

      <h2>2. Description of Services</h2>
      <p>
        Nellkim provides AI-powered custom software solutions, SaaS products (including but not limited
        to CostSeer, ClassFlow, and Deep Blue Links), and consumer-facing mobile applications (including
        but not limited to Golf Revolver and Jemzy). Each product or service may have additional terms
        specific to its use, which will be presented to you upon access.
      </p>

      <h2>3. User Accounts</h2>
      <p>
        Some Services require you to create an account. You are responsible for maintaining the
        confidentiality of your account credentials and for all activities that occur under your
        account. You agree to provide accurate, current, and complete information and to update
        it as necessary. You must notify us immediately at hello@nellkim.com if you suspect any
        unauthorized use of your account.
      </p>

      <h2>4. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Services for any unlawful purpose or in violation of any applicable law or regulation</li>
        <li>Interfere with or disrupt the integrity or performance of the Services</li>
        <li>Attempt to gain unauthorized access to any part of the Services or related systems</li>
        <li>Reverse engineer, decompile, or disassemble any aspect of the Services</li>
        <li>Use automated means to access the Services without our express written permission</li>
        <li>Transmit any malicious code, viruses, or harmful data through the Services</li>
        <li>Collect or harvest personal data of other users without their consent</li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <p>
        All content, features, and functionality of the Services — including but not limited to text,
        graphics, logos, icons, software, and underlying code — are the exclusive property of Nellkim LLC
        or its licensors and are protected by copyright, trademark, and other intellectual property laws.
        You are granted a limited, non-exclusive, non-transferable license to use the Services for their
        intended purpose only.
      </p>

      <h2>6. User Content</h2>
      <p>
        You retain ownership of any content you submit through the Services. By submitting content, you
        grant Nellkim a non-exclusive, worldwide, royalty-free license to use, store, and process that
        content as necessary to provide and improve the Services. You represent that you have all necessary
        rights to submit such content.
      </p>

      <h2>7. SaaS and Subscription Services</h2>
      <p>
        Certain Services are offered on a subscription basis. Payment terms, renewal policies, and
        cancellation procedures will be specified at the time of purchase. Fees are non-refundable unless
        otherwise stated or required by applicable law.
      </p>

      <h2>8. Client Engagements</h2>
      <p>
        Custom software development and consulting engagements are governed by separate agreements executed
        between Nellkim and the client. These Terms apply to the use of our websites and publicly available
        Services only.
      </p>

      <h2>9. Disclaimer of Warranties</h2>
      <p>
        THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER
        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
        FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. NELLKIM DOES NOT WARRANT THAT THE SERVICES WILL
        BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, NELLKIM LLC AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND
        AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
        DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICES, WHETHER BASED ON WARRANTY,
        CONTRACT, TORT, OR ANY OTHER LEGAL THEORY.
      </p>

      <h2>11. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Nellkim LLC and its affiliates from any claims,
        damages, losses, or expenses (including reasonable attorneys' fees) arising from your use of
        the Services or violation of these Terms.
      </p>

      <h2>12. Termination</h2>
      <p>
        We may suspend or terminate your access to the Services at any time, with or without cause or
        notice. Upon termination, your right to use the Services ceases immediately. Sections that by
        their nature should survive termination will remain in effect.
      </p>

      <h2>13. Governing Law</h2>
      <p>
        These Terms are governed by and construed in accordance with the laws of the State of Delaware,
        without regard to conflict of law principles. Any disputes arising from these Terms shall be
        resolved in the state or federal courts located in Delaware.
      </p>

      <h2>14. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. We will notify users of material changes
        by posting the updated Terms on our website with a revised "Last updated" date. Your continued use
        of the Services after changes are posted constitutes your acceptance of the revised Terms.
      </p>

      <h2>15. Contact Us</h2>
      <p>
        If you have questions about these Terms of Service, please contact us at:
      </p>
      <p>
        Nellkim LLC<br />
        Email: <a href="mailto:hello@nellkim.com">hello@nellkim.com</a><br />
        Phone: 888-778-2766
      </p>
    </LegalPage>
  )
}
