// // import express from "express";
// // import { getProducts, addProduct, updateProduct, deleteProduct } from "../controllers/product.js"; // Đảm bảo import đúng

// // const router = express.Router();

// // router.get("/products", getProducts);
// // router.post("/products", addProduct);
// // router.put("/products/:id", updateProduct);
// // router.delete("/products/:id", deleteProduct);

// // export default router;
// import express from "express";
// import Product from "../models/product.js";

// const router = express.Router();

// // Lấy danh sách sản phẩm
// router.get("/", async (req, res) => {
//   try {
//     res.set("Cache-Control", "no-store"); // ✅ Ngăn cache
//     const products = await Product.find();
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


// // Thêm sản phẩm mới
// router.post("/", async (req, res) => {
//   try {
//     const { name, price, image } = req.body;
//     const newProduct = new Product({ name, price, image });
//     await newProduct.save();
//     res.status(201).json(newProduct);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Xóa sản phẩm
// router.delete("/:id", async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.json({ message: "Sản phẩm đã bị xóa" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Sửa sản phẩm
// router.put("/:id", async (req, res) => {
//   try {
//     const { name, price, image } = req.body;
//     const updatedProduct = await Product.findByIdAndUpdate(
//       req.params.id,
//       { name, price, image },
//       { new: true }  // Trả về sản phẩm đã cập nhật
//     );
//     res.json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// export default router;



import express from "express";
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/product.js";

const router = express.Router();

// Lấy tất cả sản phẩm
router.get("/", getAllProducts);

// Lấy một sản phẩm theo ID
router.get("/:id", getProductById);

// Thêm mới sản phẩm
router.post("/", createProduct);

// Cập nhật sản phẩm
router.put("/:id", updateProduct);

// Xóa sản phẩm
router.delete("/:id", deleteProduct);


router.get("/", async (req, res) => {
  try {
      res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
      res.set("Pragma", "no-cache");
      res.set("Expires", "0");
      const products = await Product.find();
      res.status(200).json(products);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

export default router;
