var Schema = require('mongoose').Schema

var personSchema= new Schema({
  name: String,
  role: String,
  projects: [Object]
})

module.exports = personSchema
