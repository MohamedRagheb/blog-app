import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className="container py-8">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
