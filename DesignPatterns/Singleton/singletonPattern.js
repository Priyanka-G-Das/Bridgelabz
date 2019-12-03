/***************************************************************************************** *
purpose :Demonstrate singleton pattern.
* file    :singletonPattern.js
* author  :Priyankadas
* date    :2-12-2019
********************************************************************************************/
/**
* @purpose :To create one instance and return it.
*/
var singleton = (function () {
   var instance;
   function createInstance() {
       var object = new Object("I am the instance");
       return object;
   }
   return {
       getInstance: function () {
           if (!instance) {
               instance = createInstance();
           }
           return instance;
       }
   };
})();
function run() {
   var instance1 = singleton.getInstance();
   var instance2 = singleton.getInstance();
   
   if (instance1 === instance2) {
       console.log("I am singleton Pattern");
   } else {
       console.log("I am not singleton Pattern");
   }
}
run();
