const mongoose=require('mongoose')
const userSchema= new mongoose.Schema({
    txt:String,
    tm:String,
    status:Boolean
})
module.exports=mongoose.model('tblList',userSchema)