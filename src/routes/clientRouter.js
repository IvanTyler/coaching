const { Router } = require("express");
const router = Router()
const Session = require('../../db/models/sessionsModel')



router
  .route('/')
  .get(async (req, res) => {
    const allSessions = await Session.find({ client: res.locals.id })

    const upcommingSessions = allSessions.filter((session) => session.date > Date());

    // {
    //   "date": { $gte: Date() }
    // }

    const completedSessions = allSessions.filter((session) => session.date < Date())

    //   {
    //   "date": { $lte: Date() }
    // });
    console.log('upcommingSessions ===>', upcommingSessions)
    res.render('profile', { upcommingSessions , completedSessions })
  })
module.exports = router


