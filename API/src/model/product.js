import mongoose from "mongoose"
const productSchame = mongoose.Schema({
    name: String,
    auther: String,
    published: String,
    description: String,
    image: String,
    price: Number,
    quantity: Number,
    date: String,
    categoryId: {
        type: mongoose.Types.ObjectId, ref: "category"
    }

}, { timestamps: true, versionKey: false })
export default mongoose.model("product", productSchame)