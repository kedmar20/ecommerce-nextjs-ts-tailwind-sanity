import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/comopnents/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   return (
      <>
         <Head>
            <title>using NextJS to build an e-commerce website</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Header />

         <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">Tailwind NextJS Sanity</div>
            <div className="h-100 relative bg-[#70c8eb] md:w-1/5">sdfdsdfsdaf</div>
         </main>
      </>
   );
}
