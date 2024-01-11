interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "Moses",
  lastName: "Favour",
  age: 30,
  location: "San Francisco",
};
const student2: Student = {
  firstName: "John",
  lastName: "Mark",
  age: 23,
  location: "New York",
};
const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const header = table.insertRow()
header.insertCell().textContent = "First Name"
header.insertCell().textContent = "Location"

studentsList.forEach(student => {
  const row = table.insertRow()
  row.insertCell().textContent = student.firstName
  row.insertCell().textContent = student.location
});
document.body.appendChild(table)
