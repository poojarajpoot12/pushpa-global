const mongoose=require("mongoose");

const connectDaseBase=async ()=>{
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo DB Connect")
  }catch(err){
    console.error(err);
    process.exit(1);
  }
}
module.exports=connectDaseBase;