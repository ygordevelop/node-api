import * as mongoose from "mongoose";
const { Schema, Document } = mongoose;

export interface IUser extends Document {
    login: string;
    password: string;
}

const userSchema = new Schema({
    login: String,
    password: String
});

export const User = mongoose.model<IUser>('User', userSchema);
