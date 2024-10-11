const express = require("express")
const app=express();
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const userRoute=require("./routes/user")

dotenv.config();

mongoose.connect(
   process.env.MONGO_URL
)
.then(()=>{
    console.log("db connection successful")
}).catch((error)=>{
    console.log(error)
});
app.use(express.json());
app.use("/api/users",userRoute);

app.listen(process.env.port||5000, ()=>{
    console.log("Backend server is running")
})

