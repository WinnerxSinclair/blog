import mongoose from 'mongoose'

let isConnected = false;

export const connectToDatabase = async () => {
  if(isConnected) return;

  const config = useRuntimeConfig();
  try{
    console.log(config.mongooseConnectionString);
    await mongoose.connect(config.mongooseConnectionString);
    isConnected = true;
    console.log('connect to db');
  }catch(err){
    console.error(err);
    throw err;
  }
}