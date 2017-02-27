var Schema = require('mongoose').Schema

var subfeatureSchema = new Schema({
  name: String,
  desc: String
})

module.exports = subfeatureSchema
