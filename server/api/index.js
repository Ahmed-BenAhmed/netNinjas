import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import keys from "../config/keys.js"
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

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

