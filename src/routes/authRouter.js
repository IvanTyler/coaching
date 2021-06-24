const { Router } = require("express");
const router = Router()

const bcrypt = require('bcrypt')
const saltRound = 10
const User = require('../db/models/userModel')

//РЕГИСТРАЦИЯ
router.get('/signup',  (req, res) => {
  res.render('signup')
})

router.post('/signup', async (req, res) => {  
  const {name, email, password} = req.body
  const hash = await bcrypt.hash(password, saltRound);

  try {
    const newUser = await User.create({
      name,
      email,
      password: hash,
    });

    if(newUser){      
      req.session.user = {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      }
    }

    return res.redirect("/");
  } catch (err) {
  const wrongData = 'Логин и почта должны быть уникальны!';
  return res.status(418).render("signup", {wrongData});
  }
})


//АВТОРИЗАЦИЯ
router.get('/signin', (req, res) => {
  res.render('signin')
})

router.post('/signin', async (req, res) => {
  const { email, password } = req.body
  const wrongPass = 'Неверный пароль!'
  try{
    const findUser = await User.findOne({email})
    const checkPassword = await bcrypt.compare(password, findUser.password);
    
    if(checkPassword) {
      req.session.newId = findUser._id;
      req.session.user = {
        id: findUser._id,
        name: findUser.name,
        email: findUser.email,
      }
      
      return res.redirect("/");
    } else {      
      return res.status(418).render("signin", { wrongPass });
    }
  } catch (err) {
    return res.status(418).render("signin", { wrongPass });
  }
})


//ЛОГАУТ/КОНЕЦ СЕССИИ
router.get ('/signout', (req, res) => {
  req.session.destroy();
  res.clearCookie(req.app.get("cookieName"));
  res.redirect("/");
  console.log('123')
})

module.exports = router
