/**
*   problem：判断数据类型的5种方法。(腾讯面试题)
*   2021-04-21
*/

/**
 * 1. typeof
 * 可以判断数据类型，它返回表示数据类型的字符串（返回结果只能包括number,boolean,string,function,object,undefined）；
 * 可以使用typeof判断变量是否存在（如if(typeof a!="undefined"){...}）；
 * Typeof 运算符的问题是无论引用的对象是什么类型 它都返回object
 */
typeof {} // object
typeof  [1,2] // object
typeof /\s/ //object

/**
 * 2.instanceof
 * 原理 因为A instanceof B 可以判断A是不是B的实例，返回一个布尔值，由构造类型判断出数据类型
 */
 console.log(arr instanceof Array ); // true
 console.log(date instanceof Date ); // true
 console.log(fn instanceof Function ); // true
 //注意： instanceof 后面一定要是对象类型，大小写不能写错，该方法试用一些条件选择或分支

 /**
 * 3.通过Object下的toString.call()方法来判断
 * 
 */
Object.prototype.toString.call();
console.log(toString.call(123)); //[object Number]
console.log(toString.call('123')); //[object String]
console.log(toString.call(undefined)); //[object Undefined]
console.log(toString.call(true)); //[object Boolean]
console.log(toString.call({})); //[object Object]
console.log(toString.call([])); //[object Array]
console.log(toString.call(function(){})); //[object Function]

/**
 * 4.根据对象的contructor判断
 * 
 */
 console.log('数据类型判断' -  constructor);
 console.log(arr.constructor === Array); //true
 console.log(date.constructor === Date); //true
 console.log(fn.constructor === Function); //true

 /**
 * 5.jq中判断数据类型的方法
 * jQuery.isArray();是否为数组
 * jQuery.isEmptyObject();是否为空对象 （不含可枚举属性）。
 * jQuery.isFunction():是否为函数
 * jQuery.isNumberic():是否为数字
 * jQuery.isPlainObject():是否为使用“{}”或“new Object”生成对象，而不是浏览器原生提供的对象。
 * jQuery.isWindow(): 是否为window对象；
 * jQuery.isXMLDoc(): 判断一个DOM节点是否处于XML文档中。
 */
 