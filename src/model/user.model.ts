import * as mongoose from 'mongoose';
const { Schema, Document } = mongoose;

export interface IUser extends Document {
    username: string;
    password: string;
    cpf: string;
    email: string;
    name: string;
    age: number;
}

const userSchema = new Schema({
    cpf: {
        type: String,
        min: 11,
        max: 11,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        max: 100
    }
}, {
    timestamps: true
});

export const User = mongoose.model<IUser>('User', userSchema);
