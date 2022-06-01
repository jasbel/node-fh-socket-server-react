import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN_STRING!, {
      // @ts-ignore
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('db online');
  } catch (error) {
    console.log({error});
    throw new Error('Error en la base de datos - vea logs')
  }
}
