const mongoose = require('mongoose');
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const port = 4000

mongoose.connect('mongodb+srv://Mdcab22:Mdcab22@cluster0.haop5.mongodb.net/OnlineTrainingCenter?retryWrites=true&w=majority',
 {useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(()=> {
    console.log("DB CONNECTED")
})

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


const courseRoutes = require("./routes/courseRoutes"); 
const userRoutes = require("./routes/userRoutes"); 
const orderRoutes = require("./routes/orderRoutes"); 

app.use("/api", courseRoutes); 
app.use("/api", userRoutes);  
app.use("/api", orderRoutes); 
app.use('/uploads', express.static('uploads'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
//app.listen(process.env.PORT || 3000, () => console.log(`Example app listening at http://localhost:${port}`))


 