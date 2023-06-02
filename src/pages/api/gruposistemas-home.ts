// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const auth = "gruposistemas:testadmin123";
const encodedAuth = Buffer.from(auth).toString("base64");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(
    'https://gruposistemas.com/wp-json/wp/v2/pages?slug="home"',
    {
      headers: {
        Authorization: `Basic ${encodedAuth}`,
      },
    }
  );

  const data = await response.json();

  res.status(200).json(data);
}
