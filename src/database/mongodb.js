import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const credential = process.env.URI_DB;

const client = new MongoClient(credential);

const createConnectionMongo = async () => {
    try {
        await client.connect();
        console.log(`MongoDB Client connected - (${new Date().toLocaleString()})`);
    } catch (error) {
        console.log("Failed Connection - ", error.message);
        //throw error;
    };
};

const createDisconnectionMongo = async () => {
    try {
        await client.close();
        console.log(`MongoDB Client disconnected - (${new Date().toLocaleString()})`);
    } catch (error) {
        console.log(error.code, error.message);    
    };
};

export { createConnectionMongo, createDisconnectionMongo, client };


