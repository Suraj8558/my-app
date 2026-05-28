function abc() {
 for (var i = 1; i < 5 ; i++ ) {
  function abcd (i) {
    setTimeout(function () {
      console.log(i);
      
    }, i * 1000);
  }
  abcd(i)
 }
}
// abc()

// FIRST CLASS FUNCTION 
var test = function abac (xyz) {
  return function dfsfsdf (){
    console.log(xyz ," suraj"
); 
  }
}
test("hello")();

function count () {
  console.log("count"); 
}

function sun(count) {
  setTimeout(function () {
    console.log("THIS IS PARNET");
    count()
  }, 2000)
}

sun(count)

// Higher order funcction

const arrData = [5,6,10,5,6];

function area (arr) {
  const result = [];
   for(let i= 0; i <= arr.length - 1; i++) {
    result.push(Math.PI * arr[i] *  arr[i])
   }
   return result;
   
}

console.log("Area of the Data", area(arrData))


function Area (arr) {
  if(!arr) return ;
  return Math.PI * arr * arr;
}



function CalculateArea (arr , CalculateArea) {
  const result = [];
   for(let i= 0; i <= arr.length - 1; i++) {
    result.push(CalculateArea(arr[i]))
   }
   return result;
   
}
console.log("Area of the CalculateArea", CalculateArea(arrData, Area))

console.log("Area of the arrData", arrData.map(Area))

Array.prototype.customMap = function (callback) {
  if(!callback) return 
  const result = [];
   for(let i= 0; i <= this.length - 1; i++) {
    result.push(callback(this[i]))
   }
   return result;
   
}




// reducers  and filter


const products = [
  { id: 1, name: "Wireless Mouse", category: "Electronics", price: 29, inStock: true },
  { id: 2, name: "Yoga Mat", category: "Fitness", price: 45.00, inStock: false },
  { id: 3, name: "Mechanical Keyboard", category: "Electronics", price: 29, inStock: true },
  { id: 4, name: "Running Shoes", category: "Fitness", price: 120.00, inStock: true },
  { id: 5, name: "Coffee Maker", category: "Kitchen", price: 50, inStock: true },
  { id: 6, name: "Blender", category: "Kitchen", price: 50, inStock: false },
  { id: 7, name: "Running Shoes", category: "Fitness", price: 600.00, inStock: true },

];

const groupedByCategory = products.reduce((acc, product) => {
  const category = product.category;
  
  // If the category doesn't exist yet in our object, initialize it as an empty array
  if (!acc[category]) {
    acc[category] = [];
  }
  
  // Push the product into its respective category array
  acc[category].push(product);
  
  return acc;
}, {}); // Starting value is an empty object

console.log("groupedByCategory", groupedByCategory);



const highestprice = products.reduce((acc, product) => {
  if (product.price >  acc.price ) {
   return product.price
  }
  return acc 

}, products[0])

console.log("highestprice", highestprice);


// const result = products.filter((item) => {
//   return item.category  == "Kitchen" ;
// }).map((x) => (x.name))

// console.log("result", resultyarn dev