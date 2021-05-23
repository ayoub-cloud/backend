const mongoose = require("mongoose");

const connectDB=async ()=> {
   try {

         await mongoose.connect(process.env.DB_URl,{useUnifiedTopology: true ,useNewUrlParser: true, });
       console.log('Db connected')    
    }
    
    
     catch (error) {
        console.log('database is not connected' , error);
        
    }
   

}
module.exports=connectDB;