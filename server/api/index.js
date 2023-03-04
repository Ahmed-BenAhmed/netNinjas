import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import session from "express-session"
import passport from "passport"
import userRouter from "../routes/usersRouter.js"
import cashPackageRouter from "../routes/cashPackagesRouter.js"
import bodyParser from "body-parser"
import voyagesRouter from "../routes/VoyagesRouter.js";
import keys from "../config/keys.js"
import {passportConfig} from "../config/passport.js"
import {requireAuth} from "../validation/requireAuth.js";
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(passport.initialize())
passportConfig(passport);
app.use("/api/cashpackage", cashPackageRouter)
app.use("/api/user", userRouter)
app.use("/api/voyage", voyagesRouter)




main().then(() => {
      console.log("DB connected");
      const PORT = process.env.PORT || 5001
      app.listen(PORT, async () => {
        console.log("Server strated at port " + PORT)
      })
    }
).catch(err => console.log(err));

async function main() {
  await mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
}


app.get("/api", (req, res) => {

  res.json({
    "message": ['Hello World!'],
  });

})

