interface IsalesOffices {
    clientList: any[],
    linten: (fn: any) => void,
    trigger: (...arg: any) => void
}
let salesOffices: IsalesOffices = {
    clientList: [], //定义售楼处
    linten: (fn): void => {
        return this.clientList.push(fn)
    },
    trigger: (...arg) => {
        for (let fn of this.clientList) {
            fn.apply(this, ...arg)
        }
    }
}
const xiaoming = (price, squareMeter) => {
    console.log(`价格：${price}`);
    console.log(`平米数：${squareMeter}`);
}
salesOffices.linten(xiaoming)
salesOffices.trigger(2000, 100)

