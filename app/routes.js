const express = require('express')
const router = express.Router()


// Add your routes here - above the module.exports line

router.get('/hr', (req, res) => {
    res.render('hrpage')
})

router.get('/sales', (req, res) => {
    res.render('sales-team')
})

router.get('/finance', (req, res) => {
    res.render('finance')
})

router.get('/talent', (req, res) => {
    res.render('talent-manager')
})

module.exports = router
