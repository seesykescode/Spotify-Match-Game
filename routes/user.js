const express = require('express'),
    router = express.Router(),
    User = require('../models/User')


router.get('/profile/:id', (req, res) => {
    User.find({userName:req.params.id}, (err, result) => {
        console.log(req.params.id)
        res.json(result)
    })
})




module.exports = router