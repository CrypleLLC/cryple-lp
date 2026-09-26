import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { getDictionary } from '@/lib/dictionaries';
import { SITE_NAME, locales } from '@/lib/site';

export const alt = 'Cryple — zero-knowledge encrypted vault';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function OpenGraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const logo = await readFile(join(process.cwd(), 'src/app/icon.png'));
  const logoSource = `data:image/png;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 60%, #7c3aed 100%)',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <img src={logoSource} width={88} height={88} alt="" />
          <span style={{ fontSize: 64, fontWeight: 800 }}>{SITE_NAME}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <span style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1 }}>{dict.hero.title}</span>
          <span style={{ fontSize: 34, color: '#c7d2fe', lineHeight: 1.3 }}>{dict.meta.ogImageTagline}</span>
        </div>
        <span style={{ fontSize: 28, color: '#a5b4fc' }}>cryple.io</span>
      </div>
    ),
    size,
  );
}
