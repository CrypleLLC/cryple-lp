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
          <h1 className="fade-in-up">Secure Your Digital Life. Protect Your Legacy.</h1>
          <p className="subtitle fade-in-up">
            The post-quantum vault that secures your everyday passwords, files, and crypto—and guarantees your heirs inherit them through our Zero-Knowledge Succession Protocol.
          </p>

          <div className="hero-buttons fade-in-up">
            <GetAppButton />
            <Link href="#how-it-works" className="btn-secondary">
              Learn More
            </Link>
          </div>

          <div className="demo-preview fade-in-up">
            <h3 style={{ marginBottom: '1rem', fontWeight: 600 }}>Zero-Knowledge Proofs in Action</h3>
            <p style={{ opacity: 0.8 }}>Your keys never leave your device. Only you—and your chosen heirs—can decrypt your life.</p>
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
          <h2 className="section-title">Everyday Utility. Lifetime Security.</h2>
          <p className="section-subtitle">
            Manage your daily digital life with ease while securing your long-term legacy with post-quantum encryption.
          </p>

          <div className="features-sequence">
            <div className="feature-row">
              <div className="feature-image-container">
                <Image src="/family.jpg" alt="Family" fill sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="feature-text">
                <h3>An Entire Digital Life Lost From People You Love?</h3>
                <p>
                  Why having thousands in crypto, a life in documents and files and have this away from people you love? Cryple permanently secures your digital legacy, ensuring your loved ones can access it when needed.
                </p>
              </div>
            </div>

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
                <Image src="/digital-padlock.png" alt="Secure secrets vault" fill sizes="(max-width: 768px) 100vw, 50vw" />
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
                <Image src="/chat.jpg" alt="Secure vault" fill sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="feature-text">
                <h3>Encrypted P2P Chat & File Sharing</h3>
                <p>
                  Communicate and share sensitive documents with absolute security. Our post-quantum hybrid encryption guarantees that your private messages and high-value shared secrets remain strictly between you and your trusted contacts.
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
          <p style={{ marginBottom: "2rem" }}>Join our waitlist today and secure your spot for our upcoming releases.</p>

          <div className="roadmap-timeline">
            <div className="timeline-item alpha">
              <div className="timeline-marker"></div>
              <div className="timeline-content-top">
                <h4 className="timeline-date">May 2026</h4>
                <p className="timeline-title">Alpha Release</p>
              </div>
              <div className="timeline-content-bottom">
                <p className="timeline-desc">Core vault, private notes, password manager and chrome extension.</p>
              </div>
            </div>
            
            <div className="timeline-item beta">
              <div className="timeline-marker"></div>
              <div className="timeline-content-top">
                <p className="timeline-desc">Bitcoin Wallet, P2P file sharing, and Post-Quantum Digital Inheritance testing.</p>
              </div>
              <div className="timeline-content-bottom">
                <h4 className="timeline-date">July 2026</h4>
                <p className="timeline-title">Beta Release</p>
              </div>
            </div>

            <div className="timeline-item launch">
              <div className="timeline-marker"></div>
              <div className="timeline-content-top">
                <h4 className="timeline-date">September 2026</h4>
                <p className="timeline-title">Global Launch</p>
              </div>
              <div className="timeline-content-bottom">
                <p className="timeline-desc">Full public release. The post-quantum vault opens to everyone.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '3rem', marginBottom: '2.5rem' }}>
            <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 500, color: 'white', opacity: 0.9 }}>
              Join the waitlist to be notified about the global launch. During the first month of release, premium subscriptions will have a <strong>50% discount</strong>.
            </p>
          </div>

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
                <Image src="/icons/anywhere.svg" alt="Inheritance Icon" width={196} height={196} />
              </div>
              <h3>Set Up Your Digital Legacy</h3>
              <p>
                Assign trusted Guardians and configure an inactivity timer. Ensure your heirs automatically and securely inherit your vault if you disappear.
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
              <li>Proof of ownership via ECDSA P-256 cryptographic signatures</li>
              <li>Post-quantum encryption with ML-KEM (Kyber-768)</li>
              <li>Hybrid PQXDH: X25519 + ML-KEM combined so both classical and quantum attacks must be broken simultaneously</li>
              <li>Seamless 2FA (BIP39 Seed Phrase + PIN)</li>
              <li>No plaintext master secret transmission, ever</li>
            </ul>
          </div>

          <div className="tech-specs">
            <h4>Technical Specifications</h4>
            <ul>
              <li><strong>Symmetric Encryption:</strong> AES-256-GCM</li>
              <li><strong>Classic Key Exchange:</strong> X25519 (ECDH)</li>
              <li><strong>Post-Quantum KEM:</strong> ML-KEM / Kyber-768</li>
              <li><strong>Hybrid Protocol:</strong> PQXDH (X25519 + ML-KEM)</li>
              <li><strong>Key Derivation:</strong> BIP32 Deterministic Keys</li>
              <li><strong>PIN Hashing:</strong> PBKDF2-SHA256 (100k) client-side</li>
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
