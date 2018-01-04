const express = require('express'),
    router = express.Router(),
    User = require('../models/User'),
    isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) return next()
    else res.json({msg: "auth failed"})
}


router.get('/:id', isAuthenticated,  (req, res) => {
    User.find({userName:req.params.id}, (err, result) => {
        console.log(req.params.id)
        res.json(result)
    })
})




module.exports = router