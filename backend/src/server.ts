import dotenv from 'dotenv'
import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import { AppDataSource } from './data-source'
import { routes } from './routes'
import cors from 'cors'
import { Hour } from './entity/Hour.entity'
import { Location } from './entity/Location.entity'
import { Orphanage } from './entity/Orphanage.entity'
//import * as app from 'express'
dotenv.config()
const app = express()
app.use(cors())
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     method: ["GET", "POST"],
//     credencials: true,
//     optionSuccessStatus: 200,
//     allowedHeaders: ['Access-Control-Allow-Origin', 'Content-Type'],
// }
// app.use(cors(corsOptions))
// app.use((req: Request, res: Response, next: NextFunction) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// })

// const main = async () => {
//     try {
//         await AppDataSource.initialize();
//         console.log('conexão estabelecida')
//     } catch (error) {
//         throw new Error(error);
//     }
// }

app.use(express.json())
// main().catch(err => {
//     console.log(err);
//     process.exit(1);
// })

app.use(routes);

app.listen(process.env.PORT, () => {
    console.log('listening');
})