interface Person {
    firstName: string;
    lastName: string;
}

function f(person: Person) {
    return 'Hello，' + person.firstName + '' + 'and' + '' + person.lastName + '！！！！！';
}

let user = { firstName: 'BruceZhou', lastName: 'XiaoZhou' };

console.log(this.f(user));