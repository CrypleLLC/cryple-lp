import Link from "next/link";
import Image from "next/image";
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
            <Image src="/icon.png" alt="Cryple Logo" width={32} height={32} className="logo-image" />
            Cryple
          </Link>
          <ul className="nav-links">
            <li><Link href="#features">Features</Link></li>
            <li><Link href="#how-it-works">How It Works</Link></li>
            <li><Link href="#security">Security</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
          <EarlyAccessButton />
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h1 className="fade-in-up">The Zero-Knowledge Vault for Your Digital Life</h1>
          <p className="subtitle fade-in-up">
            Secure your passwords, private files, and Bitcoin under one master key. Absolute privacy powered by client-side encryption—we couldn't see your data even if we wanted to.
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

      {/* Features Section */}
      <section id="features" className="features">
        <div>
          <h2 className="section-title">Why Choose Cryple?</h2>
          <p className="section-subtitle">
            Built with privacy-first principles and cutting-edge encryption technology
          </p>

          <div className="features-sequence">
            <div className="feature-row">
              <div className="feature-image-container">
                <Image src="/confident.jpg" alt="Confident person" fill sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="feature-text">
                <h3>You Are Not The Product</h3>
                <p>
                  No tracking algorithms, no targeted ads, and no data selling. You pay for total privacy. We provide a distraction-free, premium ecosystem built solely to protect you.
                </p>
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-image-container">
                <Image src="/gallery.jpg" alt="Private vault UI" fill sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="feature-text">
                <h3>Private Vault & Camera</h3>
                <p>
                  A completely safe space for your media. Snap photos and videos directly into the app, bypassing your phone's native gallery entirely so your personal life stays strictly private.
                </p>
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-image-container">
                <Image src="/notes.jpg" alt="Private text editor" fill sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="feature-text">
                <h3>Centralized Private Notes</h3>
                <p>
                  The ultimate unique space to organize your mind. Centralize your brilliant ideas, travel plans, book lists, or daily routines in an encrypted editor nobody else can read.
                </p>
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-image-container">
                <Image src="/wallet.jpg" alt="Bitcoin wallet interface" fill sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="feature-text">
                <h3>All-in-One Bitcoin Wallet</h3>
                <p>
                  Why use multiple apps? Store your sensitive seed phrases securely and make Bitcoin transactions right from the same place. True financial privacy seamlessly integrated.
                </p>
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-image-container">
                <Image src="/digital-padlock.png" alt="Secure vault" fill sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="feature-text">
                <h3>High-Value Secrets Vault</h3>
                <p>
                  Keep your bank PINs, recovery codes, and digital life locked down. An ultra-secure, isolated vault that never touches your browser extensions for maximum safety.
                </p>
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-image-container">
                <Image src="/login.png" alt="Chrome extension" fill sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="feature-text">
                <h3>Passwords & Extension</h3>
                <p>
                  Log into your favorite sites instantly with our Chrome extension. Get the daily convenience of quick autofill paired with the peace of mind of military-grade encryption.
                </p>
              </div>
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

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Simple, secure, and completely private in just a few steps
          </p>

          <div className="steps">
            <div className="step">
              <div className="step-icon">
                <Image src="/icons/generate.svg" alt="Generate Icon" width={196} height={196} />
              </div>
              <h3>Generate Your Master Key</h3>
              <p>
                Create a secure 12-word seed phrase. This offline master key guarantees you are the only person on earth who can decrypt your account.
              </p>
            </div>

            <div className="step">
              <div className="step-icon">
                <Image src="/icons/secure.svg" alt="Secure Icon" width={196} height={196} />
              </div>
              <h3>Secure Passwords & Files</h3>
              <p>
                Add your passwords, everyday logins, and upload sensitive PDFs. Everything is instantly scrambled into mathematical gibberish in your browser.
              </p>
            </div>

            <div className="step">
              <div className="step-icon">
                <Image src="/icons/bitcoin.svg" alt="Bitcoin Icon" width={196} height={196} />
              </div>
              <h3>Manage Your Bitcoin</h3>
              <p>
                Your master key securely derives a private Bitcoin wallet. Check and manage your digital wealth seamlessly alongside your private documents.
              </p>
            </div>

            <div className="step">
              <div className="step-icon">
                <Image src="/icons/anywhere.svg" alt="Anywhere Icon" width={196} height={196} />
              </div>
              <h3>Access Anywhere</h3>
              <p>
                Log in and decrypt your vault across desktop and mobile devices. Our zero-knowledge cloud syncs your encrypted data seamlessly.
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
              Built with uncompromising cryptographic best practices and zero-knowledge architecture.
            </p>

            <ul className="security-list">
              <li>Client-side encryption so we never see your data</li>
              <li>Zero-knowledge server architecture</li>
              <li>Proof of ownership via ECDSA cryptographic signatures</li>
              <li>Seamless 2FA (BIP39 Seed Phrase + Password)</li>
              <li>No plaintext master secret transmission, ever</li>
            </ul>
          </div>

          <div className="tech-specs">
            <h4>Technical Specifications</h4>
            <ul>
              <li><strong>Encryption:</strong> AES-256-GCM & X25519</li>
              <li><strong>Key Derivation:</strong> BIP32 Deterministic Keys</li>
              <li><strong>Password KDF:</strong> PBKDF2-SHA256 (100k)</li>
              <li><strong>Authentication:</strong> ECDSA P-256 Signatures</li>
              <li><strong>Server Hashing:</strong> Bcrypt (Cost 10+)</li>
              <li><strong>Transport:</strong> TLS 1.3 strictly enforced</li>
            </ul>

            <h4 style={{ marginTop: '2rem' }}>Authentication Model</h4>
            <ul>
              <li>Atomic Two-Factor Verification</li>
              <li>Client-generated ECDSA challenge-response</li>
              <li>BIP39 master seed encrypted locally</li>
              <li>Stateless JWT sessions</li>
            </ul>
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
              <li><Link href="#early-access">Join Waitlist</Link></li>
              <li><Link href="#features">Features</Link></li>
              <li><Link href="#security">Security</Link></li>
              <li><Link href="#how-it-works">How It Works</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:contact@cryple.io">Email Us</a></li>
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
          <p>&copy; 2026 Cryple™. All rights reserved. Built for privacy. Cryple LLC, 30 N Gould St Ste R, Sheridan, WY 82801, USA</p>
        </div>
      </footer>
    </div>
  );
}
