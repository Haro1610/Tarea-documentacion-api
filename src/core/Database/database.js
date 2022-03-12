const MongoClient = require('mongodb').MongoClient;

const mongoUrl = 'mongodb+srv://Aaron:4421@cluster0.xvgni.mongodb.net/Clase11?retryWrites=true&w=majority'



const Database = {
    dbInstance: null,
    connect: () => {
        return new Promise((accept, reject) => {
            MongoClient.connect(mongoUrl, { useUnifiedTopology: true }, (err, client) => {
                if(err) {
                    reject(err);
                } else {
                    this.dbInstance = client.db();
                    accept(client);
                }
            }); //Error-first callback
        }); 
    },
    collection: (name) => {
        return this.dbInstance.collection(name);
    }
};

module.exports = Database;