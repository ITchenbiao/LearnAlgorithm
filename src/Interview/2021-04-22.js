/**
*   problem：如何实现一个LazyMan。(微信面试题)
*   
    // 设计一个LazyMan类，实现以下功能
    LazyMan('Tony')
    // Hi I am Tony
    LazyMan('Tony').sleep(10).eat('lunch')
    // Hi I am Tony
    // 等待10秒...
    // I am eating lunch
    LazyMan('Tony').eat('lunch').sleep(10).eat('dinner')
    // Hi I am Tony
    // I am eating lunch
    // 等待10秒...
    // I am eating dinner
    LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food')
    // Hi I am Tony
    // 等待了5秒...
    // I am eating lunch
    // I am eating dinner
    // 等待10秒
    // I am eating junk food
*/

/**
 * 分析题目：
    1.普通调用
    2.很显然要等待10秒再执行下一步
    3.前面两个按顺序调用，然后等待10秒再执行下一个，其实跟第二个差不多
    4.问题：a.   sleep(5)写在后面却要在lunch和dinner之间调用
           b.   sleep(5)没执行后面的只能等着
           c.   很长的一个链式调用
    知识点: 1.整体是一个js的面向对象编程的题目
           2.涉及到异步控制的思想
           3.执行顺序不同于调用顺序
           4.可以考虑内部维护一个数组控制调用顺序
           5.可以考虑使用Promise实现
           6.可以考虑使用async实现
 * 2021-04-22
 */

// es6
class LazyManClass {
    // 构造函数
    constructor(name) {
        this.name = name
        // 定义一个数组存放执行队列
        this.queue = []
        console.log(`Hi I am ${name}`)
        // 在调用LazyManClass时首先会打印 Hi I am ${name}
        setTimeout(() => {
            this.next()
        }, 0)

    }
    //  定义原型方法
    eat(food) {
        var fn = () => {
            console.log(`I am eating ${food}`)
            this.next()
        }
        this.queue.push(fn)
        return this
    }
    sleep(time) {
        var fn = () => {
            // 等待了10秒...
            setTimeout(() => {
                console.log(`等待了${time}秒`)
                this.next()
            }, 1000 * time)
        }
        this.queue.push(fn)
        return this
    }
    sleepFirst(time) {
        var fn = () => {
            // 等待了5秒...
            setTimeout(() => {
                console.log(`等待了${time}秒`)
                this.next()
            }, 1000 * time)
        }
        this.queue.unshift(fn)
        return this
    }
    next() {
        var fn = this.queue.shift()
        fn && fn()
    }
}
function LazyMan(name) {
    return new LazyManClass(name)
}
LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food')
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待10秒
// I am eating junk food

/**
总结一下最后一步：
1.JavaScript引擎中存在着一个主线程，所有的同步任务都会在这个主线程上执行，每当一个同步任务要执行了，主
线程就会把这个同步任务推入函数堆栈中，待执行完成后，主线程读取下一个同步任务到堆栈中，继续执行；而在这个
过程中若存在被注册的异步任务回调函数，这些异步任务会交给引擎中的其他模块进行处理，并在异步任务完成或是合
适的时机（比如setTimeout指定的时间间隔达到了）将回调函数放到任务队列当中，一般来说不同的异步任务会有
不同的任务队列，而不是所有回调都放在同一个任务队列当中。当主线程中的函数堆栈中不再有更多的同步任务时，
主线程就会开始读取任务队列中的回调函数。
2.当我们调用LazyMan的时候，constructor里面首先会立即打印信息
3.然后继续往下走，遇到了settimeout，JS发现他是一个异步任务（先放到一边），settimeout是一个宏任务，
然后继续执行，走到eat('lunch') ，这时候创建了一个函数fn（未执行），继续走，将fn放到事件队列queue[]，
此时的queue为[eat('dinner')]
4.继续往下走 ，遇到了eat('dinner') ，这时候又创建了一个fn（未执行），继续走，将fn放到事件队列queue[],
    此时的queue为[eat('lunch'), eat('dinner')]
5.再继续往下走，遇到了sleepFirst(5), 看题目，题目要求它要跑到前面去，很简单，那就插个队，unshift
此时的queue为[sleepFirst(time), eat('lunch'), eat('dinner')]
6.再继续往下走，遇到了sleep(10), 这里要等待10秒，那就创建一个定时器fn，它在后面调用，正常排队
此时的queue为[sleepFirst(5), fneat'lunch'), eat('dinner'), sleep(10)]
7.再继续往下走，遇到了eat('junk food'), 创建一个fn，正常排队
此时的queue为[sleepFirst(5), fneat'lunch'), eat('dinner'), sleep(10), eat('junk food')]
8.JS会问还有没有要执行的，其实刚开始我们把settimeout放到了异步队列，
同步任务：我执行完了
异步任务：我知道了
异步任务：主线程大哥，该执行我的异步任务了，此时开始执行settimeout里面的this.next()
然后按照顺序调用。
*/




