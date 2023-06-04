import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Tab } from "@headlessui/react";
import { fetchCategories } from "@/utils/fetchCategories";
import { GetServerSideProps } from "next";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: "300", subsets: ["latin"] });

interface Props {
   categories: Category[];
   // products: Product[];
   // session: Session | null;
}

export default function Home({ categories }: Props) {
   console.log(categories);

   return (
      <>
         <Head>
            <title>using NextJS to build an e-commerce website</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Header />
         <main className={`relative h-[200vh] ${poppins.className}`}>
            {/* <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}> */}
            <Hero />
         </main>
         <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#160303]">
            <div className="space-y-10 py-16">
               <h1 className="text-center">SECTION 2</h1>
               <Tab.Group>
                  <Tab.List className="flex justify-center">
                     {categories.map((category) => (
                        <Tab
                           key={category._id}
                           id={category._id}
                           className={({ selected }) =>
                              `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                                 selected ? "borderGradient bg-[#35383C] text-white" : "border-b-2 border-[#35383C] text-[#747474]"
                              }`
                           }
                        >
                           {category.title}
                        </Tab>
                     ))}
                     {/* <Tab className="whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 borderGradient bg-[#35383C] text-white border-b-2 ">
                        Category Title
                     </Tab> */}
                  </Tab.List>
                  <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
                     {/* <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
                     <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
                     <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
                     <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel> */}
                     <Tab.Panel className="tabPanel">showProducts 0</Tab.Panel>
                     <Tab.Panel className="tabPanel">showProducts 1</Tab.Panel>
                     <Tab.Panel className="tabPanel">showProducts 2</Tab.Panel>
                     <Tab.Panel className="tabPanel">showProducts 3</Tab.Panel>
                  </Tab.Panels>
               </Tab.Group>
            </div>
         </section>
      </>
   );
}

// Backend Code
export const getServerSideProps: GetServerSideProps<Props> = async () => {
   const categories = await fetchCategories();

   return {
      props: {
         categories,
         // products,
         // session,
      },
   };
};
