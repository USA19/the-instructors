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

export const enrollToCourse = async (email, courseId) => {
  const document = gql`
    mutation CreateCourseEnrollment{
    createUserEnrollCourse(data:{userEmail:"`+ email + `",course:{connect:{slug:"` + courseId + `"}} }){
      id
    }

    publishManyCoursesConnection{
      edges{
        node{
          id
        }
      }
    }
  }`;

  return await request({ url, document });
}

export const getUserCourseEnrollment = async (email, courseId) => {
  const document = gql`
    query GetUserCourseEnrollment {
    userEnrollCourses(
      where: {userEmail:"`+ email + `", course: {slug:"` + courseId + `",}}
    ) {
      id
      createdAt
    }
  }`;

  return await request({ url, document });
}

export const getUserCourseEnrollmentById = async (id) => {
  const document = gql`query GetUserCourseEnrollment {
    userEnrollCourse(where: {id:"`+ id + `"}) {
      id
      userEmail
      createdAt
      completedChapter{
          ... on CompletedChapter{
            id
            chapterId
          }
        }
      course {
        chapter {
          ... on Chapters {
            id
            name
            shortDesc
            stage
            youtubeUrl
            video {
              id
              url
            }
            chapterNumber
          }
        }
        createdAt
        demoUrl
        description
        free
        banner {
          id
          url
        }
        slug
        sourceCode
        tag
        totalChapters
        updatedAt
      }
    }
  }`;

  return await request({ url, document });
}

export const markChapterAsComplete = async (userEnrollId, chapterId) => {
  const document = `mutation UpdateUserCourseEnrollment {
  updateUserEnrollCourse(
    data: {completedChapter: {create: {CompletedChapter: {data: {chapterId: "`+ chapterId + `"}}}}}
    where: {id: "`+ userEnrollId + `"}
  ){
    id
  }

  publishUserEnrollCourse(where:{id: "`+ courseId + `"}){
    id
  }
}
`

  return await request({ url, document });
}

export const getUserEnrolledCourses = async (email) => {
  const document = gql`query GetUserCourseEnrollment {
    userEnrollCourses(where: {userEmail:"`+ email + `"}) {
      id
      userEmail
      createdAt
      completedChapter{
          ... on CompletedChapter{
            id
            chapterId
          }
        }
      course {
        chapter {
          ... on Chapters {
            id
            name
            shortDesc
            stage
            youtubeUrl
            video {
              id
              url
            }
            chapterNumber
          }
        }
        createdAt
        demoUrl
        description
        free
        banner {
          id
          url
        }
        slug
        sourceCode
        tag
        totalChapters
        updatedAt
      }
    }
  }`;

  return await request({ url, document });
}