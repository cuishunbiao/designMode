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
    this.cache = [];
    this.cacheMsg = ''
}

Validator.prototype.add = function (value, rule, errorMsg) {
    //把参数拼接一下，人民城市入 startegies
    const cacheFn = startegies[rule].apply(this, [value, errorMsg])
    this.cache.push(cacheFn)
}

Validator.prototype.start = function () {
    for (let i = 0; i < this.cache.length; i++) {
        let msg = this.cache[i]()
        if (msg) this.cacheMsg += msg;
    }
    return this.cacheMsg
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