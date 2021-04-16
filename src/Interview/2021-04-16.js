
/**
*   problem：编写函数获得对象中的值666，必须使用到 str = 'a.b.c'。(滴滴面试题)
*   分析：重点就是要知道检索对象中包含的值有什么方法。
*   方法有两种:
*   在[]后缀中包括住一个字符串表达式的方法 如：obj[a]
*   可以使用.表示法 如：obj.a
*/

/**
 * @param {{}} 
 * @param {string} 
 * @return {number}
 * 2021-04-16
 */
// method 1
 let obj = {
    a:{
        b:{
            c:666
        }
    }
}
 
var str = 'a.b.c';
const getData=(obj,str)=>{
 str.split('.').forEach(element =>{ 
     obj= obj[element]
})    
return obj;
}

// method 2
let obj = {
    a:{
        b:{
            c:666
        }
    }
}
 
var str = 'a.b.c';
const getData = ()=>{
  var newArr =  str.split('.').reduce((o,s)=>{ return  o[s]},obj)
    return newArr
}


