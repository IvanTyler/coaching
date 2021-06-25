const express = require('express');
const router = express.Router();
const User = require('../../db/models/userModel');
const Session = require('../../db/models/sessionsModel');

router.route('/data')
    .get((req, res) => {
        res.render('personData')
    })
    .post(async (req, res) => {
        const { firstName, lastName } = req.body;
        try{
            const findUser = await User.findOne({ firstName, lastName });
        }catch (error){
            res.status(418).redirect('/');
        }
    })

router.route('/page/:id')
    .get(async (req, res) => {
        const currentId = req.params.id;
        try{
            const currentUser = await User.findById(currentId);
            console.log('findUser------>>>>', currentUser );
            const findSession = await Session.find({ creator: res.locals._id });
            findSession.filter((el) => el.date > new Date());
            if (currentUser ) return res.render('personAnotherPage', { user: currentUser  });
        }catch(error){
            return res.status(418).redirect('/');
        }
    })

module.exports = router;
