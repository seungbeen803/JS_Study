// localhost -> http://10.96.120.106
function sayHi(target) {
    alert(target);
    return target;
}

function sayBye() {};

let hello = "Hello";

// 한 번에 모아서 작성하는 방법
export default sayHi;
export { sayBye, hello};