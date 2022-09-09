import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
const { Schema, Document } = mongoose;

export interface IAuth extends Document {
    username: string;
    password: string;
}

const authSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

authSchema.pre('save', async () => {
    this.password = await bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
});

export const Auth = mongoose.model<IAuth>('Auth', authSchema);
