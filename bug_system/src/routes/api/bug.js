const express = require('express')
const router = express.Router()

//models
const Bug = require('../../models/Bug')

//Create
router.post('/', async (req,res) => {
    // const added = Object.keys(req.body)
    // const allowed = ['name', 'description',]

    //const isValid = added.every( a => allowed.includes(a))
    // if(!isValid)
    //     return res.status(400).json({error: 'Invalid fields'})

    const bug = new Bug(req.body)
    try {
        await bug.save()
        res.status(201).send(bug)
    } catch (error) {
        res.status(400).json(error)
    }
})

//Read
router.get('/', async (req,res) => {
    try {
        const bugs = await Bug.find()
        res.send(bugs)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.get('/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const bug = await Bug.find({
            _id
        })

        res.send(bug)
    } catch (error) {
        res.status(400).send(error)
    }
})

//Update
router.patch('/:id', async (req,res) => {
    const updates = Object.keys(req.body)
    const allowed = ['name', 'description',]

    const isValid = updates.every( a => allowed.includes(a))
    if(!isValid)
        return res.status(400).json({error: 'Invalid updates'})
        
    try {
        const bug = await Bug.findOne({_id: req.params.id})
        
        if(!bug)
            res.status(404).send({error: 'Bug not found'})
        
        updates.forEach( u => {
            bug[u] = req.body[u]
        })

        await bug.save()
        res.send(bug)
    } catch (error) {
        res.send(400).send(error)
    }
})

//Delete
router.delete('/:id', async(req,res) => {

    try {
        const bug = await Bug.findById(req.params.id)

        if(!bug)
            return res.status(404).json({ error: 'Bug not found'})

        await bug.remove()

        res.send({success: 'Bug deleted'})
    } catch (error) {
        res.send(400).send(error)
    }
})

module.exports = router