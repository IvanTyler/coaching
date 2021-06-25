const { Router } = require("express");
const router = Router()

const Sessions = require('../../db/models/sessionsModel')

router.get('/profile', async (req, res) => {
  const allSession = await Sessions.find({
    creator: req.session.user.id,
  }).sort({ _id: -1 })
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

router.get('/editSession/:id', async (req, res) => {
  const id = req.params.id
  const session = await Sessions.findById(id).sort({ _id: -1 })
  res.render('editSession', { session })
})

router.post('/editSession/:id', async (req, res) => {
  const id = req.params.id
  const { date, timeFirst, timeLast } = req.body
  const updateSession = await Sessions.findByIdAndUpdate(id, { date, timeFirst, timeLast })
  res.redirect('/user/profile')
})

router.delete('/profile/:id', async (req, res) => {
  const idSession = req.params.id
  try {
    await Sessions.findByIdAndRemove(idSession)
    return res.sendStatus(200)
  } catch (error) {
    return res.sendStatus(500)
  }
})


module.exports = router