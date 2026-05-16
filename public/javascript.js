// function abc () {
//   var a = 10;

//   function asd () {
//     console.log("a", a);
//   }
//   asd()
// }

// abc()

// let a = 10;
// console.log(a);

// const b = 100;
// console.log(b);

// {

//   var a = 10;
//   let ab = 20
//   const abc = 30
// }


// console.log("a", a);
// console.log("abc", abc);
// console.log("ab", ab);








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
abc()