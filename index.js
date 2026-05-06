import express from 'express';
//import routers from './src/routes/index.rotes.js';
import cors from 'cors';
import "dotenv/config";
//import "./src/service/cron.service.js";

const app = express();

const port = process.env.PORT;

app.use(express.json());
//app.use(routers);

app.listen(port, () =>{
    console.log(`Server is running in port ${port}`);
});