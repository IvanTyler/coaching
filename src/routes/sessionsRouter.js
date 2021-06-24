const { Router } = require("express");
const router = Router()
const Session = require('../../db/models/sessionsModel')

router
  .route('/sessions/:date')
  .get(async (req, res) => {
    const voteDate = req.params.date
    const inDaySessions = await Session.find({ "date": { voteDate }, "client": { $exists: false } })
    res.render('sessions', { inDaySessions })
  })
  .post(async(req, res)=>{
    // fetch target click  
  })





module.exports = router
