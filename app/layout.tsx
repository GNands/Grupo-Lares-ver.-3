import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Grupo Lares | Producción artística y audiovisual',
  description: 'Productora con raíz andina y estándar técnico alto. Wiñaypaq (producción artística) y Cinema Pro (audiovisual). De la idea al resultado.',
  openGraph: {
    title: 'Grupo Lares | Producción artística y audiovisual',
    description: 'Productora con raíz andina y estándar técnico alto. Wiñaypaq (producción artística) y Cinema Pro (audiovisual). De la idea al resultado.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grupo Lares | Producción artística y audiovisual',
    description: 'Productora con raíz andina y estándar técnico alto. Wiñaypaq (producción artística) y Cinema Pro (audiovisual). De la idea al resultado.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className="bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-rose-600 selection:text-white overflow-hidden">
        {children}
      </body>
    </html>
  );
}
