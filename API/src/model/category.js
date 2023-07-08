import mongoose from "mongoose"
const categorySchame = mongoose.Schema({
    name: String,
    products: [{ type: mongoose.Types.ObjectId, ref: "product" }]

}, { timestamps: true, versionKey: false })
export default mongoose.model("category", categorySchame)

