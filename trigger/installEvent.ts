interface Ievent {
    clientList: any[],
    listen: (...any) => void;
    trigger: (...any) => void;
}
const listentEvent: Ievent = {
    clientList: [],
    listen: function (key, fn) {
        if (!this.clientList[key]) {
            this.clientList[key] = [];//定义空数组，里面放入所有要执行的事件
        }
        this.clientList[key].push(fn);//如果有 key，则把方法 push 进去；
    },
    trigger: function () {
        let key = Array.prototype.shift.call(arguments),
            fns = this.clientList[key];
        //如果没有订阅消息，直接返回 false
        if (!fns || fns.length === 0) {
            return false;
        }
        for (let i = 0; i < fns.length; i++) {
            fns.apply(this, arguments);//arguments 是 trigger 带的参数
        }
    }
}
const installEvent = function (obj) {
    for (let i of obj) {
        obj[i] = listentEvent[i]
    }
}

let salesOfficesTwo = {}
installEvent(salesOfficesTwo)

salesOfficesTwo.listen('cuishunbiao1', function (price) {
    console.log(`价格=${price}`)
})
