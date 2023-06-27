require('./models/db')
const express=require('express')
var bodyParser = require('body-parser')
const app=express()
const list=require('./models/listModel')
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine','ejs')
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('ToDo list')
})
app.get('/list',(req,res)=>{
    res.render('list',{details:[]})
})
app.post('/save',(req,res)=>{
   const li=new list();
   li.txt=req.body.txt
   x=new Date();
   li.tm=x.toTimeString()
   li.status=0
   li.save().then((data)=>{
    res.redirect("show")
   }).catch((err)=>{
    console.log(err)
   })
    //console.log(req.body)
})
app.get('/show',(req,res)=>{
    list.find()
    .then((data)=>{
        res.render('list',{details:data})
    }).catch((err)=>{
        console.log(err)
    })
})
app.get("/del",(req,res)=>{
    var id=req.query.id;
    list.findByIdAndDelete(id)
    .then(()=>{
        res.redirect("show")
    })
    .catch((err)=>{
        console.log(err)
    })
})
app.get('/done',(req,res)=>{
    var txt=req.query.txt
    console.log(txt)
    list.updateOne({ txt:txt} , { $set: { status: true  }})
    .then(()=>{
        res.redirect("show")
    })
    .catch((err)=>{
        console.log(err)
    })
})
app.listen(3000,()=>{
    console.log('server is running')
})