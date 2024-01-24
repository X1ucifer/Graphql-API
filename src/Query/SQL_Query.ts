export const SQL_Query = {
    CREATE_COURSE: `INSERT INTO courses (instructor_id, category_id, name, slug, description, price, paid, published, level, duration, image_url, intro_video, status, language, enrolled_students, created_at)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, NOW())
    RETURNING *`,
    UPDATE_COURSE: `UPDATE courses
    SET instructor_id = $1,
        category_id = $2,
        description = $3,
        price = $4,
        status = $5,
        language = $6,
        level = $7,
        paid = $8,
        duration = $9,
        image_url = $10,
        intro_video = $11,
        updated_at = NOW(),
        updated_by = 'Instructor'
    WHERE id = $12
    RETURNING *;`,
    GET_CATEGORY: "SELECT * FROM category;",
    GET_COURSE_PRICING: "SELECT * FROM course_pricing;",
    GET_STATUS: "SELECT * FROM status;",
    GET_LANGUAGES: "SELECT * FROM languages;",
    GET_LEVELS: "SELECT * FROM levels;",
    CHECK_COURSE_VALIDATION: "SELECT name FROM courses WHERE name=$1;",
    CHECK_PRICE: "SELECT * FROM course_pricing WHERE id=$1;",
    CHECK_LEVEL: "SELECT * FROM levels WHERE id =$1",
    CHECK_STATUS: "SELECT * FROM status WHERE id=$1",
    CHECK_LANGUAGES: "SELECT * FROM languages WHERE id=$1",
    GET_INSTRUCTOR_COURSES: "SELECT * FROM courses WHERE instructor_id=$1",
    CHECK_PRICING: "SELECT * FROM course_pricing WHERE id=$1",
    GET_SINGLE_COURSES: `SELECT * FROM courses WHERE id=$1`,
    GET_ALL_COURSES: `SELECT * FROM courses
    `,
    GET_PRICING: "SELECT * FROM course_pricing",
    CHECK_COURSE: `SELECT courses.id, courses.name, course_pricing.price, courses.instructor_id, courses.category_id, courses.description, courses.status, courses.language, courses.level , courses.paid , courses.published, courses.duration , courses.image_url , courses.intro_video , courses.created_at , courses.updated_at , courses.created_by , courses.updated_by , courses.enrolled_students , courses.rating , courses.lesson 
    FROM courses
    JOIN course_pricing
    ON courses.price = course_pricing.id
    WHERE courses.id = $1;
    `,
    CREATE_LESSONS: `INSERT INTO lessons (course_id, sections)
    VALUES ($1, $2)
    RETURNING id, created_at`,
    UPDATE_LESSONS: `
    UPDATE lessons
    SET sections = $1, updated_at = NOW()
    WHERE id = $2
    RETURNING *
    `,
    CHECK_LESSONS: `SELECT * FROM lessons WHERE id=$1`,
    CHECK_LESSONS_COURSEID: `SELECT * FROM lessons WHERE course_id=$1`,
    CREATE_LESSONS_VIDEOS: `INSERT INTO lessons_videos (lesson_id, title, description, video_url, attached, free_preview, time, slug)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING id`

}

