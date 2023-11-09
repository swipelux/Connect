import { NextIntlClientProvider } from 'next-intl';
import type { Locale } from '@swipelux/connect';
import { Providers } from './providers';
 
export function generateStaticParams() {
  return [{ locale: 'en-US' }, { locale: 'zh-CN' }];
}

export default async function LocaleLayout(
  { children, params: { locale }}: 
  { children: React.ReactNode, params: { locale: Locale} }
) {
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale}>
          <Providers locale={locale}>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
