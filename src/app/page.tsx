import Link from "next/link";
import EmailForm from "@/components/EmailForm";
import EarlyAccessButton from "@/components/EarlyAccessButton";
import GetAppButton from "@/components/GetAppButton";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <header>
        <nav>
          <Link href="/" className="logo">
            Cryple
          </Link>
          <ul className="nav-links">
            <li><Link href="#features">Features</Link></li>
            <li><Link href="#security">Security</Link></li>
            <li><Link href="#how-it-works">How It Works</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
          <EarlyAccessButton />
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h1 className="fade-in-up">Secure Data Encryption Platform</h1>
          <p className="subtitle fade-in-up">
            Zero-knowledge encrypted storage with ECDSA authentication. Your keys, your data, complete privacy.
          </p>

          <div className="hero-buttons fade-in-up">
            <GetAppButton />
            <Link href="#how-it-works" className="btn-secondary">
              Learn More
            </Link>
          </div>

          <div className="demo-preview fade-in-up">
            <h3 style={{ marginBottom: '1rem', fontWeight: 600 }}>Client-Side Encryption</h3>
            <p style={{ opacity: 0.8 }}>All encryption happens in your browser. We never see your data.</p>
            <div style={{ 
              marginTop: '1.5rem', 
              padding: '1rem', 
              background: 'rgba(0,0,0,0.2)', 
              borderRadius: '0.5rem', 
              fontFamily: 'monospace', 
              fontSize: '0.9rem' 
            }}>
              <div style={{ color: '#10b981' }}>Authenticated with seed phrase</div>
              <div style={{ color: '#f59e0b' }}>Encrypting data with AES-256-GCM...</div>
              <div style={{ color: '#10b981' }}>Data encrypted and stored securely</div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Form Section */}
      <section id="early-access" className="cta-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h2>Get Early Access</h2>
          <p style={{ marginBottom: "3rem" }}>Be the first to know when Cryple launches. Join our waitlist today!</p>
          <EmailForm />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div>
          <h2 className="section-title">Why Choose Cryple?</h2>
          <p className="section-subtitle">
            Built with privacy-first principles and cutting-edge encryption technology
          </p>

          <div className="features-grid">
            <div className="feature-card">
              {/* <div className="feature-icon"></div> */}
              <h3>Zero-Knowledge Storage</h3>
              <p>
                Your data is encrypted client-side before it ever leaves your browser. We never see your plaintext data, ensuring complete privacy.
              </p>
            </div>

            <div className="feature-card">
              {/* <div className="feature-icon"></div> */}
              <h3>ECDSA Authentication</h3>
              <p>
                Secure authentication using ECDSA challenge-response protocol derived from your seed phrase. Your private keys never leave your device.
              </p>
            </div>

            <div className="feature-card">
              {/* <div className="feature-icon"></div> */}
              <h3>Military-Grade Encryption</h3>
              <p>
                AES-256-GCM encryption with PBKDF2 key derivation. Each encryption uses unique initialization vectors for maximum security.
              </p>
            </div>

            <div className="feature-card">
              {/* <div className="feature-icon"></div> */}
              <h3>Cross-Platform Access</h3>
              <p>
                Access your encrypted data from any device with your seed phrase. Works on desktop, mobile, and tablet browsers.
              </p>
            </div>

            <div className="feature-card">
              {/* <div className="feature-icon"></div> */}
              <h3>Instant Sync</h3>
              <p>
                Data is instantly available across all your devices once you authenticate with your seed phrase. No manual syncing required.
              </p>
            </div>

            <div className="feature-card">
              {/* <div className="feature-icon"></div> */}
              <h3>You Own Your Data</h3>
              <p>
                Complete data ownership with your private keys. Export, backup, or delete your data at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="security">
        <div className="security-content">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left', color: 'white' }}>
              Enterprise-Grade Security
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left', color: '#d1d5db' }}>
              Built with security best practices and audited encryption standards
            </p>

            <ul className="security-list">
              <li>Client-side encryption with Web Crypto API</li>
              <li>Zero-knowledge architecture</li>
              <li>HTTPS enforcement with certificate pinning</li>
              <li>Secure key derivation (PBKDF2 100k iterations)</li>
              <li>No plaintext data transmission</li>
            </ul>
          </div>

          <div className="tech-specs">
            <h4>Technical Specifications</h4>
            <ul>
              <li><strong>Encryption:</strong> AES-256-GCM</li>
              <li><strong>Key Derivation:</strong> PBKDF2-SHA256</li>
              <li><strong>Key Size:</strong> 256-bit</li>
              <li><strong>Iterations:</strong> 100,000</li>
              <li><strong>IV Generation:</strong> Cryptographically secure random</li>
              <li><strong>Authentication:</strong> ECDSA signatures</li>
              <li><strong>Transport:</strong> TLS 1.3</li>
              <li><strong>Storage:</strong> Encrypted PostgreSQL</li>
            </ul>

            <h4 style={{ marginTop: '2rem' }}>Authentication Method</h4>
            <ul>
              <li>BIP39 seed phrase support</li>
              <li>ECDSA challenge-response</li>
              <li>Local seed phrase encryption</li>
              <li>JWT session tokens</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Simple, secure, and completely private in just a few steps
          </p>

          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Create or Import Seed Phrase</h3>
              <p>
                Generate a new BIP39 seed phrase or import an existing one. This seed phrase is the master key to your encrypted data.
              </p>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h3>Encrypt Your Data</h3>
              <p>
                Enter your sensitive data (passwords, notes, API keys). It&apos;s encrypted in your browser using AES-256-GCM derived from your seed phrase.
              </p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h3>Secure Storage</h3>
              <p>
                Encrypted data is stored on our servers. We only see encrypted blobs - never your actual data.
              </p>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <h3>Access Anywhere</h3>
              <p>
                Access your data from any device using your seed phrase and password. Only you can decrypt and view your information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h2>Ready to Secure Your Data?</h2>
          <p style={{ marginBottom: "3rem" }}>Join thousands of users who will trust Cryple with their most sensitive information</p>
          <GetAppButton style={{ fontSize: '1.2rem', padding: '1.25rem 2.5rem' }} />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Cryple</h4>
            <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>
              Secure data encryption platform with zero-knowledge architecture.
            </p>
            <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
              Your keys, your data, complete privacy.
            </p>
          </div>

          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><Link href="/app">Launch App</Link></li>
              <li><Link href="#features">Features</Link></li>
              <li><Link href="#security">Security</Link></li>
              <li><Link href="#how-it-works">How It Works</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><Link href="/docs">Documentation</Link></li>
              <li><Link href="/api">API Reference</Link></li>
              <li><Link href="/security">Security Audit</Link></li>
              <li><Link href="/support">Support</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/security-policy">Security Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Cryple™. All rights reserved. Built for privacy.</p>
        </div>
      </footer>
    </div>
  );
}
