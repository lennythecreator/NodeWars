import mongoose from "mongoose";

const {Schema} = mongoose;

const PlayerSchema = new Schema({
    coderTag:{ type: String, unique: true, required: true },
    playeCode: {type: String, unique: true, required: true},
    score: {type: Number, default:0},
    isHost: Boolean,
    roomId: {type:String, default: null},

})

export default mongoose.model("Player", PlayerSchema);
