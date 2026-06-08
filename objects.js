let student={
    name:"Girish",
    age:24,
    course:"mca",
    
};
console.log(student);
console.log(student.name);
console.log(student["age"]);

//modifying properties
student.age=25;
console.log(student);

//adding new properties
student.grade="A";
console.log(student);

//deleting the properties
delete student.course;
console.log(student);
