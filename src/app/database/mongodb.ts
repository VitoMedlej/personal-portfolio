const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = `${process.env.NEXT_PUBLIC_MONGO}`

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect((err:any) => {
    if (err) {
        client.close();
    };
});

export default client