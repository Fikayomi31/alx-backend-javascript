var student1 = {
    firstName: "Moses",
    lastName: "Favour",
    age: 30,
    location: "San Francisco",
};
var student2 = {
    firstName: "John",
    lastName: "Mark",
    age: 23,
    location: "New York",
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var header = table.insertRow();
header.insertCell().textContent = "First Name";
header.insertCell().textContent = "Location";
studentsList.forEach(function (student) {
    var row = table.insertRow();
    row.insertCell().textContent = student.firstName;
    row.insertCell().textContent = student.location;
});
document.body.appendChild(table);
