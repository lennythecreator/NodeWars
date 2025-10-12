import { DB } from "./connection";
import mongoose from "mongoose";
import PlayerModel from "../models/player";

export const createPlayer = async(coderTag: string, playerCode: string) => {
    try{
        const player = await PlayerModel.create({coderTag: coderTag, playerCode: playerCode, score: 0, isHost: false, roomId: null});
        return player;
    }catch(e){
        console.log(e);
    }
}