import 'reflect-metadata'
import express from 'express'
import { AppDataSource } from './data-source'
import { LockNotSupportedOnGivenDriverError } from 'typeorm'
import { routes } from './routes'

const app = express()


const main = async () => {
    await AppDataSource.initialize();
}

main().catch(err => {
    console.log(err);
    process.exit(1);
})

app.use(express.json())
app.use(routes);

app.listen(3000, () => {
    console.log('listening');
})

