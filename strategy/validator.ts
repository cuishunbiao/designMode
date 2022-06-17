// 表单验证
const startegies = {
    isNonEmpty: function (value, errorMsg) {
        if (value === '') return errorMsg
    },
    minLength: function (value, length, errorMsg) {
        if (value === '') return errorMsg
        if (value.length < length) return errorMsg
    },
    isMobile: function (value, errorMsg) {
        if (!/(^1[0-9][0-9]{9}$)/.test(value)) {
            return errorMsg
        }
    }
}

//策略模式
const Validator = function () {
    this.cache = []
}

Validator.prototype.add = function (dom, rule, errorMsg) {
    startegies[rule].apply(this, ary)
    this.cache.push()
}

Validator.prototype.start = function () {
    for (let i = 0, validatorFun; validatorFun = this.cache[i++];) {
        let msg = validatorFun()
        if (msg) return msg
    }
}

//添加验证
const validatorFun = function () {
    var validator = new Validator();
    validator.add('userName', 'isNonEmpty', '用户名不能为空')
    validator.add('password', 'isNonEmpty', '密码不能为空')
    validator.add('minLength', 6, '密码不能小于6位')
    return validator.start();
}

const msg = validatorFun();
if (msg) {
    console.log(msg);
}