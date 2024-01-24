export const courseCreateTypeDef = `

type Course {
    id: String!
    instructor_id: String
    category_id: String!
    name: String!
    slug: String
    description: String!
    price: Float
    paid: Boolean
    published: Boolean
    level: String
    duration: Int
    image_url: String
    intro_video: String
    status: String
    language: String
    enrolled_students: Int
  }
  
  input CourseInput {
    instructor_id: String
    category_id: String!
    name: String!
    slug: String
    description: String!
    price: Float
    paid: Boolean
    published: Boolean
    level: String
    duration: Int
    image_url: String
    intro_video: String
    status: String
    language: String
    enrolled_students: Int
}


input updateCourse {
    id: String!
    instructor_id: String
    category_id: String!
    name: String!
    slug: String
    description: String!
    price: Float
    paid: Boolean
    published: Boolean
    level: String
    duration: Int
    image_url: String!
    intro_video: String!
    status: String
    language: String
    enrolled_students: Int
}

type Query {
    greet: String!
    getCourses: [Course]
    getCourse(Id: String!): Course
}

type Mutation {
    createCourse(input:CourseInput): Course
    updateCourse(newData: updateCourse): String!
    deleteCourse(courseId: String!): String!
}

schema {
    query: Query
    mutation: Mutation
}

`