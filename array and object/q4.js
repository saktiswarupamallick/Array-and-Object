let students = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 'A' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'B' },
    { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 21, grade: 'A' },
   
  ];
  
  function addStudent(id, firstName, lastName, age, grade) {
    students.push({ id, firstName, lastName, age, grade });
  }
  
  function updateStudent(id, updatedInfo) {
    const student = students.find(student => student.id === id);
    if (student) {
      Object.assign(student, updatedInfo);
    } else {
      console.log(`Student with id ${id} not found.`);
    }
  }
  
  function deleteStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
      students.splice(index, 1);
    } else {
      console.log(`Student with id ${id} not found.`);
    }
  }
  
  function listAllStudents() {
    console.log("List of All Students:");
    students.forEach(student => {
      console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
    });
  }
  
  function findStudentsByGrade(grade) {
    const studentsByGrade = students.filter(student => student.grade === grade);
    console.log(`Students with grade ${grade}:`);
    studentsByGrade.forEach(student => {
      console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}`);
    });
  }
  
  function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = totalAge / students.length;
    console.log(`Average age of students: ${averageAge.toFixed(2)}`);
  }
  
  // Test the functions
  addStudent(5, 'Alice', 'Williams', 24, 'B');
  listAllStudents();
  
  updateStudent(2, { firstName: 'Janet', lastName: 'Doe', age: 23, grade: 'A' });
  listAllStudents();
  
  deleteStudent(3);
  listAllStudents();
  
  listAllStudents();
  
  findStudentsByGrade('A');
  
  calculateAverageAge();
  