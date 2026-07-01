let student=[
    {name:"Girish",marks:90},
    {name:"Raju",marks:80},
    {name:"sita",marks:91},
    {name:"ravi",marks:99},
    {name:"suresh",marks:70}
];
student.sort((a,b)=>b.marks-a.marks);
console.log(student);