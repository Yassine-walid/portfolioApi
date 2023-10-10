const express = require('express')
const mongoose = require('mongoose')
const Project = require('./models/Project.js')
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL)

const db = mongoose.connection;



db.once('open', function(){
    console.log("Connection open");
});

app.post('/addProject', async (req,res) => {
    const {title,thumbnail,demoLink,repoLink} = req.body;
  
    try {
      const projectDoc = await Project.create({
        title,
        thumbnail,
        demoLink,
        repoLink
      });
      res.json(projectDoc);
    } catch (e) {
      res.status(422).json(e.stackTrace);
    }
  
});

app.get("/projects", async (req,res) => {
    res.json(await Project.find())
})


app.listen(3000,() => console.log("server on"))