/**
 *   problem：一周中的第几天。
 *   给你一个日期，请你设计一个算法来判断它是对应一周中的哪一天。
 *   输入为三个整数：day、month 和 year，分别表示日、月、年。  
 *   返回的结果必须是这几个值中的一个 {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}。    
 *   示例：
 *   输入：day = 31, month = 8, year = 2019
 *   输出："Saturday"
 *   
 */

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 * 2021-03-24
 */
var dayOfTheWeek = function(day, month, year) {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date(year + '/' + month + '/' + day).getDay()]
};





