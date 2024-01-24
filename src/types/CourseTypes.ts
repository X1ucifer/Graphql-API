export interface Course {
    id: string; // UUID
    instructor_id: string; // UUID
    category_id: string; // UUID
    name: string;
    slug?: string | null;
    description: string;
    price: number;
    paid: boolean;
    published: boolean;
    level: string;
    duration: number;
    image_url: string;
    intro_video: string;
    status: string;
    language: string;
    enrolled_students: number;
}