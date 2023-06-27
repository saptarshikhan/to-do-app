const mongoose=require('mongoose')
mongoose.connect('mongodb://0.0.0.0:27017/db_list',{
    useNewUrlparser:true
}).then(()=>{
    console.log('Database Connected....');
}).catch((err)=>{
    console.log(err)
})