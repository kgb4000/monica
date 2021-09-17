import { GraphQLClient, gql } from 'graphql-request'

export const getPosts = async () => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/cktkjtoxd0dod01z1bc0w41e9/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      posts(orderBy: date_DESC) {
        title
        date
        tags
        slug
        coverImage {
          width
          height
          url
        }
        author {
          name
          biography
          image {
            id
            url
            width
            height
          }
        }
      }
    }
  `

  return await graphQLClient.request(query)
}

export const getPost = async (slug) => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/cktkjtoxd0dod01z1bc0w41e9/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    query getPosts($slug: String!) {
      posts(where: { slug: $slug }) {
        title
        tags
        description
        date
        slug
        coverImage {
          url
          width
          height
        }
        content {
          json
        }
        author {
          name
          image {
            url
            height
            width
          }
          biography
        }
      }
    }
  `

  const variables = {
    slug: slug,
  }

  return await graphQLClient.request(query, variables)
}

export const getPostsSlugs = async () => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/cktkjtoxd0dod01z1bc0w41e9/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      posts {
        slug
      }
    }
  `

  return await graphQLClient.request(query)
}
