//complete this code
class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	getName(){
		return name;
	}
	setAge(newage){
		this.age = newage;
		return;
	}
}

class Student extends Person {
	constructor(name, age){
		super(name, age)
		
	}
	study(){
		console.log(name, "is studying")
		return
	}
}

class Teacher extends Person {
	constructor(name, age){
		super(name, age)
	}
	teach(){
		console.log(name, "is teaching")
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
