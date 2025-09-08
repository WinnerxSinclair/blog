import { connectToDatabase } from "../utils/mongoose.js";

export default async () => {
  await connectToDatabase();
}