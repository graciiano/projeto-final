import About from '@/components/translate/sobre';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div>
      <h1><About  /></h1>
      
      <p>{t('content')}</p>
      <p>{t('title')}</p>


    </div>
  );
}

