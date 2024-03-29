/*******************************************************************************************************
 * purpose :Demonstrate prototype pattern.(clone the existing object into a new object)
 * file    :prototypePattern.js
 * author  :Priyankadas
 * date    :2-12-2019
 ****************************************************************************************************/
function student(name, age) {
    this.name = name;
    this.age = age;
    this.say = () => {
        console.log("Student name is " + this.name + " and age is " + this.age);
    };
}
function studentPrototype(proto) {
    this.proto = proto;
    this.clone = function () {
        let std = new student();
        std.name = proto.name;
        std.age = proto.age;
        return std;
    };
}
function run() {
    let proto = new student('Priyanka', '21');
    let prototype = new studentPrototype(proto);
    let std = prototype.clone();
    std.say();
}
run();