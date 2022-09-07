import * as express from 'express';

const app: express.Application = express();

const port = 3000;

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World');
});

app.listen(port, () => console.log('Server is up and running'));
