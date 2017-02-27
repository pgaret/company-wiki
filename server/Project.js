var Schema = require('mongoose').Schema

var projectSchema = new Schema({
  name: String,
  team: [Object],
  features: [Object]
})

module.exports = projectSchema
