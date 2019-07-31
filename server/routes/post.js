const router =require('express').Router()
const posts =require('../model/post')
const db =require('mongodb')

//get request
router.get('/', async (req,res)=>{
  const post=await loadpostcollection()
    res.send(await post.find({}).toArray())
})
//post request
router.post('/',async (req,res)=>{
  const post=await loadpostcollection()
  await post.insertOne({
    text:req.body.text,
    createdAt:new Date()
  })
  res.status(201).send()
})
//delete request
router.delete('/:id',async(req,res)=>{
  const post=await loadpostcollection()
  post.deleteOne({_id:new db.ObjectID(req.params.id)})
  res.status(201).send()
})

async function loadpostcollection(){
  const client=await  db.MongoClient.connect(require('../key/key').DB_KEY,{useNewUrlParser:true});

        return client.db("MEVN_APP").collection('posts')

}
module.exports=router