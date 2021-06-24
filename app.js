//require("dotenv").config();
const express = require("express")
const path = require("path")
const sessions = require("express-session")
const MongoStore = require("connect-mongo")
const morgan = require('morgan')
const { DB_HOST, DB_NAME, DB_PORT } = require("./db/config")
// const secretKey = require("crypto").randomBytes(64).toString("hex");
const secretKey = '123sdsdsd3355465fgrgdfgfdgfgd4677'
const { connect } = require("./db/connect")
const hbs = require("hbs")

const indexRouter = require("./src/routes/indexRouter")
const authRouter = require('./src/routes/authRouter')


const PORT = 3000;
const app = express();

connect();
console.log();
app.set("view engine", "hbs");
app.set("cookieName", "userCookie");
app.set('views', path.join(process.env.PWD, 'src', 'views'));

const sessionParser = sessions({
  name: app.get("cookieName"),
  secret: secretKey,
  resave: false, // перезаписывать (false)
  saveUninitialized: false, // сохранять пустую (false)
  store: MongoStore.create({
    mongoUrl: `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  }),
  cookie: {
    // secure: true,
    httpOnly: true,
    maxAge: 100000000,
  },
});


app.use(sessionParser);


app.use(express.static(path.join(process.env.PWD, "public")));
hbs.registerPartials(path.join(process.env.PWD, "src", "views", "partials"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use((req, res, next) => {
  if (req.session.user?.id) {
    res.locals.id = req.session.user.id;
    res.locals.name = req.session.user.firstName;
    res.locals.email = req.session.user.email;
  }
  next();
});


app.use("/", indexRouter)
app.use('/auth', authRouter)


app.listen(PORT, () => {
  console.log("Server started on PORT ", PORT);
});
