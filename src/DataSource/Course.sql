CREATE TABLE courses (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  instructor_id UUID,
  category_id UUID NOT NULL,
  name VARCHAR NOT NULL UNIQUE,
  slug VARCHAR,
  description VARCHAR NOT NULL,
  price DECIMAL DEFAULT 500.00,
  paid BOOLEAN DEFAULT true,
  published BOOLEAN DEFAULT false,
  level VARCHAR(50) NOT NULL DEFAULT 'beginner',
  duration INT NOT NULL DEFAULT 0,
  image_url VARCHAR NOT NULL,
  intro_video VARCHAR NOT NULL,
  status VARCHAR(62) NOT NULL DEFAULT 'Draft',
  language VARCHAR(62) NOT NULL DEFAULT 'English',
  enrolled_students INT NOT NULL DEFAULT 0,
  update_at TIMESTAMP,
  created_by VARCHAR DEFAULT 'Instructor',
  update_by VARCHAR
);


CREATE TABLE lessons (
    lesson_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE, -- Foreign key referencing the course
    title VARCHAR(255) NOT NULL, -- Title of the lesson
    description TEXT, -- Description of the lesson (can be longer text)
    video_reference VARCHAR(255), -- Column for storing video reference or URL
    order_in_course INT, -- Optional: Order of the lesson within the course
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP, -- Timestamp for when the lesson was created
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP -- Timestamp for when the lesson was last updated
);


