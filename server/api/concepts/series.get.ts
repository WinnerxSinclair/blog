import Post from '../../models/BlogPost.js'

export default defineEventHandler(async () => {
  const val = await Post.distinct('series', { type: 'concept', status: 'posted' });
  console.log(val);
  return val;
})