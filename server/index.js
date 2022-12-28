const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const root_dir = __dirname.split('src')[0]
dotenv.config({ path: path.join(root_dir, `.env`) });
const cors = require("cors");
const {connectDb} = require("./config/db");
const fileUpload = require('express-fileupload');
const cookieParser = require("cookie-parser");









// cors
const whitelist = [
  "http://127.0.0.1:3000",
  "http://localhost:3000",
  "http://localhost:3000/",
];

const corsOptions = {
  origin(origin, callback) {
    if (!origin) {
      return callback(null, true);
    }
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
  methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  allowedHeaders: "*",
  "Access-Control-Request-Headers": "*",
};


//routes
const blogRoute = require("./routes/blogRoute");
const userRoute=require('./routes/userRoute');
const errorHandler = require("./middleware/err");
const pageNotFound = require("./middleware/pageNotFound");



app.use(fileUpload({
  useTempFiles:true,
  limits: { fileSize: 50 * 1024 * 1024 },
}));




// app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE));


// app.get('/api/v1/', auth, (req, res) => {
//   return res.status(200).json({ message: "authenticated" })
// })




const start=async()=>{
  try{
      const connect= await connectDb(process.env.MONGO_URI);
      console.log('connected---');
  }catch(err){
      console.log(err);
  }

}

start();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`http://127.0.0.1:${port}`));



// app.use("/api/v1/",);
app.use("/blog",blogRoute);
app.use("/user",userRoute)


app.use(errorHandler);
app.use(pageNotFound);

