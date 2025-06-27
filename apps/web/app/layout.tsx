import { Geist, Geist_Mono } from "next/font/google"
import { getLocale } from "next-intl/server"
import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
import { NextIntlClientProvider } from "next-intl"
import LanguageChange from "@workspace/ui/components/custom/language-change"
import { setUserLocale } from "@/utils/change-language"
import { Metadata } from "next"
import { headers } from "next/headers"
import { getTenantConfig } from "@/utils/tenant"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata:Metadata={
  title:"Turbo repo + Next Js example",
  description:"A simple example of monorepo with turbo repo and next js with custom packages",

}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>)
{
   const headersList = await headers();
   const host = headersList.get("host") || "tenant1.localhost:3000";
  const subdomain = host.split(".")[0] || "default"; 
  const tenant = getTenantConfig(subdomain);

  console.log("Tenant Config:", tenant);

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

