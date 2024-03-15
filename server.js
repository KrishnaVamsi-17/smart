const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const dataRoutes = require('./src/routes/dataRouter');

require('dotenv').config();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


//routes
app.use('/vignan',dataRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  console.log("Connected to db");
  app.listen(process.env.PORT, () => {
    console.log("Succesfully running on port 4000");
  });

}).catch((err)=>{
  console.log(err);
})


