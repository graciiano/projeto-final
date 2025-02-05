// app/[locale]/sobre/page.tsx
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './trocarIdioma';

export default function sobre() {
  const t = useTranslations('about');

  return (
    <div className="p-8">
      <LanguageSwitcher />
      
      <h1 className="text-3xl mt-4">
        {t('title')}
      </h1>
      
      <p className="mt-2 text-lg">
        {t('content')}
      </p>
    </div>
  );
}