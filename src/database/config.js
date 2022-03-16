const mongoose = require('mongoose')

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('db online');
  } catch (error) {
    console.log({error});
    throw new Error('Error en la base de datos - vea logs')
  }
}

module.exports = {
  dbConnection,
}