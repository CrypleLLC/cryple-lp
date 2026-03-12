import Link from 'next/link';

export default function SecurityPolicy() {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <main style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto', color: '#667eea', lineHeight: 1.6 }}>
      <Link href="/" style={{ color: '#6366f1', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        ← Back to Home
      </Link>
      
      <h1 style={{ fontSize: '2.5rem', color: '#667eea', marginBottom: '1.5rem' }}>Security Policy</h1>
      <p style={{ marginBottom: '2rem', color: '#667eea' }}>Last updated: March 12, 2026</p>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '1rem' }}>1. Zero-Knowledge Architecture</h2>
        <p>Cryple is built from the ground up as a zero-knowledge service. Our mathematical models guarantee that no employee, administrator, or attacker compromising our servers can read your stored secrets, credentials, or notes.</p>
        <p style={{ marginTop: '1rem' }}>We operate strictly under the following policy:</p>
        <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem', marginTop: '0.5rem' }}>
          <li>Your master password never leaves your browser window.</li>
          <li>All encryption/decryption happens locally on your device before transmission.</li>
          <li>We only store randomly generated salts, ECDSA public keys, and cryptographically hashed payloads.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '1rem' }}>2. Cryptography Practices</h2>
        <p>We leverage industry-standard cryptographic tools:</p>
        <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem', marginTop: '0.5rem' }}>
          <li><strong>Authentication:</strong> PBKDF2 with high iterations (100,000+) on the client side, then hashed via bcrypt upon reaching the server.</li>
          <li><strong>Signing:</strong> Asymmetric public/private key-pairs (ECDSA P-256) are generated client-side to sign background token challenges.</li>
          <li><strong>Data Storage:</strong> Files and credentials are encrypted on the client device using AES-256-GCM.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '1rem' }}>3. Infrastructure Protection</h2>
        <p>Our server infrastructure is protected by rigorous engineering limits against attack vectors:</p>
        <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem', marginTop: '0.5rem' }}>
          <li>Rate limiting is enforced heavily across all API ingress nodes to prevent bruteforcing.</li>
          <li>We use atomic single-use nonce locking to prevent Replay Attacks for all sensitive background JWT refresh flows.</li>
          <li>Database volumes and object storage buckets are encrypted at rest via our cloud providers.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '1rem' }}>4. Auditing & Open Source</h2>
        <p>We believe security requires transparency. Therefore, our target is an "Open Source Client" philosophy, meaning all client-side decryption logic is inspectable by security researchers before usage.</p>
        <p style={{ marginTop: '1rem' }}>We are presently undergoing internal security reviews ahead of formal independent third-party penetration testing.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '1rem' }}>5. Vulnerability Disclosure</h2>
        <p>If you discover a security issue or vulnerability please report it immediately rather than disclosing it publicly. We are working on a Bug Bounty program, but in the meantime please contact our security team.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '1rem' }}>6. Contact Information</h2>
        <p>For urgent security disclosures, or questions regarding this policy, please reach out directly: <strong>contact@cryple.io</strong> or by mail at <strong>Cryple LLC, 30 N Gould St Ste R, Sheridan, WY 82801, USA</strong>.</p>
      </section>
    </main>
    </div>
  );
}
