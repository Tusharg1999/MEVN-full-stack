const express =require('express')
const cors =require('cors')
const app=express()
const PORT=process.env.PORT || 8000
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
var database,collection
app.use('/api/post',require('../server/routes/post'))
app.listen(PORT,()=>{

})

