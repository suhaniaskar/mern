const express = require('express');
const app = express();
const PORT = 5000
const mongoose = require("mongoose")




mongoose.connect("mongodb+srv://suhaniaskar:h5gvCTgohmJ3owPU@cluster0.n9smex5.mongodb.net/")
.then(()=>{console.log("mongoDb connected successfully")})
.catch((err)=>{console.log("Error connecting in MongoDb"+err)})

app.get('/',(req,res)=>{
    res.send('Server is running')

})

    
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});
