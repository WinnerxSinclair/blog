import Post from '../../models/BlogPost.js'

export default defineEventHandler(async (event) => {
  const { series, seriesNumber } = getQuery(event);
  if(!series || !seriesNumber) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Series is over'
    })
  }

  const doc = await Post.findOne({ series, seriesNumber }).select('title slug');
  return doc;
});