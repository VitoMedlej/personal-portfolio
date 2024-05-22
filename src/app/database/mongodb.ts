const { MongoClient, ServerApiVersion } = require('mongodb');


// adminuser
// p4FMNdyLPgU7QjdG
// mongodb+srv://adminuser:p4FMNdyLPgU7QjdG@cluster0.pukzncm.mongodb.net/?retryWrites=true&w=majority
// const uri = process.env.MONGODB_URI
// const uri = `mongodb+srv://adminuser:p4FMNdyLPgU7QjdG@cluster0.pukzncm.mongodb.net/?retryWrites=true&w=majority`
// const uri = `mongodb+srv://onbeirut:8YhEHFAroTdGk6Es@cluster0.lw7l0kc.mongodb.net/?retryWrites=true&w=majority`
// const uri = `mongodb+srv://rickcarl1239:CBvgEZI5aYk5UsUq@cluster0.ya6cbro.mongodb.net/?retryWrites=true&w=majority`
const uri = `mongodb+srv://adminuser:AcuhtaN1vuFWGwOx@cluster0.zgipj.mongodb.net/*`

// const uri = "mongodb+srv://adminuser:<password>@cluster0.pukzncm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect((err:any) => {
    if (err) {
        //   const collection = client.db("Ecom").collection("Users");
        //   console.log('collection: ', collection);
        // perform actions on the collection object
        client.close();
    };
});

export default client