export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "student" | "professor";
}

export interface Course {
  id: string;
  title: string;
  description: string;
  professorId: string;
}

export interface Enrollment {
  userId: string;
  courseId: string;
}
