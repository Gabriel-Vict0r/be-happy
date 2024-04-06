import 'dotenv/config'
import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import { AppDataSource } from './data-source'
import { routes } from './routes'
import cors from 'cors'
//import * as app from 'express'

const app = express()
const corsOptions = {
    origin: 'http://localhost:3000',
    method: ["GET", "POST"],
    credencials: true,
    optionSuccessStatus: 200,
    allowedHeaders: ['Access-Control-Allow-Origin', 'Content-Type'],
}
app.use(cors(corsOptions))
app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

const main = async () => {
    await AppDataSource.initialize();
}

app.use(express.json())
main().catch(err => {
    console.log(err);
    process.exit(1);
})

app.use(routes);

app.listen(8080, () => {
    console.log('listening');
})