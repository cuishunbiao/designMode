/**
 * 避免多重条件选择语句
 */
const S = (salary) =>{
    return salary * 4;
}
const A = (salary) =>{
    return salary * 3;
}
const B = (salary) =>{
    return salary * 2;
}

const calculateBonus = (fun, salary)=>{
    return fun(salary)
}

calculateBonus(S,100)



