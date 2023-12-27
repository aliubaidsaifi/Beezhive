const mongoose = require('mongoose');

const MONGODB_CONNECTURI = process.env.MONGODB_CONNECTURI || "mongodb://0.0.0.0:27017/employer";

mongoose.connect(MONGODB_CONNECTURI,{
     useUnifiedTopology: true,
     useNewUrlParser: true,})    
.then(()=>{console.log("connect to db");})
.catch((err)=>{console.log(err);})


require('../models/employer');
require('../models/jobForm');
