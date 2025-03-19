// import cors from "cors";
// import dotenv from "dotenv";
// import express from "express";
// import morgan from "morgan";
// import { connectDB } from "./config/db.js";
// import authRouter from "./routers/auth.js"; // Router cho auth (nếu có)
// import productRouter from "./routers/product.js";

// dotenv.config();
// const app = express();
// const requestLoggingMiddleware = require("./middlewares/requestLoggingMiddleware");
// app.use(requestLoggingMiddleware);
// // Kết nối với MongoDB
// connectDB();

// // Middleware
// app.use(express.json());
// app.use(morgan("dev"));
// app.use(cors());

// // Routes
// app.use("/api/products", productRouter);  // Định tuyến sản phẩm
// app.use("/api/auth", authRouter);         // Định tuyến xác thực

// // Trang chủ
// app.get("/", (req, res) => {
//   res.send("Welcome to Pet-Shop API");
// });

// // Khởi chạy server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server is running on http://localhost:${PORT}`);
// });
