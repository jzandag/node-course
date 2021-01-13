const mongoose = require('mongoose')

const bugHistorySchema = new mongoose.Schema({

})

const BugHistory = mongoose.model('bug_histories', bugHistorySchema)

module.exports = BugHistory