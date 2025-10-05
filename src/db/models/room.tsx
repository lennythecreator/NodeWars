import mongoose from "mongoose";
const { Schema } = mongoose;

const RoomSchema = new Schema({
    roomId: {type: String, unique: true, required: true, default: null},
    players: [{type: Schema.Types.ObjectId, ref: "Player"}],
})