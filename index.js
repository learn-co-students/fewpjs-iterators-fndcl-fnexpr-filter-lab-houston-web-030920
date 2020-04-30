// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const string = 'Susan'

const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

let findMatching = (ds, string) =>{
  return ds.filter(d => d.toLowerCase() === string.toLowerCase())
}

let fuzzyMatch = (ds, string) =>{
  return ds.filter(d => d.slice(0,string.length).toLowerCase() === string.toLowerCase())
}

let matchName = (drivers, string) =>{
  return drivers.filter(driver => driver.name === string)
}

// console.log(findMatching(drivers, string))
// console.log(fuzzyMatch(drivers, 'SA'))
console.log(matchName(drivers, 'Annette'))
