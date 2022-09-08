import * as express from 'express';
import { connectDB } from './src/config';
import { User } from './src/model';
import {IUser} from "./src/model/user.model";

const app: express.Application = express();

const port = 3000;

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World');
});

app.get('/users', async (req: express.Request, res: express.Response) => {
    await User.create({
        login: 'root',
        password: '12345'
    });

    const a = await User.findOne().exec();

    res.send(a);
});

app.listen(port, async () => {
    await connectDB();
    console.log('[SERVER] Server is up and running');
});
