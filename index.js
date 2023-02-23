const express = require("express");
const app = express();
const dotenv = require("dotenv");
const multer = require("multer")
const path = require("path")
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./Routes/auth")
const userRoute = require("./Routes/users")
const postRoute = require("./Routes/posts")
const categoryRoute = require("./Routes/categories")
const { join } = require('path');


dotenv.config();
app.use(express.json())
app.use(cors({ credentials: true, origin: true }))
app.use("/Images", express.static(path.join(__dirname, "Images")))  



mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL, {
}).then(console.log('connected to MongoDB')).catch((err) => console.log(err));


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "Images")
    }, filename: (req, file, cb) => {
        cb(null, req.body.name)
    },
});

const upload = multer({ storage: storage })
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("file has been uploaded")
})

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/categories', categoryRoute)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(join(__dirname, "Client", "dist")));
    app.get("*", (req, res) => {
        res.sendFile(join(__dirname, "Client", "dist", "index.html"));
    });
}



app.listen("5000", () => {
    console.log('backend is running');
})
