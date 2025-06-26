import { Geist, Geist_Mono } from "next/font/google"
import { getLocale } from "next-intl/server"
import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
import { NextIntlClientProvider } from "next-intl"
import LanguageChange from "@workspace/ui/components/language-change"
import { setUserLocale } from "@/utils/change-language"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>)
{
  const locale = await getLocale()
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased relative`}
      >
        <LanguageChange locale={locale} changeLanguage={setUserLocale} />
        <Providers>
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  )
}
