import express from 'express';
import {MongoClient} from 'mongodb';
import bodyParser from 'body-parser';
import path from 'path';
var cors = require('cors')

const app = express();

app.use(bodyParser.json());

app.listen(8000, () => console.log("listening to 8000"));
app.options('*',cors());
app.use(express.static(path.join(__dirname, '/build')));

app.get('/api/articles/:name', async (req, res) => {
    try{
        const articleName = req.params.name;

        const client = await MongoClient.connect('mongodb://localhost:27017' , {useNewUrlParser : true});
        const db = client.db('blog');
        const articleInfo = await db.collection('articles').findOne({name : articleName});
        
        res.set('Access-Control-Allow-Origin', '*');
        res.status(200).json(articleInfo);
        client.close();
    }
    catch(error){
        res.status(500).json({message:"Something went wrong!" , error});
    }
})

app.get('/api/articles/:name/upvote' , async (req, res) => {
        
    try{
            const articleName = req.params.name;

            const client = await MongoClient.connect('mongodb://localhost:27017' , {useNewUrlParser:true});
            const db = client.db('blog');
            const articleInfo = await db.collection('articles').findOne({ name: articleName });
            await db.collection('articles').updateOne({ name: articleName }, {
                '$set': {
                    upvotes: articleInfo.upvotes + 1,
                },
            });
            const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
            res.set('Access-Control-Allow-Origin', '*');
            res.status(200).json(updatedArticleInfo);
            client.close();
        }
    catch(e){
        res.status(500).json({message:"Something went wrong!" , e});
    }
})

app.post('/api/articles/:name/comments' , async (req,res)=>{
    try{
            const {userName , text} = req.body;
            const articleName = req.params.name;

            const client = await MongoClient.connect('mongodb://localhost:27017' , {useNewUrlParser:true});
            const db = client.db('blog');
            const articleInfo = await db.collection('articles').findOne({ name: articleName });
            await db.collection('articles').updateOne({ name: articleName }, {
                '$set': {
                    comments: articleInfo.comments.concat({userName , text}),
                },
            });
            const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
            res.set('Access-Control-Allow-Origin', '*');
            res.status(200).json(updatedArticleInfo);
            client.close();
        }
    catch(e){
        res.status(500).json({message:"Something went wrong!" , e});
    }
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});