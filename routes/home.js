const express = require('express')
const router = express.Router();

router.get('', (req,res) => {
    return res.send({response: 'Invalid route or missing param/apikey.'})
})

module.exports = router;