const mongose=require('mongoose')
const postSchema=new mongose.Schema({
    post:{
        type:String,
        required:true,
        minLength:10
    },
    date:{
        type: Date,
        default:Date.now()
    }
})
const model=mongose.model('users',postSchema)
module.exports=model