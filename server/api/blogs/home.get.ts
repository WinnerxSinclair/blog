import Post from '../../models/BlogPost.js'

export default defineEventHandler(async () => {
  const LIMIT = 5;
  const [doc] = await Post.aggregate([
    {
      $facet: {
        projects: [
          {
            $match: { status: 'posted', type: 'project' }
          },
          {
            $sort: { createdAt: -1 }
          },
          {
            $limit: LIMIT
          },
          {
            $addFields: {
              datePosted: {
                $dateToString: {
                  date: '$createdAt',
                  format: '%m/%d/%Y',
                  timezone: 'America/Chicago'
                }
              }
            }
          }
        ],
        concepts: [
          {
            $match: { status: 'posted', type: 'concept' }
          },
          {
            $sort: { createdAt: -1 }
          },
          {
            $limit: LIMIT
          },
          {
            $addFields: {
              datePosted: {
                $dateToString: {
                  date: '$createdAt',
                  format: '%m/%d/%Y',
                  timezone: 'America/Chicago'
                }
              }
            }
          }
        ]
      }
    }
  ]);
  console.log(doc)
  return doc;
});