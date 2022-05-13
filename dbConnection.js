// const { MongoClient } = require("mongodb");

// // Connection URI
// const uri =
//   "mongodb://localhost:27017/crud";

// // Create a new MongoClient
// const client = new MongoClient(uri);
// let dbConnect;

// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();

//     // Establish and verify connection
//     await client.db().command({ ping: 1 });
//     dbConnect = client
//     console.log("Connected successfully to server");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     //await client.close();
//   }
// }

// const getDBConnect = ()=>{
//     if(!dbConnect)
//     {
//         throw new Error('DB Not Connect')
//     }else {
//         return dbConnect
//     }
// }

// module.exports = {run, getDBConnect};

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crud');
// const Cat = mongoose.model('Cat', { name: String });
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));


module.exports = mongoose