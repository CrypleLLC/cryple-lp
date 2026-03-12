import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <main style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto', color: '#667eea', lineHeight: 1.6 }}>
      <Link href="/" style={{ color: '#6366f1', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        ← Back to Home
      </Link>
      
      <h1 style={{ fontSize: '2.5rem', color: '#667eea', marginBottom: '1.5rem' }}>Privacy Policy</h1>
      <p style={{ marginBottom: '2rem', color: '#667eea' }}>Last updated: March 12, 2026</p>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '1rem' }}>1. Introduction</h2>
        <p>Welcome to <strong>Cryple!</strong> The services are operated by Cryple LLC, located at 30 N Gould St Ste R, Sheridan, WY 82801, USA. We respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you as to how we look after your personal data when you visit our website.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '1rem' }}>2. Data We Collect</h2>
        <p>Currently, through our landing page, we collect <strong>only your email address</strong> when you sign up for our early access waitlist. Emails are securely handled by our third-party provider, Loops.so.</p>
        <p style={{ marginTop: '1rem' }}>No name, IP, region, device, or other data is being kept by Cryple. However, an IP address may be retained permanently if you are engaged in activities that breach our Terms of Service (e.g., spamming, DDoS attacks against our infrastructure, brute force attacks).</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '1rem' }}>3. How We Use Your Data & Account Linking</h2>
        <p>We use the data we collect for the following purposes:</p>
        <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
          <li>To notify you when Cryple is ready for public or beta access.</li>
          <li>To send you important updates regarding our platform's development.</li>
          <li>We <strong>do not</strong> sell, rent, or distribute your email address to third parties.</li>
        </ul>
        <p>Importantly, <strong>an account on the future Cryple App will not have a linked email by default</strong>. The email you provide on our waitlist will <strong>not</strong> be related to the account you eventually create.</p>
        <p style={{ marginTop: '1rem' }}>For support interactions, your email will be kept solely in our email server in order to assist you and clarify information. We will not link your email to your app account unless we introduce this feature in the future and you explicitly and voluntarily choose to add an email to your account.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '1rem' }}>4. Data Security & "Zero-Knowledge"</h2>
        <p>The Cryple App, when launched, will keep only encrypted data from users and manage the encrypted storage. Because of this "Zero-Knowledge" architecture, we cannot read your stored encrypted files or passwords. Standard waitlist emails collected on our marketing site are handled securely by Loops.so.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '1rem' }}>5. Your Rights</h2>
        <p>You have the right to request access to the personal data we hold about you or request deletion of your data. You can completely remove yourself from the waitlist at any time by simply clicking the unsubscribe link provided in any email we send you.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '1rem' }}>6. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at: <strong>contact@cryple.io</strong> or by mail at <strong>Cryple LLC, 30 N Gould St Ste R, Sheridan, WY 82801, USA</strong>.</p>
      </section>
    </main>
    </div>
  );
}
