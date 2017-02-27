var Schema = require('mongoose').Schema

var featureSchema = new Schema({
  name: String,
  subfeatures: [{name: String, desc: String}]
})

module.exports = featureSchema
