// File: src/pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isIncorporationPage = router.pathname === "/incoporation";
  const isLegalpage = router.pathname === "/legal";

  return (
    <>
      <Component {...pageProps} />
      {!isIncorporationPage && <Footer />}
      {!isLegalpage && <Footer />}
    </>
  );
}
