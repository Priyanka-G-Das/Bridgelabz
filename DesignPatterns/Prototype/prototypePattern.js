/********************************************************************
 * purpose :Demonstrate prototype pattern.(clone the existing object into a new object)
 * file    :prototypePattern.js
 * author  :Priyankadas
 * date    :19-11-2019
 *****************************************************************************************/
function student(name,age,add){
    this.name=name;
    this.age=age;
    this.say=()=>{
        console.log("Student name is "+this.name+ " and age is " +this.age);
    };
}
function studentPrototype(proto){
    this.proto=proto;
     this.clone=function(){
        var std=new student();
        std.name=proto.name;
        std.age=proto.age;
        return std;
    };
}
function run(){
var proto=new student('Riyaz','25');
var prototype=new studentPrototype(proto);
var std=prototype.clone();
std.say();
}
run();