const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const logger = require('morgan')
const ImgSrc = require('./models/imgSrc')
const imgTags = require('./models/imgTags')
const password = 'nothing'

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'))
mongoose.connect("mongodb+srv://KevinLin:RmE1gQ7v3wuSx7qS@cluster0-tswwk.mongodb.net/test?retryWrites=true", {
    useNewUrlParser: true
})
db = mongoose.connection

db.on('error', error=>{
    console.log(error)
})
db.once('open',()=>{
    console.log('MongoDB connected!')
})
// Serve the static files from the React app
//app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
/*app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});*/
app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/',function(req,res,next){
    res.sendFile(path.join(__dirname+"/client/build/index.html"));
})

app.get('/api/imgSrc/:tag',async function(req,res,next){
    let imgList = null
    await ImgSrc.find({tag:req.params.tag},(err,docs)=>{
        if(err)
            console.log(err)
        else{
            imgList = docs
            //console.log(docs)
        }
    })
    res.send(JSON.stringify(imgList))
    console.log(imgList)
})
app.post('/api/imgSrc',async function(req,res,next){
    console.log(req.body)
    if(req.body.password === password){
        let srcList = null
        a = ()=>{ImgSrc.find({source:req.body.source},(err,docs)=>{
            if(err){
                console.log(err)
                a()
            }
            else{
                srcList = docs
                //console.log(docs)
            }
        })}
        a()
        //console.log(srcList)
        //console.log(srcList.length == 0)
        if(!srcList){
            rcvSource = new ImgSrc({
                source: req.body.source,
                tag: req.body.tag
            })
            rcvSource.save()
            res.send("recieved" + JSON.stringify(req.body))
        }
        else{
            res.send("image added before!")
        }
    }
    else{
        res.send('incorrect password')
    }
})
app.delete('/api/imgSrc/',function(req,res,next){
    if(req.body.password === password){
        console.log(req.body.source)
        ImgSrc.deleteOne({source: req.body.source},()=>{
            console.log("image deleted!")
            res.send("image deleted")
        })
    }
    else{
        res.send('incorrect password')
    }
})
app.get('/api/imgTags', async function(req,res,next){
    let tagList = null
    await imgTags.find(function(err,docs){
        if(err)
            console.log(err)
        else{
            tagList = docs
        }
    })
    res.send(JSON.stringify(tagList))
})
app.post('/api/imgTags', async function(req,res,next){
    if(req.body.password === password){
        let tagList = null

        await imgTags.find({tagName: req.body.tagName},(err, docs)=>{
            if(err)
                console.log(err)
            else{
                tagList = docs
            }
        })
        if(tagList.length == 0){
            rcvTag = new imgTags({
                tagName: req.body.tagName
            })
            rcvTag.save()
            console.log("image Tag create")
            res.send("tag added!")
        }
        else{
            res.send("tag existed")
        }
    }
    else{
        res.send('incorrect password')
    }
})
app.delete('/api/imgTags',function(req,res,next){
    if(req.body.password === password){
        imgTags.deleteOne({tagName: req.body.tagName},()=>{
            console.log('Tag deleted')
            res.send("Tag deleted")
        })
    }
    else{
        res.send('incorrect password')
    }
})

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
