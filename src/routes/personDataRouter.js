const express = require('express');
const router = express.Router();
const User = require('../../db/models/userModel');
const Session = require('../../db/models/sessionsModel');

router.route('/data')
    .get((req, res) => {
        res.render('personData')
    })
    .post(async (req, res) => {
        const { firstName, lastName, date } = req.body;
        console.log('req.body------->>>>>', req.body);
        try{
            const findUser = await User.findOne({ firstName, lastName });
            console.log('findUser----->>>>', findUser);
            const findDataFromASession = await Session.findOne({ date });
            console.log('findDataFromASession------->>>>>', findDataFromASession);
        }catch (error){
            console.log('errror--->>>', error)
        }
    })

router.route('/page')
    .get((req, res) => {
        res.render('personAnotherPage')
    })

module.exports = router;
