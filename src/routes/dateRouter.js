const { Router } = require("express");
const router = Router()
const Session = require('../../db/models/sessionsModel')

router
  .route('/date')
  .get(async (req, res) => {
    const allVacantSessions = await Session.find({ "date": { $gte: Date() }, "client": { $exists: false } }).sort({ date: 1 })
    res.render('pickDate', { allVacantSessions })
  })
//ne zabit' dobavit queryurli v hbs dlya kajdoy dati => params

module.exports = router

