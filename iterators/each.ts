//普通迭代器
const each = function (ary, callback) {
    for (let i = 0, l = ary.length; i < l; i++) {
        callback.call(ary[i], i, ary[i])
    }
}

each([1, 2, 3], function (i, val) {
    console.log(i, val);
})

//迭代方法
const getOneFn = function () {
    //模拟执行
    console.log('执行第一个 迭代器 逻辑')
    return false;
}
const getTwoFn = function () {
    //模拟执行
    console.log('执行第二个 迭代器 逻辑')
    return false;
}

const getThreeFn = function () {
    console.log('执行第三个业务逻辑')
    return getResultFn()
}

const getResultFn = () => {
    return 'cuishunbiao'
}

//迭代
const iteratorUplaodObj = (...fn) => {
    for (var i = 0; i < fn.length; i++) {
        const uploadFn = fn[i]();
        if (uploadFn) return uploadFn;
    }
}

console.log(iteratorUplaodObj(getOneFn, getTwoFn, getThreeFn));
