
/**
*   problem：JavaScript深入之自己实现new
*   2021-04-24
*   通过 new 创建一个对象，并将 new 后面构造函数中的 属性和原型方法 赋给 这个对象。
*   属性通过 call，原型方法通过 __proto__
*   构造函数的实现创建对象
*   属性创建，原型方法创建
*/
        
function myNew () {
    var obj = {} // 创建空对象
    let context = [].shift.call(arguments) // 取出第一个参数
    obj.__proto__ = context.prototype // 设置原型链 //obj = Object.create(context.prototype)
    var result = context.call(obj, arguments) // 通过 call 为空对象添加属性 
    return result instanceof Object ? result : obj //返回值类型是否为对象，如果是对象，就使用构造函数的返回值，否则返回创建的对象
 }
 
 function Animation () {
   this.name = 'animation'
 }
 
 var cat = myNew(Animation)
 console.log(cat)