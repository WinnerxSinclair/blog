


// import mongoose from 'mongoose'

// let isConnected = false;

// const connectToDatabase = async () => {
//   if(isConnected) return;
//   //xd
//   const config = useRuntimeConfig();
//   try{
//     const connectionString = config.mongooseConnectionString;
//     console.log('Raw connection string:', connectionString);
//     console.log('Connection string length:', connectionString?.length);
//     console.log('First 20 chars:', connectionString?.substring(0, 20));
//     console.log('Last 20 chars:', connectionString?.substring(connectionString.length - 20));
//     console.log('Contains mongodb+srv:', connectionString?.includes('mongodb+srv://'));
    
//     // Check for invisible characters
//     console.log('Connection string bytes:', Buffer.from(connectionString || '', 'utf8'));
//     await mongoose.connect(connectionString);
//     isConnected = true;
//     console.log('connect to db');
//   }catch(err){
//     console.error(err);
//     throw err;
//   }
// }
// export default defineNitroPlugin(async (nitroApp) => {
//   await connectToDatabase();
// });

export default defineNitroPlugin((nitroApp) => 'fuckyou')