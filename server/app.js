const express = require('express')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID
const app = express()
const cors = require('cors')
const personSchema = require('./Person.js')
const projectSchema = require('./Project.js')
const featureSchema = require('./Feature.js')
const subfeatureSchema = require('./Subfeature.js')

const URL = 'mongodb://localhost:27017/wiki'

//Setup body parser to get data from HTTP requests
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Allow CORS
app.use(cors())

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

const router = express.Router()

//Building the API
app.use('/api', router)

app.get('/api/v1/people', (req, res) => {
  MongoClient.connect(URL, function(err, db){
    db.collection('users').find().toArray(function(err, people){
      res.json({people: people})
    })
  })
})

app.get('/api/v1/projects', (req, res) => {
  MongoClient.connect(URL, function(err, db){
    db.collection('projects').find().toArray(function(err, projects){
      res.json({projects: projects})
    })
  })
})

app.get('/api/v1/features', (req, res) => {
  MongoClient.connect(URL, function(err, db){
    db.collection('features').find().toArray(function(err, features){
      res.json({features: features})
    })
  })
})

app.patch('/api/v1/features/:feature_id/:sub_id', (req, res) => {
  MongoClient.connect(URL, function(err, db){
    db.collection('features').findOne({_id: ObjectId(req.params.feature_id)}, function(err, feature){
      let subfeature = feature.subfeatures.filter(item=>{
        return String(ObjectId(item._id))===String(ObjectId(req.params.sub_id))
      })
      subfeature[0].name = req.body.name
      subfeature[0].description = req.body.description
      db.collection('features').updateOne({_id: ObjectId(req.params.feature_id)}, feature)
      res.json("Good work team")
    })

  })
})

module.exports = app;
