const mongoose = require('mongoose')

const BugSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }, 
    description: {
        type: String,
        default: 'Created at'+ Date.now
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        refs: 'users'
    },
    priority: {
        type: String,
    }
}, {
    timestamps: true
})

const Bug = mongoose.model('bugs', BugSchema)

module.exports = Bug