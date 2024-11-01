// pages/api/utils/mongooseConnect.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// 仅在服务器端加载环境变量
if (typeof window === 'undefined') {
    dotenv.config();
}

const mongooseConnect = async () => {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONGODB_URI!);
    }
};

export default mongooseConnect;
