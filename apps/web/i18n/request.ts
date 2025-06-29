import {getRequestConfig} from 'next-intl/server';
import { getUserLocale } from '@/utils/change-language';
export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.

  let locale = await getUserLocale();


  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});