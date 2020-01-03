const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts

router.get('/', async (req, res) =>{
  const posts = await loadPosts();
  res.send(await posts.find({}).toArray());
});

// Add Posts
router.post('/', async (req, res) =>{
  const posts = await loadPosts();
  await.post.insertOne({
    text: req.body.text,
    createdAt: newDate()
  });
  res.status(201).send();
})


// Delete Posts
router.delete('/:id', async(req, res) =>{
  const posts = await loadPosts();
  await.posts.deleteOne({_id: new mongodbObjectID(req.params.id)})
  res.status(200).send();
})

async function loadPosts(){
  const client = await mongodb.MongoClient.connect
  ('mongodb+srv://madalingrama:TnRXJ9VVW8rbJcee@cluster0-lmafu.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true;
  });
  return client.db('test').collection('posts');
}

module.exports = router;
