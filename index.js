// code your solution here
const record = [
    {year: 2015, result: "W"},
    {year: 2014, result: "N/A"},
    {year: 2013, result: "L"}
]


function superbowlWin(array) {
    if(array.find(arr => arr.result === "W")){
        return array.find(arr => arr.result === "W").year;
    }
    else{
        return undefined
    }
    
}

console.log(array.find(arr => arr.result === "W"));
