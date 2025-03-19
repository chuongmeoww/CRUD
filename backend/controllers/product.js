// import Product from "../models/product.js";

// // export const getProducts = async (req, res) => {
// //     try {
// //         const products = await Product.find({}, "name price image"); // Đảm bảo lấy trường image
// //         res.json(products);
// //     } catch (error) {
// //         res.status(500).json({ error: error.message });
// //     }
// // };


// export const getProducts = async (req, res) => { // Đảm bảo tên hàm đúng
//     try {
//         const products = await Product.find({}, "name price image createdAt updatedAt"); // Trả về cả image
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };


// // export const addProduct = async (req, res) => {
// //     try {
// //         const newProduct = new Product(req.body);
// //         await newProduct.save();
// //         res.status(201).json(newProduct);
// //     } catch (error) {
// //         res.status(500).json({ error: error.message });
// //     }
// // };
// // export const addProduct = async (req, res) => {
// //     try {
// //         const { name, price, image } = req.body;  // Nhận ảnh từ frontend
// //         const newProduct = new product({ name, price, image });
// //         await newProduct.save();
// //         res.status(201).json(newProduct);
// //     } catch (error) {
// //         res.status(500).json({ error: error.message });
// //     }
// // };


// export const addProduct = async (req, res) => {
//     try {
//         const { name, price, image } = req.body;

//         if (!name || !price) {
//             return res.status(400).json({ message: "Tên và giá là bắt buộc!" });
//         }

//         const newProduct = new Product({  // Chỉnh sửa chỗ này
//             name, 
//             price, 
//             image: image || "https://i.imgur.com/0TNphag.jpeg" // Nếu không có ảnh, dùng ảnh mặc định
//         });

//         await newProduct.save();
//         res.status(201).json(newProduct);
//     } catch (error) {
//         console.error("❌ Lỗi khi thêm sản phẩm:", error);
//         res.status(500).json({ error: error.message });
//     }
// };




// export const updateProduct = async (req, res) => {
//     try {
//         const updatedProduct = await Product.findByIdAndUpdate(
//             req.params.id,
//             req.body,
//             { new: true }
//         );
//         if (!updatedProduct) {
//             return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
//         }
//         res.json(updatedProduct);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// export const deleteProduct = async (req, res) => {
//     try {
//         const deletedProduct = await Product.findByIdAndDelete(req.params.id);
//         res.json({ message: "Xóa sản phẩm thành công", deletedProduct });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };



import Product from "../models/product.js";

// Lấy tất cả sản phẩm
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Lấy một sản phẩm theo ID
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send("Không tìm thấy sản phẩm");
        }
        res.status(200).send(product);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Thêm mới sản phẩm
export const createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).send(newProduct);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Cập nhật sản phẩm
export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedProduct) {
            return res.status(404).send("Không tìm thấy sản phẩm");
        }
        res.status(200).send(updatedProduct);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Xóa sản phẩm
export const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).send("Không tìm thấy sản phẩm");
        }
        res.status(200).send(deletedProduct);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
