export default function getStudentsByLocation(students, location) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.filter((students) => students.location === location);
}
