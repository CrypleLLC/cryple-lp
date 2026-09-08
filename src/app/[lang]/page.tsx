import Link from "next/link";
import Image from "next/image";
import EmailForm from "@/components/EmailForm";
import EarlyAccessButton from "@/components/EarlyAccessButton";
import GetAppButton from "@/components/GetAppButton";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getDictionary } from "@/lib/dictionaries";

const showRoadmapTimeline: boolean = true;
const showEmailSubscription: boolean = true;
const TEST_APP_URL = 'https://test-app.cryple.io';

const vaultIcons = [
  '/icons/secrets.svg',
  '/icons/notes.svg',
  '/icons/documents.svg',
  '/icons/drive.svg',
  '/icons/safe-sharing.svg',
  '/icons/password-manager.svg',
  '/icons/bitcoin-wallet.svg',
];

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      {/* Header */}
      <header>
        <nav>
          <Link href={`/${lang === 'en' ? '' : lang}`} className="logo">
            <Image src="/icon.png" alt="Cryple Logo" width={32} height={32} className="logo-image" />
            Cryple
          </Link>
          <ul className="nav-links">
            {/* Adding the locale to anchors is not strictly necessary for hash links, but safe */}
            <li><Link href="#features">{dict.nav.features}</Link></li>
            <li><Link href="#how-it-works">{dict.nav.howItWorks}</Link></li>
            <li><Link href="#security">{dict.nav.security}</Link></li>
            <li><Link href="#contact">{dict.nav.contact}</Link></li>
          </ul>
          <div className="nav-actions">
            <LanguageSwitcher currentLang={lang} />
            {showEmailSubscription && (
              <EarlyAccessButton text={dict.nav.getEarlyAccess} />
            )}
            <a href={TEST_APP_URL} className="cta-button cta-button-secondary">{dict.nav.tryTestApp}</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h1 className="fade-in-up">{dict.hero.title}</h1>
          <p className="subtitle fade-in-up">
            {dict.hero.subtitle}
          </p>

          <div className="hero-buttons fade-in-up">
            {showEmailSubscription ? (
              <GetAppButton text={dict.nav.getEarlyAccess} />
            ) : (
              <a href={TEST_APP_URL} className="btn-primary">{dict.nav.tryTestApp}</a>
            )}
            <Link href="#features" className="btn-secondary">
              {dict.hero.learnMore}
            </Link>
          </div>

          {/* <div className="demo-preview fade-in-up">
            <h3>{dict.hero.demoTitle}</h3>
            <p>{dict.hero.demoSubtitle}</p>
            <div className="demo-log">
              <div className="demo-log-ok">{dict.hero.demoStage1}</div>
              <div className="demo-log-warn">{dict.hero.demoStage2}</div>
              <div className="demo-log-ok">{dict.hero.demoStage3}</div>
            </div>
          </div> */}

          <div className="vault-showcase fade-in-up">
            <p className="vault-label">{dict.hero.vaultLabel}</p>
            {(() => {
              const items = dict.hero.vaultItems as string[];
              const nodes = items.map((item: string, i: number) => ({ item, icon: vaultIcons[i] }));
              const rows = [nodes.slice(0, 4), nodes.slice(4)];
              return (
                <div className="vault-chain">
                  {rows.map((row, ri: number) => (
                    <ul className="vault-row" key={ri}>
                      {row.map((n) => (
                        <li className="vault-node" key={n.item}>
                          <span className="vault-node-ring">
                            <Image src={n.icon} alt="" width={44} height={44} loading="eager" />
                          </span>
                          <span className="vault-node-label">{n.item}</span>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div>
          <h2 className="section-title">{dict.features.title}</h2>
          <p className="section-subtitle">
            {dict.features.subtitle}
          </p>

          <div className="features-sequence">
            {/* 1 */}
            <div className="feature-row">
              <div className="feature-image-container">
                <Image src="/digital-padlock.png" alt="On-chain dead man's switch" fill sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="feature-text">
                <h3>{dict.features.items[0].title}</h3>
                <p>{dict.features.items[0].desc}</p>
              </div>
            </div>

            {/* 2 */}
            <div className="feature-row">
              <div className="feature-image-container">
                <Image src="/confident.jpg" alt="Zero-knowledge privacy" fill sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="feature-text">
                <h3>{dict.features.items[1].title}</h3>
                <p>{dict.features.items[1].desc}</p>
              </div>
            </div>

            {/* 3 */}
            <div className="feature-row">
              <div className="feature-media">
                <div className="feature-image-container">
                  <Image src="/thestandingdesk.jpg" alt="Granular inheritance assignment" fill sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
              <div className="feature-text">
                <h3>{dict.features.items[2].title}</h3>
                <p>{dict.features.items[2].desc}</p>
              </div>
            </div>

            {/* 4 */}
            <div className="feature-row">
              <div className="feature-image-container">
                <Image src="/notes.jpg" alt="Contest period countdown" fill sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="feature-text">
                <h3>{dict.features.items[3].title}</h3>
                <p>{dict.features.items[3].desc}</p>
              </div>
            </div>

            {/* 5 */}
            <div className="feature-row">
              <div className="feature-image-container">
                <Image src="/guardians.jpg" alt="Guardians and Shamir recovery" fill sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="feature-text">
                <h3>{dict.features.items[4].title}</h3>
                <p>{dict.features.items[4].desc}</p>
              </div>
            </div>

            {/* 6 */}
            <div className="feature-row">
              <div className="feature-image-container">
                <Image src="/bip39.jpg" alt="Recovery phrase" fill sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="feature-text">
                <h3>{dict.features.items[5].title}</h3>
                <p>{dict.features.items[5].desc}</p>
              </div>
            </div>

            {/* 7 */}
            <div className="feature-row">
              <div className="feature-image-container">
                <Image src="/paranoid.jpg" alt="Standard and Paranoid modes" fill sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="feature-text">
                <h3>{dict.features.items[6].title}</h3>
                <p>{dict.features.items[6].desc}</p>
              </div>
            </div>

            {/* 8 */}
            <div className="feature-row">
              <div className="feature-image-container">
                <Image src="/happy.avif" alt="Post-quantum encryption" fill sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="feature-text">
                <h3>{dict.features.items[7].title}</h3>
                <p>{dict.features.items[7].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Form Section */}
      <section id="early-access" className="cta-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h2>{showEmailSubscription ? dict.roadmap.title : dict.roadmap.timelineTitle}</h2>
          {showEmailSubscription && (
            <p style={{ marginBottom: "2rem" }}>{dict.roadmap.subtitle}</p>
          )}

          {showRoadmapTimeline && (
            <div className="roadmap-timeline">
              <div className="timeline-item alpha">
                <div className="timeline-marker"></div>
                <div className="timeline-content-top">
                  <h4 className="timeline-date">{dict.roadmap.alpha.date}</h4>
                  <p className="timeline-title">{dict.roadmap.alpha.title}</p>
                </div>
                <div className="timeline-content-bottom">
                  <p className="timeline-desc">{dict.roadmap.alpha.desc}</p>
                </div>
              </div>
            
              <div className="timeline-item beta">
                <div className="timeline-marker"></div>
                <div className="timeline-content-top">
                  <p className="timeline-desc">{dict.roadmap.beta.desc}</p>
                </div>
                <div className="timeline-content-bottom">
                  <h4 className="timeline-date">{dict.roadmap.beta.date}</h4>
                  <p className="timeline-title">{dict.roadmap.beta.title}</p>
                </div>
              </div>

              <div className="timeline-item launch">
                <div className="timeline-marker"></div>
                <div className="timeline-content-top">
                  <h4 className="timeline-date">{dict.roadmap.launch.date}</h4>
                  <p className="timeline-title">{dict.roadmap.launch.title}</p>
                </div>
                <div className="timeline-content-bottom">
                  <p className="timeline-desc">{dict.roadmap.launch.desc}</p>
                </div>
              </div>
            </div>
          )}

          {showEmailSubscription && (
            <>
              <div style={{ marginBottom: '2.5rem' }}>
                <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 500, color: 'white', opacity: 0.9 }} dangerouslySetInnerHTML={{__html: dict.roadmap.discount}}>
                </p>
              </div>

              <EmailForm
                text={dict.nav.getEarlyAccess}
                dictText={dict.form}
              />
            </>
          )}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div>
          <h2 className="section-title">{dict.howItWorks.title}</h2>
          <p className="section-subtitle">
            {dict.howItWorks.subtitle}
          </p>

          <div className="steps">
            <div className="step">
              <div className="step-icon">
                <Image src="/icons/generate.svg" alt="Recovery phrase icon" width={196} height={196} />
              </div>
              <h3>{dict.howItWorks.steps[0].title}</h3>
              <p>{dict.howItWorks.steps[0].desc}</p>
            </div>

            <div className="step">
              <div className="step-icon">
                <Image src="/icons/secure.svg" alt="Vault icon" width={196} height={196} />
              </div>
              <h3>{dict.howItWorks.steps[1].title}</h3>
              <p>{dict.howItWorks.steps[1].desc}</p>
            </div>

            <div className="step">
              <div className="step-icon">
                <Image src="/icons/bitcoin.svg" alt="Guardians and heirs icon" width={196} height={196} />
              </div>
              <h3>{dict.howItWorks.steps[2].title}</h3>
              <p>{dict.howItWorks.steps[2].desc}</p>
            </div>

            <div className="step">
              <div className="step-icon">
                <Image src="/icons/anywhere.svg" alt="Check-in icon" width={196} height={196} />
              </div>
              <h3>{dict.howItWorks.steps[3].title}</h3>
              <p>{dict.howItWorks.steps[3].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="security">
        <div className="security-content">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left', color: 'white' }}>
              {dict.security.title}
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left', color: '#d1d5db' }}>
              {dict.security.subtitle}
            </p>

            <ul className="security-list">
              {dict.security.bullets.map((bullet: string, i: number) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>

          <div className="tech-specs">
            <h4>{dict.security.techSpecsTitle}</h4>
            <ul>
              {dict.security.specs.map((spec: { label: string, value: string}, i: number) => (
                <li key={i}><strong>{spec.label}:</strong> {spec.value}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="footer-content">
          <div className="footer-section brand">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Image src="/icon.png" alt="Cryple Logo" width={24} height={24} className="logo-image" />
              Cryple
            </h3>
            <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
              {dict.footer.tagline}
            </p>
          </div>

          <div className="footer-section">
            <h4>{dict.footer.product}</h4>
            <ul>
              {showEmailSubscription && (
                <li><Link href="#early-access">{dict.footer.joinWaitlist}</Link></li>
              )}
              <li><Link href="#features">{dict.footer.features}</Link></li>
              <li><Link href="#security">{dict.footer.security}</Link></li>
              <li><Link href="#how-it-works">{dict.footer.howItWorks}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{dict.footer.contact}</h4>
            <ul>
              <li><a href="mailto:contact@cryple.io">{dict.footer.emailUs}</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{dict.footer.legal}</h4>
            <ul>
              <li><Link href={`/${lang}/privacy`}>{dict.footer.privacyPolicy}</Link></li>
              <li><Link href={`/${lang}/terms`}>{dict.footer.termsOfService}</Link></li>
              <li><Link href={`/${lang}/security-policy`}>{dict.footer.securityPolicy}</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{dict.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
