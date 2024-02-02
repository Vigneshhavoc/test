console.log("vignesh")
var a =1
var b=5
console.log("a+b")
//let day3 =`what is array
//it Store multi value in one variable
//it  starting from 0  index
//it store mutliple data types`
//console.log(day3)
let number  = [1, 2, 3, 4, 5]
// find all value 
console.log (number)

// find one value
console.log (number[1])


//finding last value.
let agw  = [1, 2, 3, 4, 5,7, 8, 9, 10, 11, 12]
console.log (agw.length)

// find last index
 console.log(agw.length -1)

 // change the value
 agw [0] = 25
console.log (agw)
// inset the add
const ages  = [1, 2, 3, 4, 5,7, 8, 9, 10, 11, 12]
ages.push (50)
console.log(ages)

// remove the array
const as  = [1, 2, 3, 4, 5,7, 8, 9, 10, 11, 12]
as.pop ();
console.log(as)
as.push(100)  
console.log(as)
as.unshift(95)// add starting in array
console.log(as)
as.shift() // delete starting vales
console.log(as)
as.splice(3,0,15)
console.log(as)
let ab = [1, 2, 3, 4, 5]
ab.splice(4,0,11)
console.log (ab)