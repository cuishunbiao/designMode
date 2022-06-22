/**
 * 1. 执行 start
 * 2. 收集进入数组
 * 3. 执行 end
 */

const start1 = 3, end1 = 1;
const start2 = '1212172718', end2 = 1;
const start3 = 5, end3 = 1;

let errorResult = []
const isMoreFn = (start1, end1, text) => {
    if (!start1 || !end2) return
    if (start1 > end1) errorResult.push(text);
}
const checkFn = (fn, arg) => {
    return fn.apply(this, arg)
}

checkFn(isMoreFn, [start1, end1, '这个验证是错误的'])
checkFn(isMoreFn, [start3, end3, '这个验证是错误的1'])
console.log(errorResult)



// const formDataCheck = {
//     dataErrorText: [],
//     isMore: function (start, end, errorText) {
//         if (!start || !end) return;
//         if (start > end) {
//             this.dataErrorText.push(errorText)
//             return;
//         }
//     },
//     isLess: function (start, end, errorText) {
//         if (!start || !end) return;
//         if (start < end) {
//             this.dataErrorText.push(errorText)
//             return;
//         }
//     },
//     isLengthFn: function (str, len, errorText) {
//         const _str = str.toString()
//         if (!_str) return;
//         if (_str.length < len) {
//             this.dataErrorText.push(errorText);
//             return;
//         }
//     },
//     errorResult: function () {
//         return Array.from(new Set(this.dataErrorText));
//     }
// }

// //开始执行
// formDataCheck.isMore(start1, end1, '错误1');
// formDataCheck.isMore(start2, end2, '错误2');
// formDataCheck.isLengthFn(start2, 6, '长度不能小于6');
// formDataCheck.isMore(start3, end3, '错误3');
// console.log(formDataCheck.errorResult().join(";\n"));

