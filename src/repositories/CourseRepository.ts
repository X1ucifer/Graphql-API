// repositories/CourseRepository.ts

import pool from '../DataSource/DataSource';
import { Course } from '../types/CourseTypes';
import { SQL_Query } from '../Query/SQL_Query';

class CourseRepository {
    
    public async createCourse(courseData: Course) {

        const {
            instructor_id,
            category_id,
            name,
            slug,
            description,
            price,
            paid,
            published,
            level,
            duration,
            image_url,
            intro_video,
            status,
            language,
            enrolled_students,
        } = courseData;

        const values = [
            instructor_id,
            category_id,
            name,
            slug,
            description,
            price,
            paid,
            published,
            level,
            duration,
            image_url,
            intro_video,
            status,
            language,
            enrolled_students,
        ];
 

        try {
            const result = await pool.query(SQL_Query.CREATE_COURSE, values);

            console.log(result)
            return result.rows[0];
        } catch (error) {
            console.error('Error creating course:', error);

            throw new Error('Failed to create course');
        }
    }
}

export default new CourseRepository();
