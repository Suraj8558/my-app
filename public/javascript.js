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




