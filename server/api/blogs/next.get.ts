import Post from '../../models/BlogPost.js'

export default defineEventHandler(async (event) => {
  let { series, seriesNumber } = getQuery(event);
  
  if(!series || !seriesNumber) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Series is over'
    })
  }
  seriesNumber = Number(seriesNumber);
  console.log({ series, seriesNumber });
  const doc = await Post.findOne({ series, seriesNumber }).select('title slug');
  return doc;
});