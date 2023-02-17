import type { NextApiRequest, NextApiResponse } from "next";
// @ts-ignore
import clientPromise from "../../lib/mongodb";

export type User = {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  points: number;
  isActive: boolean;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  // @ts-ignore
  const client = await clientPromise;
  const db = client.db("api-db");
  switch (req.method) {
    case "GET":
      let users = await db.collection("users").find().toArray();
      res.status(200).json(users);
      break;
    case "POST":
      let result = await db.collection("users").insertOne(req.body);
      result ? res.status(201).json(result) : res.status(500).json(result);
      break;
  }
}
