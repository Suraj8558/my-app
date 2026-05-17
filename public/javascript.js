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