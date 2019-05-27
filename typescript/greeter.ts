function greeter(s: string) {
    return 'Hello,' + s;
}

let username = 'brucezhou';

document.body.innerHTML = greeter(username);
console.log(this.greeter(username));