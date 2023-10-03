import mongoose from 'mongoose'

mongoose.set("strictQuery", false)

const connectDB = async()=>{
    return await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI)
}

export default connectDB