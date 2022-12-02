import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import multer from "multer";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import helmet from "helmet";
import { register } from './controllers/auth.js'
import connectDb  from './config/dbConn.js';

//configurations
connectDb()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())
app.use("/assets", express.static(path.join(__dirname, 'public/assets')))

//file storage
const storage = multer.diskStorage({
    destination: function(req, res, cb) {
        cb(null, "public/assets")
    },
    filename: function(req, res, cb){
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

//routes with files
app.get('/', (req,res)=>{
    res.send('hello')
})

app.post("auth/register", upload.single("picture"), register)


//mongoose
const PORT = process.env.PORT || 6001;

mongoose.connection.once('open', () =>{
    console.log('connected to MongoDB')
    app.listen(PORT, () => console.log(`listening on port ${PORT}`))
})