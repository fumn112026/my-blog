import "src/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Analytics スクリプト */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Q0H31Q5WYH"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Q0H31Q5WYH');
        `}
      </Script>
      <div className="mx-auto max-w-prose">
        <header className="border-b border-gray-300 py-8">
          <h1>
            <Link href="/" className="text-5xl font-bold">
              My Blog
            </Link>
          </h1>
        </header>
        <main className="mt-8">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
