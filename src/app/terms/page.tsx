import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <main style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto', color: '#667eea', lineHeight: 1.6 }}>
      <Link href="/" style={{ color: '#6366f1', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        ← Back to Home
      </Link>
      
      <h1 style={{ fontSize: '2.5rem', color: '#667eea', marginBottom: '1.5rem' }}>Terms of Service</h1>
      <p style={{ marginBottom: '2rem', color: '#667eea' }}>Last updated: March 12, 2026</p>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '1rem' }}>1. Acceptance of Terms</h2>
        <p>By accessing or using the Cryple ("we," "us," or "our") website, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '1rem' }}>2. Use of Early Access Waitlist</h2>
        <p>We provide a waitlist to offer early access to our future application. In registering:</p>
        <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem', marginTop: '0.5rem' }}>
          <li>You agree to provide accurate and complete information (such as your email address).</li>
          <li>You acknowledge that submitting to the waitlist does not guarantee immediate access to the platform.</li>
          <li>We reserve the right to limit access or remove any individual from the waitlist at our discretion.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '1rem' }}>3. Service Availability and Changes</h2>
        <p>Cryple is a service currently in active development. We may change, suspend, or discontinue the waitlist or aspects of our marketing website at any time without notice. We will not be liable if, for any reason, all or any part of the site is unavailable at any time.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '1rem' }}>4. Intellectual Property</h2>
        <p>The site and its original content (excluding standard user submissions), features, and functionality are and will remain the exclusive property of Cryple and its licensors. The site is protected by copyright, trademark, and other laws.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '1rem' }}>5. Limitation of Liability</h2>
        <p>In no event shall Cryple, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the waitlist service.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '1rem' }}>6. Termination</h2>
        <p>We may terminate or suspend your access to our waitlist immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '1rem' }}>7. Governing Law</h2>
        <p>These Terms shall be governed and construed in accordance with the laws of Wyoming, US, without regard to its conflict of law provisions.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '1rem' }}>8. Changes to Terms</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our site after any revisions become effective, you agree to be bound by the revised terms.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '1rem' }}>9. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at: <strong>contact@cryple.io</strong> or by mail at <strong>Cryple LLC, 30 N Gould St Ste R, Sheridan, WY 82801, USA</strong>.</p>
      </section>
    </main>
    </div>
  );
}
