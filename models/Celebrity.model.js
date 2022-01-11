//  Add your code here
const mongoose = require("mongoose")

const celebritiesSchema = new mongoose.Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
})

module.exports = mongoose.model("celebrities", celebritiesSchema)