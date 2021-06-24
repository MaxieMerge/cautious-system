const express = require('express')
const router = express.Router()


// Add your routes here - above the module.exports line

router.get('/hr', (req, res) => {
    res.render('hrpage')
})

module.exports = router
