/**
*   problem：JavaScript深入之函数的柯里化
*   2021-04-25
*   柯里化其实本身是固定一个可以预期的参数，并返回一个特定的函数，
*   处理批特定的需求。这增加了函数的适用性，但同时也降低了函数的适用范围。
*/

function currying(fn) {
    var slice = Array.prototype.slice,
    __args = slice.call(arguments, 1);
    return function () {
        var __inargs = slice.call(arguments);
        return fn.apply(null, __args.concat(__inargs));
    };
}