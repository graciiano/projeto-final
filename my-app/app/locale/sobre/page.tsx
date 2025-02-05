// app/[locale]/sobre/page.tsx
import { useTranslations } from 'next-intl';

export default function SobrePage() {
  const t = useTranslations('sobre');

  return (
    <div>
      <h1>{t('titulo')}</h1>
      <p>{t('conteudo')}</p>
    </div>
  );
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }];
}