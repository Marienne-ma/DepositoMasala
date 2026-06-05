const mongoose = require('mongoose');

const uri =
  "mongodb://root:lSgi7vbl8Dw3ME6D@ac-9szmzds-shard-00-00.mxkgife.mongodb.net:27017," +
  "ac-9szmzds-shard-00-01.mxkgife.mongodb.net:27017," +
  "ac-9szmzds-shard-00-02.mxkgife.mongodb.net:27017/esercizio2" +
  "?ssl=true&replicaSet=atlas-nxxxnz-shard-0&authSource=admin&retryWrites=true&w=majority";

async function run() {
  try {
    await mongoose.connect(uri);

    await mongoose.connection.db.admin().command({ ping: 1 });

    console.log("Connected to MongoDB ✔");
  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.disconnect();
  }
}

run();