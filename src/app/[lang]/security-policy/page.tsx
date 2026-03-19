import Link from 'next/link';
import { getDictionary } from '@/lib/dictionaries';

type Section = {
  title: string;
  content: string;
  note?: string;
  items: string[];
};

export default async function SecurityPolicy({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.securityPolicy;

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <main style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto', color: '#667eea', lineHeight: 1.6 }}>
        <Link href={`/${lang === 'en' ? '' : lang}`} style={{ color: '#6366f1', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
          {t.backToHome}
        </Link>

        <h1 style={{ fontSize: '2.5rem', color: '#667eea', marginBottom: '1.5rem' }}>{t.title}</h1>
        <p style={{ marginBottom: '2rem', color: '#667eea' }}>{t.lastUpdated}</p>

        {t.sections.map((section: Section, i: number) => (
          <section key={i} style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '1rem' }}>{section.title}</h2>
            <p>{section.content}</p>
            {section.note && (
              <>
                <p style={{ marginTop: '1rem' }}>{section.note}</p>
              </>
            )}
            {section.items.length > 0 && (
              <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                {section.items.map((item: string, j: number) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </main>
    </div>
  );
}
