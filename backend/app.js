import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { connectDB } from "./config/db.js";
import requestLoggingMiddleware from "./middlewares/requestLoggingMiddleware.js"; // ✅ Thêm middleware
import authRouter from "./routers/auth.js";
import productRouter from "./routers/product.js";

dotenv.config();
connectDB();

const app = express();
app.use(requestLoggingMiddleware);
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/auth", authRouter);
// app.use("/api/products", productRouter);

//app.use("/api", productRouter);
app.use("/api/products", productRouter); // ✅ Dùng đường dẫn chính xác


app.use("/api/auth", authRouter);



app.listen(process.env.PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${process.env.PORT}`);
});
