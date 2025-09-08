import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  subtitle: {
    type: String
  },

  icons: {
    type: Array
  },

  series: {
    type: String,
    // required: true
  },

  content: {
    type: Array,
    required: true
  },

  status: {
    type: String,
    required: true
  },

  type: {
    type: String
  }
}, { timestamps: true });

export default new mongoose.model('Post', postSchema);