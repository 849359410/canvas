function greeter(s) {
    return 'Hello,' + s;
}
var username = 'brucezhou';
document.body.innerHTML = greeter(username);
console.log(this.greeter(username));
