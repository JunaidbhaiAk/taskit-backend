import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import Connection from './config/db.js';
import bodyParser from 'body-parser';
import router from './routes/task.routes.js';
import authRouter from './routes/auth.routes.js';

const app = express();
app.use(express.json())
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
dotenv.config();

const dburl = process.env.DB_URL;
Connection(dburl);

app.use('/api/task',router)
app.use('/api/auth',authRouter)


const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
