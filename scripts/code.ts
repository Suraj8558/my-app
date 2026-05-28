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


const products = [
  { id: 1, name: "Wireless Mouse", category: "Electronics", price: 29, inStock: true },
  { id: 2, name: "Yoga Mat", category: "Fitness", price: 45.00, inStock: false },
  { id: 3, name: "Mechanical Keyboard", category: "Electronics", price: 29, inStock: true },
  { id: 4, name: "Running Shoes", category: "Fitness", price: 120.00, inStock: true },
  { id: 5, name: "Coffee Maker", category: "Kitchen", price: 50, inStock: true },
  { id: 6, name: "Blender", category: "Kitchen", price: 50, inStock: false },
  { id: 7, name: "Running Shoes", category: "Fitness", price: 600.00, inStock: true },

];


const isStock = products.filter((item) => item.price >= 50)

// console.log("isStock", isStock);
const groupedByCategory = products.reduce((acc: any, product) => {
  const category = product.category;
  
  // If the category doesn't exist yet in our object, initialize it as an empty array
  if (!acc[category]) {
    acc[category] = [];
  }
  
  // Push the product into its respective category array
  acc[category].push(product);
  
  return acc;
},{}); 
console.log("groupedByCategory", groupedByCategory);






 
