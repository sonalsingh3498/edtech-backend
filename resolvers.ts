import { users } from "./data/users";
import { courses } from "./data/courses";
import { enrollments } from "./data/enrollments";

export const resolvers = {
 Query: {
    getCourses: () => courses,
    getCourseById: (_parent: any, { id }: any) =>
      courses.find(course => course.id === id),
   getUser: (_: any, { id }: { id: string }) =>
      users.find((user) => user.id === id),
   getUserByEmail: (_: any, { email }: { email: string }) =>
   users.find(user => user.email === email),
  },

  Mutation: {
    login: (_parent: any, { email, password }: any) => {
      const user = users.find(u => u.email === email && u.password === password);
      if (!user) throw new Error("Invalid credentials");

      const { password: _password, ...safeUser } = user; // rename destructured `password`
      return safeUser;
    },

    enrollUser: (_parent: any, { userId, courseId }: any) => {
      const alreadyEnrolled = enrollments.find(
        e => e.userId === userId && e.courseId === courseId
      );
      if (alreadyEnrolled) return alreadyEnrolled;

      const newEnrollment = { userId, courseId };
      enrollments.push(newEnrollment);
      return newEnrollment;
    },

   updateCourse: (_: any, { id, input }: any) => {
  console.log("Course ID:", id);
  console.log("Courses list:", courses);

  const courseIndex = courses.findIndex(course => course.id === id);
  if (courseIndex === -1) {
    throw new Error("Course not found");
  }

  courses[courseIndex] = {
    ...courses[courseIndex],
    ...input,
  };

  return courses[courseIndex];
}

  
  },
};
