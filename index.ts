import * as express from 'express';
import * as bodyParser from 'body-parser';
import { connectDB } from './src/config';
import { userRouter } from './src/routes';

const app: express.Application = express();

const port = 3000;

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World');
});

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', userRouter);

app.listen(port, async () => {
    await connectDB();
    console.log('[SERVER] Server is up and running');
});
