const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
 const posts = await loadPosts();
 res.send(await posts.find({}).toArray());
});

// Add Post
router.post('/', async (req, res) => {
 const posts = await loadPosts();
 await posts.insertOne({
   text: req.body.text,
   createdAt: new Date()
 });
 res.status(201).send();
});

// Delete Post
router.delete('/:id', async (req, res) => {
 const posts = await loadPosts();
 await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
 res.status(200).send({});
});

async function loadPosts() {
 const client = await mongodb.MongoClient.connect(
   'mongodb://madalingrama:Juig73GxYdxwbYpg@cluster0-shard-00-00-lmafu.mongodb.net:27017,cluster0-shard-00-01-lmafu.mongodb.net:27017,cluster0-shard-00-02-lmafu.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
   {
     useUnifiedTopology: true
   }
 );

 return client.db('test').collection('posts');
}
module.exports = router;
