export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0; // Return 0 for an empty array or non-array input
  }

  return students.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
