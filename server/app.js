require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');


//connect to mongodb
mongoose.connect(process.env.dbURI, { useNewUrlParser: true , useUnifiedTopology: true})
   .then((result) => 
   // listen to req
    app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
}))
   .catch((err) => console.log(err));


app.use((req, res, next ) => {
   console.log(req.path, req.method)
   next()
});

//middleware
app.use(express.json());
app.use(cookieParser());

//this is a test , I will add routs later

app.get('/', (req , res) => {
    res.json({mssg: 'this is a test'})
})

//routes
app.use(authRoutes);






