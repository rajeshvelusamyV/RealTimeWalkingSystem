const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const loginRoutes=require('./routes/loginRoute');

const app=express();
const PORT=5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/WalkingSystem',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log('Mongodb connected'))
.catch((err)=>console.error("mongodb failed",err));

app.use('/api',loginRoutes);

app.listen(PORT,()=>{
    console.log("port is running");
});