const MongoClient = require('mongodb').MongoClient



const connectionString =
    "mongodb+srv://dfargueta:Seguridad2021@cluster0.bga0v.mongodb.net/PROJECT 0?retryWrites=true&w=majority";





MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('PROJECT 0')
    })
    .catch(error => console.error(error))