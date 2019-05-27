class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName, public msg) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
    middleInitial: string;
    msg: number;
}

function greeter(person : Person):string {
    return "Hello, " + person.firstName + " " + person.lastName + ' ' + person.middleInitial + ' ' + person.msg;
}

let user = new Student("Jane", "M.", "User", 123);

document.body.innerHTML = greeter(user);
