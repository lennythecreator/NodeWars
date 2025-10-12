import mongoose from "mongoose";

const {Schema} = mongoose;
const PlayerSchema = new Schema({
    coderTag:{ type: String, unique: true, required: true },
    playerCode: {type: String, unique: true, required: true},
    score: {type: Number, default:0}, 
    isHost: Boolean,
    roomId: {type:String, default: null},

})

const PlayerModel = mongoose.model("Player", PlayerSchema);

export default PlayerModel
