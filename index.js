// Code your solution here
let findMatching = function(drivers, string){
    let match = drivers.filter(function(driver){
        return driver.toLowerCase() == string.toLowerCase()
    })
    return match
}

let fuzzyMatch = function(drivers, string){
    let match = drivers.filter(function(driver){
        // console.log(string.length)
        return driver.charAt(0) == string.charAt(0)
    })
    return match
}

let matchName = function(drivers, string){
    let match = drivers.filter(driver => driver.name == string)
    return match
}