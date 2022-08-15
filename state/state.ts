//有限状态机
function foundString(string) {
    debugger
    let state = foundA;//赋值 初始值
    for (let i of string) {
        state = state(i);
    }
    return state === end;//判断是否查询到最后一条
}

function foundA(i) {
    if (i === 'a')
        return foundB;
    else
        return foundA;
}

function foundB(i) {
    if (i === 'b')
        return foundC;
    else
        return foundA(i);
}

function foundC(i) {
    if (i === 'c')
        return foundD;
    else
        return foundA(i);
}

function foundD(i) {
    if (i === 'd')
        return foundE;
    else
        return foundA(i);
}

function foundE(i) {
    if (i === 'e')
        return end;
    else
        return foundA(i);
}

function end(i) {
    return end;
}

console.log(foundString('ababcde'));
