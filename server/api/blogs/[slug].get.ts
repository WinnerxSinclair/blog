import Post from '../../models/BlogPost.js'

export default defineEventHandler(async (event) => {
  const { slug } = event.context.params;
  console.log(slug);
  const doc = await Post.findOne({ slug }).lean();
  return doc;
})