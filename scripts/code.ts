function main(start: number, end: number) {
  for (let i = start; i <= end; i++) {
    console.log("Count", i);
  }
}

// main(1, 100);


// Print even numbers 1 to 50
function Even(startNumber:number, endNumber: number) {
  for(let i =  startNumber; i <= endNumber; i++) {
    if (i % 2 == 0 ) {
      console.log("Even Number is - ", i)
    }
  }
}
// Even(1, 50)

// Print odd numbers 1 to 50
const getOddNumber= ((startNumber: number , endNumber: number ) => {
  for (let i =  startNumber; i <=  endNumber; i ++ ) {
    if (i % 2 != 0) {
      console.log('Odd number', i)
    }
  }
})
// getOddNumber(1, 20)

// Calculate sum of first 10 natural numbers
const naturalNumber= [1,2,3,4,5,6,7,8,9,10];
const total =  naturalNumber.reduce((acc, curr) => acc + curr);
// console.log('total', total) // 55

// var oddTotal =  0
// for(var i = 1 ; i <= 10 ; i++ ) {
//  console.log(' oddTotal',  oddTotal += i)
// }
// console.log("OddTotal", oddTotal)


const sumOfNaturalNumber = ((No: number) => {
    let sum = 0 ;
    for(let i = 1; i <= No; i ++ ) {
      sum += i;
    }
    console.log(`The Sum of First ${No} Natural Number is : - `, sum )
})

// sumOfNaturalNumber(10)




 
