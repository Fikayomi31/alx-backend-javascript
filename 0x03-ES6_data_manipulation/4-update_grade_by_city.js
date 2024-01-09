export default function updateStudentGradeByCity(students, targetLocation, newGrade) {
  return students.filter((student) => student.location === targetLocation)
    .map((student) => {
      const grade = newGrade.find((item) => item.studentId === student.id);
      return { ...student, grade: grade ? grade.grade : 'N/A' };
    });
}
