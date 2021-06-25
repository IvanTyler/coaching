const connect = require('./db/connect');
const User = require('./db/models/userModel');
const Session = require('./db/models/sessionsModel');
// const { Session } = require('express-session');

const users = [
  {
    firstName: 'Irina',
    lastName: 'Sharapova',
    email: 'ira@ira1',
    password: 1,
    rating: 0,
  },
  {
    firstName: 'Marina',
    lastName: 'Marinina',
    email: 'm@m3',
    password: 2,
    rating: 0,
  },
  {
    firstName: 'Ira',
    lastName: 'Irova',
    email: 'iraira@ira3',
    password: 3,
    rating: 0,
  },
  {
    firstName: 'Anna',
    lastName: 'Annova',
    email: 'Anna@anna4',
    password: 4,
    rating: 0,
  },
  {
    firstName: 'kolya',
    lastName: 'Kolyanov',
    email: 'kol@kol5',
    password: 5,
    rating: 0,
  },
];



const sessions = [
  {
    date: new Date(2022,01,12),
    timeFirst: '11:00',
    timeLast: '19:00',
    payment: false,
    donation: false,
    feedback: true,
  },
  {
    date: new Date(2022,03,10),
    timeFirst: '10:00',
    timeLast: '20:00',
    payment: true,
    donation: true,
    feedback: false,
  },
  {
    date: new Date(2023,02,22),
    timeFirst: '13:00',
    timeLast: '19:00',
    payment: true,
    donation: false,
    feedback: false,
  },
  {
    date: new Date(2023,01,15),
    timeFirst: '11:00',
    timeLast: '17:00',
    payment: false,
    donation: true,
    feedback: true,
  },
  {
    date: new Date(2022,03,09),
    timeFirst: '11:00',
    timeLast: '19:00',
    payment: false,
    donation: false,
    feedback: true,
  },
];


// const sessions = [
//   {
//     question: 'Для чего барсу такой длинный хвост?',
//     anwser: 'для баланса',
//     topic: 'Барсы',
//   },
// ];

// connect();

async function seed() {
  try {
    await Promise.all(users.map((el) => User.create(el)));
    await Promise.all(sessions.map((el) => Session.create(el)));    
  } catch (error) {
    console.log(error)
  }
}

// seed();

async function main() {
  const beavers = await Deck.findOne({ deckName: 'Бобры' });
  const bears = await Deck.findOne({ deckName: 'Медведи' });
  const leopards = await Deck.findOne({ deckName: 'Барсы' });
  const updatedBeavers = await Card.updateMany({ topic: 'Бобры' }, { deck: beavers._id }, { new: true });
  const updatedBears = await Card.updateMany({ topic: 'Медведи' }, { deck: bears._id }, { new: true });
  const updatedLeopards = await Card.updateMany({ topic: 'Барсы' }, { deck: leopards._id }, { new: true });
}

// main();

module.exports = seed
