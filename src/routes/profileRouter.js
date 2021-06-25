const { Router } = require("express");
const router = Router()

const Sessions = require('../../db/models/sessionsModel')

router.get('/profile', async (req, res) => {
  const allSession = await Sessions.find({
    creator: req.session.user.id,
  }).sort({ _id: -1})
  res.render('profile', { allSession })
})

router.post('/profile', async (req, res) => {
  let { date, timeFirst, timeLast, donation, payment, feedback } = req.body
  let dataFromCoach = { 
    date, 
    timeFirst, 
    timeLast, 
    donation: Boolean(donation), 
    payment: Boolean(payment), 
    feedback: Boolean(feedback) 
  }
  console.log(dataFromCoach)
  const newSession = await Sessions.create({
    ...dataFromCoach,
    creator: req.session.user.id
  })
  res.redirect('/user/profile')
})

router.get('/createSession', (req, res) => {
  res.render('createSession')
})


module.exports = router