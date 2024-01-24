import CourseRepository from '../repositories/CourseRepository';
import { Course } from '../types/CourseTypes';
import CourseValidation from '../utils/validations/CourseValidation';

class CourseCreation {

    public static async createCourse(args: Course): Promise<Course> {

        await CourseValidation.validateCourse(args)

        if (
            !args.instructor_id ||
            !args.category_id ||
            args.instructor_id === "" ||
            args.category_id === "" ||
            !args.status ||
            args.status === ""
        ) {
            throw new Error('Failed to create course make sure all fields are correct');
        }
        try {
            const data = await CourseRepository.createCourse(args);
            console.log(data)
            return data
        } catch (error) {
            console.error('Error creating course from service:', error);
            throw new Error('Failed to create course');
        }
    }
}

export default CourseCreation

