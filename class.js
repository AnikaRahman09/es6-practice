
class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "bigg boss";
    }
}

const student1 = new Student(16,"Anika"); 
const student2 = new Student(12,"Niloy");
console.log(student1.name,student2.name);
