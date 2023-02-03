const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./Routes/auth")
const userRoute = require("./Routes/users")
const postRoute = require("./Routes/posts")
const categoryRoute = require("./Routes/categories")
const multer = require("multer")

dotenv.config();
app.use(express.json())

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL, {
}).then(console.log('connected to MongoDB')).catch((err) => console.log(err));


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"Images")
    },filename:(req,file,cb)=>{
        cb(null,req.body.name)
    },
});

const upload= multer({storage:storage})
app.post("/api/upload", upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploaded")
})

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/categories', categoryRoute)


app.listen("5000", () => {
    console.log('backend is running');
})
