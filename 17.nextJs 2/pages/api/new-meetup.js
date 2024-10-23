import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://Koushik12:Koushik12@cluster0.w8oae4k.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;

// import { MongoClient, ServerApiVersion } from "mongodb";

// const uri =
//   "mongodb+srv://Koushik12:Koushik12@cluster0.w8oae4k.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function handler(req, res) {
//   if (req.method === "POST") {
//     const data = req.body;

//     await client.connect();
//     const db = client.db();
//     console.log(db);

//     const meetupsCollection = db.collection("meetups");

//     const result = await meetupsCollection.insertOne(data);

//     console.log(result);

//     client.close();

//     res.status(201).json({ message: "Meetup inserted!" });
//   }
// }

// export default handler;
