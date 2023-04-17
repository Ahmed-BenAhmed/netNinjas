require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const {authRoutes, taskRoute, projectRoute, groupRoute, userRoute} = require("../routes/index")
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const {requireAuth, checkUser} = require('../middleware/authMiddleware');

app.use(cors())
//connect to mongodb
mongoose.connect(process.env.dbURI, { useNewUrlParser: true , useUnifiedTopology: true})
   .then((result) => 
   // listen to req
    app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})).catch((err) => console.log(err));


app.use((req, res, next ) => {
   console.log(req.path, req.method)
   next()
});

//middleware
app.use(express.json());
app.use(cookieParser());

//this is a test , I will add routs later

app.get('/', (req , res) => {
    res.json({msg: 'this is a test'})
})

//routes
app.use(authRoutes);
app.get('*', checkUser);
app.use(taskRoute);
app.use(projectRoute);
app.use(groupRoute);
app.use(userRoute);







