import mongoose from "mongoose";
import RoomModel from "../models/room";
import PlayerModel from "../models/player";
import * as path from "path";
import * as dotenv from "dotenv";
import { DB } from "./connection";

// Load .env reliably from project root
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });
export const migrate = async () => {
   const MONGODB_URL = process.env.MONGODB_URL;
    try{
        if (!MONGODB_URL) throw new Error('MONGODB_URL is not defined')
        await DB
        console.log("Connected to DB");
        // Create Player collection
        await PlayerModel.createCollection();
        console.log("player collection created");
        await PlayerModel.create({ coderTag: "test", playerCode: "1234", score: 0 });
        console.log("player created");

        // Create Room collection
        await RoomModel.createCollection();
        await RoomModel.create({ roomName: "testRoom", active: true });
        console.log("room created");

        // Close connection
        await mongoose.connection.close();
    }catch(e){
        console.log(e);
    }

   

}
migrate();