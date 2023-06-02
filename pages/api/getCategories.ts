// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";

const query = groq`*[_type == "category"] {
_id,
  ...
}`;

type Data = {
   categories: Category[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
   const categories = await client.fetch(query);
   console.log(categories);
   res.status(200).json({ categories });
}
