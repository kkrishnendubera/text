const express=require('express')
const app=express()


app.get('/',(req,res)=>{
    res.send('Wellcome Krishnendu')
})
app.get('/about',(req,res)=>{
    res.send('wellcome krishnendu this is about page')
})





const port=3332
app.listen(port,()=>{
    console.log(`servser start:http://localhost:${port}`)
})