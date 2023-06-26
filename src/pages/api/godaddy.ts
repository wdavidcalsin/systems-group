import type { NextApiRequest, NextApiResponse } from "next";

const { GODADDY_KEY, GODADDY_SECRET } = process.env;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!GODADDY_KEY || !GODADDY_SECRET)
    throw new Error("Missing GODADDY secret or key");

  if (req.method !== "GET") return res.status(405).end();

  const { domain } = req.query as { domain: string };
  // console.log(domain);

  const response = await fetch(
    `https://api.godaddy.com/v1/domains/available?domain=${domain}`,
    {
      headers: {
        Authorization: `sso-key ${GODADDY_KEY}:${GODADDY_SECRET}`,
      },
    }
  );

  const data = await response.json();

  res.status(200).json(data);
}
