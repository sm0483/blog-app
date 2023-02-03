const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const root_dir = __dirname.split('src')[0]
dotenv.config({ path: path.join(root_dir, `.env`) });
const {connectDb} = require("./config/db");
const fileUpload = require('express-fileupload');
const cookieParser = require("cookie-parser");
const morgan=require('morgan');



app.use(morgan('dev'));

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



// app.use("",);
app.use("/api/v1/blog",blogRoute);
app.use("/api/v1/user",userRoute)


app.use(errorHandler);
app.use(pageNotFound);

