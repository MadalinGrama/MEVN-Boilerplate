const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts

router.get('/', async (req, res) =>{
  const posts = await loadPosts();
  res.send(await posts.find({}).toArray());
});

// Add Posts


// Delete Posts

async function loadPosts(){
  const client = await mongodb.MongoClient.connect
  ('mongodb+srv://madalingrama:TnRXJ9VVW8rbJcee@cluster0-lmafu.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true;
  });
  return client.db('test').collection('posts');
}

module.exports = router;
