import React from "react";
import { groq } from "next-sanity";
import { client } from "../sanity/lib/client";
import { GetServerSideProps } from "next";

const query = groq`*[_type == "category"] {
_id,
  ...
}`;

interface Props {
   categories: Category[];
   // products: Product[];
   // session: Session | null;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
   const categories = await client.fetch(query);

   return {
      props: {
         categories,
         // products,
         // session,
      },
   };
};

const catalog = ({ categories }: Props) => {
   console.log(categories);
   return <div>catalog page</div>;
};

export default catalog;
