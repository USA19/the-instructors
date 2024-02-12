import { gql, request } from "graphql-request"

const url = process.env.NEXT_PUBLIC_API_KEY || "";
export const getCourses = async () => {
  const document = gql`
    query Courses {
      courses {
        author
        createdAt
        demoUrl
        description
        free
        id
        name
        publishedAt
        slug
        sourceCode
        totalChapters
        updatedAt
        youtubeUrl
        banner {
          url
         }
        chapter{
          ...on Chapters{
            stage
            id 
            name
            shortDesc
            youtubeUrl
            chapterNumber
            video {
              id
            }
          }
        }
      }
    }
  `
  return await request({ url, document });
}

export const getSideBanner = async () => {
  const document = gql`
    query SideBanners{
      sideBanners {
        id
        name
        url
        banner{
          url
        }
        
        updatedAt
        createdAt
      }
  }
`
  return await request({ url, document });
};

export const getCourseBySlug = async (slug) => {
  const document = `query GetCourseBySlug {
  course(where: {slug:"`+ slug + `"}) {
    createdAt
    demoUrl
    author
    description
    free
    id
    name
    publishedAt
    slug
    sourceCode
    totalChapters
    updatedAt
    youtubeUrl
    banner {
      url
    }
    chapter {
      ... on Chapters {
        stage
        id
        name
        shortDesc
        youtubeUrl
        chapterNumber
        video {
          id
          url
        }
      }
    }
  }
}
`
  return await request({ url, document });
}