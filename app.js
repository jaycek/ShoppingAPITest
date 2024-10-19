const express = require('express');

const dotenv = require('dotenv');
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
dotenv.config();

const app = express();
app.use(express.json());

//connect to MongoDB
connectDB()

//Handling routes

app.get('/',(req,res)=>{
    res.send("Hello world")
})
app.use('/api/products',productRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));