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




// 

