import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../users";
// @ts-ignore
import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  // @ts-ignore
  const client = await clientPromise;
  const db = client.db("api-db");
  const { id }: any = req.query;
  let filter: Object = 0;
  if (id.length === 24 || id.length === "24") {
    let newId = new ObjectId(id);
    filter = { _id: newId };
  } else {
    filter = { id: parseInt(id as string) };
  }
  console.log(filter);
  switch (req.method) {
    case "GET":
      let getUser = await db.collection("users").findOne(filter);
      res.json(getUser);
      break;
    case "PUT":
      let putUser = await db
        .collection("users")
        .findOneAndReplace(
          { id: parseInt(id as string) },
          { $set: req.body },
          { returnOriginal: false }
        );
      res.status(201).send(putUser);
      break;
    case "PATCH":
      let patchUser = await db
        .collection("users")
        .findOneAndUpdate(
          { id: parseInt(id as string) },
          { $set: req.body },
          { returnOriginal: false }
        );
      res.status(201).send(patchUser);
      break;
    case "DELETE":
      let deleteUser = await db
        .collection("users")
        .findOneAndUpdate(
          { id: parseInt(id as string) },
          { $set: { isActive: false } }
        );
      res.status(410).send(deleteUser);
      break;
  }
  return;
}
