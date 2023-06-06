import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts($categoryName: String!) {
    posts(where: { categoryName: $categoryName }) {
      nodes {
        date
        title
        slug
        content(format: RENDERED)
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;
