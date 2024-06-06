import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";        
import userRouter from "./routes/userRoutes.js"
import 'dotenv/config';
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoute.js";

// app config

const app = express();
const port = 4000;

// midelware
app.use(express.json())
app.use(cors());

// DB CONECTION
connectDb();

// api breakout
app.use("/api/food",foodRouter)
app.use('/images',express.static('uploads')) //this will show image at our route on browser
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);

app.get("/",(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
})


