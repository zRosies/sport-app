import { MongoClient, Collection } from "mongodb";

export async function initDb(
  db: string,
  collection: string
): Promise<Collection> {
  const uri = process.env.URI;

  if (!uri) throw new Error("No URI found");
  try {
    const client = new MongoClient(uri);
    const connection = await client.connect();
    const data = connection.db(db).collection(collection);

    return data;
  } catch (error) {
    throw new Error(`failed to stablishc connection to the DB`);
  }
}
