// Code your solution here
function findMatching(drivers,string){
    return drivers.filter(d=> 
        d.toLowerCase()===string.toLowerCase()
    )
}


function fuzzyMatch(drivers,string){
    return drivers.filter(d=> d.charAt(0)=== string.charAt(0)
    )
}

function matchName(drivers,string){
    for(let i=0;i<drivers.length;i++){
return drivers.filter(d=> d.name===string)
    }
    
}