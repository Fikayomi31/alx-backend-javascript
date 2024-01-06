export default function createEmpolyeesObject(departmentName, employees) {
  const name = {
    [departmentName]: employees,
  };
  return name;
}
