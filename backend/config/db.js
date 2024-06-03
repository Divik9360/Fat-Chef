import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://divik:9360731325@cluster0.w0ny9bf.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}