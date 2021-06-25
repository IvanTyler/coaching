const mongoose = require('mongoose');
const { dbConnectionURL, options } = require('./config');
const seed = require('../seed')


function connect() {
    mongoose.connect(dbConnectionURL, options).then(() => {
      console.log('Connect to DB')
      // seed()
    });

}

function disconnect() {
    mongoose.disconnect();
}

module.exports = { connect, disconnect };
