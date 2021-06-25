const { Router } = require("express");
const router = Router()
const Session = require('../../db/models/sessionsModel')



router
  .route('/')
  .get(async (req, res) => {
    const allSessions = await Session.find({ _id: res.locals.id })
    const upcommingSessions = allSessions.find({
      "date": { $gte: Date() }
    });
    const completedSessions = await allSessions.find({
      "date": { $lte: Date() }
    });
    console.log('upcommingSessions ===>', upcommingSessions)
    res.render('client', { upcommingSessions }, { completedSessions })
  })
module.exports = router

