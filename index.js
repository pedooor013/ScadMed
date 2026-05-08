import "dotenv/config";
import express from 'express';
import {routers} from './src/routers/index.routers.js';
import cors from 'cors';

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(routers);

app.listen(port, () =>{
    console.log(`Server is running in port ${port}`);
});