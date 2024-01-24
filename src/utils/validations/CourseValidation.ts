import { SQL_Query } from "../../Query/SQL_Query";
import pool from "../../DataSource/DataSource";
import { error } from "console";


class CourseValidation {


    public static async validateCourse(courseData: any) {
        await this.validateCourseName(courseData.name);
        await this.validateDescription(courseData.description);
        return true;
    }

    public static async validateCourseName(courseName: string):Promise<void> {
  
        const nameRegex = /^[a-zA-Z0-9_ ]{3,}$/;
        const isValid = nameRegex.test(courseName);

        if (!isValid) {
            throw new Error('Invalid course name format.');
        }

        const result = await pool.query(SQL_Query.CHECK_COURSE_VALIDATION, [courseName]);

        if (result.rowCount !== 0 && result.rows[0].name === courseName) {
            throw new Error('Course name already exists.');
        }

        if (!courseName || courseName.trim().length === 0) {
            throw new Error('Course name is required.');
        }   

        if (courseName.length > 256) {
            throw new Error('Course name cannot exceed 256 characters.');
        }
    }

    public static async validateDescription(description: string){
        if (description.length < 10 || !description || description.length > 1000){
            throw new Error('Invalid description, Please provide valid description.');
        }
        return true
    }
}

export default CourseValidation