import type { NextApiRequest, NextApiResponse } from "next";

const { GODADDY_KEY, GODADDY_SECRET } = process.env;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const data = await response.json();

  // res.status(200).json(data);
  res.status(200).json({ Hello: "Hello who is" });
}
