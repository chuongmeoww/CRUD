// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     price: { type: Number, required: true }
// }, { timestamps: true });

// export default mongoose.model("Product", productSchema);
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, default: "https://i.imgur.com/0TNphag.jpeg" }, // Ảnh mặc định
}, { timestamps: true });

export default mongoose.model("Product", productSchema);
