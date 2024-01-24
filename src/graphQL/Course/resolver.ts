import CourseCreation from "../../service/CourseCreationService,";

const courseCreateResolver = {
    
    Query: {
        greet(){
            return "HI"
        }
    },
    Mutation: {
        createCourse(parent: any, args:any, context:any ){
            
            return CourseCreation.createCourse(args.input);
        }
    }
}

export default courseCreateResolver;