const { Router } = require("express");
const router = Router()

router.get('/profile', (req, res) => {
  res.render('profile')
})


router.get('/createSession', (req, res) => {
  res.render('createSession')
})

module.exports = router
