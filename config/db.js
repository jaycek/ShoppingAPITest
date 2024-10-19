const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const mongourl=process.env.MONGODB_URL;

const connectDB = () =>{

    mongoose.connect(mongourl)
    .then(()=>console.log("DB connected.."))
    .catch((err)=> console.log(err))
}
module.exports = connectDB