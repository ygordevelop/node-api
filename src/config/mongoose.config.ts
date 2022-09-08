import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/admin`;

export async function connectDB() {
    try {
        console.log('[DB] Connecting to Mongo Database...');
        await mongoose.connect(url);
        console.log('[DB] Mongo Database connected with success.');
    } catch (err) {
        console.error('[DB] Something goes wrong: ', err);
    }
}
