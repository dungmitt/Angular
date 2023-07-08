import mongoose from "mongoose"
const authProduct = mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: "member"
    }

},
    { timestamps: true, versionKey: false })
export default mongoose.model("auth", authProduct)
