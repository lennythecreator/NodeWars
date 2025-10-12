import mongoose from "mongoose";
const { Schema } = mongoose;

const RoomSchema = new Schema({
    roomId: {type: Schema.Types.UUID, unique: true, required: true, default: null},
    players: [{type: Schema.Types.ObjectId, ref: "Player"}],
    isMax:{type: Boolean, default: false},
})

const RoomModel = mongoose.model("Room", RoomSchema);

export default RoomModel