const express=require('express')
const app=express();


// express static file middleware
app.use(express.static('public')
)
// build a simple API

app.get('/',(req,res) =>{
    res.sendFile(__dirname+"/index.html");
});

app.get('/home',(req,res) =>{
    console.log(req.query);
    res.send("hello express Home");
});
const PORT=9000;
app.listen(PORT,()=>{
    console.log(`server is ok ${PORT}`);
})