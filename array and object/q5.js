function displayStudentInfo(student) {
    for (let property in student) {
      console.log(`${property}: ${student[property]}`);
    }
  }
  