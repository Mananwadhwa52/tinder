const mongoose = require("mongoose");


const connectdb=async ()=>{
    await mongoose.connect(url)
 }
 
 connectdb.then(()=>{
        console.log("database connected succesfully")
    
    }).catch((error)=>{
        console.log("database not connected succesfully")
        
    });
    
     