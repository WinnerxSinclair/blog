// import { connectToDatabase } from "../utils/mongoose.js";

// export default async () => {
//   await connectToDatabase();
// }
import mongoose from 'mongoose'

let isConnected = false;

const connectToDatabase = async () => {
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
export default defineNitroPlugin(async (nitroApp) => {
  await connectToDatabase();
});