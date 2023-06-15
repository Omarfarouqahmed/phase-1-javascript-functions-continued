// code your solution here
function saturdayFun(activity="roller-skate"){
    //console.log(`This Saturday, I want to ${activity}!`);
    return (`This Saturday, I want to ${activity}!`);
}
function mondayWork(work="go to the office"){
    return (`This Monday, I will ${work}.`);
}
let wrapAdjective = function (style = "*"){
    return function (adjective = "special"){
    return (`You are ${style}${adjective}${style}!`)
    }

}