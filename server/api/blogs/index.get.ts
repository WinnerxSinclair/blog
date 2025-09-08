import Post from '../../models/BlogPost.js'
export default defineEventHandler(async (event) => {
  const { type, sort = 'desc', series = 'any' } = getQuery(event);
 
  const dbQuery = { type };
  if(series !== 'any'){
    dbQuery.series = series;
  }
  const docs = await Post.find(dbQuery)
                         .select('-content -status')
                         .sort({ createdAt: sort })
                         .lean();
  console.log('THESE ARE THE DOCS', docs);
  return docs;
})