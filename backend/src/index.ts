import express, { Express } from 'express'


const app: Express = express();

app.listen(500, () => {
    console.log('running');
})