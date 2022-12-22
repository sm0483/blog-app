const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const root_dir = __dirname.split('src')[0]
dotenv.config({ path: path.join(root_dir, `.env`) });
const cors = require("cors");
const connectDB = require("./config/db");
const { auth } = require("./middlewares/authMiddleware");

// const connectDB = require("./utils/connectDB");
// const auth = require("./middleware/auth");
// const RouteConfig = require("./routers/routeConfig");

connectDB();

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

const userRouter = require("./routes/userRoute")

app.use(cors(corsOptions));

app.use(express.json());

app.get('/api/v1/', auth, (req, res) => {
  return res.status(200).json({ message: "authenticated" })
})

app.use("/user", userRouter)
app.use("/admin", require("./routes/adminRoute"))
app.use("/common", require("./routes/commonRoute"))
// app.use("/admin",)
// app.use("/user")
// app.use(require("./middleware/errorHandler"));
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`http://127.0.0.1:${port}`));