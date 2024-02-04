// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
]

// function superbowlWin(record) {
//     const winningYear = record.find(game => game.result === "W")
//     return winningYear ? winningYear.year : undefined;
// }

const superbowlWin = record => {
    const winningYear = record.find(game => game.result === "W")
    return winningYear ? winningYear.year : undefined;
}
/*
function superbowlWin(record) {
    const winningYear = record.find(game => game.result === "W")
    if (winningYear) {
        return winningYear.year
    }   else {
        return undefined
        }
    }

*/
    
//! does not work
// const superbowlWin = record.find.superbowlWIn((superbowlWin) => {
//     if (superbowlWin.result === "W") {
//         return superbowlWin
//     }
// })

//const superbowlWIn = (record) => {
//     return record.find((superbowl) => superbowl.result === "W")
// }
// const winningSuperbowl = superbowlWIn((record) => {
// if (winningSuperbowl) {
//     return (record.year);
// } else {
//     return undefined
// }
// })