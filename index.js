// Code your solution here

//This function takes an array of drivers and a string as arguments,
// and returns the matching list of drivers.
// The function should be case insensitive.
function findMatching(drivers, string){
    let matches =  drivers.filter(driver => 
        { return driver.toUpperCase() == string.toUpperCase()})
    return matches
}

function fuzzyMatch(drivers, string){
    let matches = drivers.filter( driver => 
        {if( driver.substring(0, string.length) == string){
            return driver
        }})  
        return matches
        
    }


    // In this function, each element of the drivers
    // array is a JavaScript object that has a property 
    // of name. The function should return each element 
    // whose name property matches the provided string argument.

function matchName(drivers, string){
    let matches = drivers.filter( driver => {
        if(driver.name.substring(0, string.length) == string) {
            return driver
        }
    })
    return matches
}