


import mongoose from 'mongoose'

let isConnected = false;

const connectToDatabase = async () => {
  if(isConnected) return;
  //xd
  const config = useRuntimeConfig();
  try{
    const connectionString = config.mongooseConnectionString;

    await mongoose.connect(connectionString);
    isConnected = true;
    console.log('connect to db');


  }catch(err){
    console.error(err);
    throw err;
  }
}
export default defineNitroPlugin(async (nitroApp) => {
  try{
    await connectToDatabase();
    nitroApp.hooks.hook('close', async () => {
      if (mongoose.connection.readyState === 1) {
        await mongoose.disconnect()
        console.log('MongoDB disconnected')
      }
    })
  }catch(err){
    console.error(err);
  }
});

