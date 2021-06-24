const express = require('express')
const router = express.Router()
const hrteam = require('./hrteam.js')

// Add your routes here - above the module.exports line

router.get('/hr', (req, res) => {
    res.render('hrpage')
})

router.get('/addemployee', (req, res) =>{
    res.render('addemployee')
})

router.post('/empadded', async (req, res) => {
    var emp = req.body;
    let insertedKey = await hrteam.addEmp(emp)
    res.render('empadded')
})

router.get('/empadded', (req, res) =>{
    res.render('empadded')
})

module.exports = router
