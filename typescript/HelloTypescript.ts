function brucezhou(name: number[]) {
    console.log(name);
}
brucezhou([1,2,3]);

// 泛型数组类型
function brucezhou1(name: Array<number>) {
    console.log(name);
    name.forEach((i, val) => {
        console.log(i);
        console.log(val);
        const arr = [];
        if (i === 2) {
            arr.push(i)
        }
    });
    let tt = name.some(i => i > 2);
    console.log('tt', tt);
}
brucezhou1([1, 2, 3]);
