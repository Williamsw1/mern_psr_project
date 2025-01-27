function varExample() {
     console.log(a); // undefined (hoisted but not initialized)
     var a = 10;
     console.log(a); // 10
  
     if (true) {
       var a = 20; // same variable as the outer one
       console.log(a); // 20
     }
     console.log(a); // 20 (no block scope)
        a=40;
        console.log(a);
   }
  
   varExample();

/*
function letExample() {
    // console.log(b); // ReferenceError: Cannot access 'b' before initialization
    let b = 10;
    console.log(b); // 10
  
    if (true) {
      let b = 20; // block-scoped
      console.log(b); // 20
    }
    console.log(b); // 10 (outer `b` is unaffected)
    b=50;
    console.log("outer: "+b); // 10 (outer `b` is unaffected)
  }
  
  letExample();
  */
  
/*
function constExample() {
    // console.log(c); // ReferenceError: Cannot access 'c' before initialization
    const c = 10;
    console.log(c); // 10
  
    if (true) {
      const c = 20; // block-scoped
      console.log(c); // 20
    }
    console.log(c); // 10 (outer `c` is unaffected)
    
    // c = 30; // TypeError: Assignment to constant variable
  }
  
  constExample();
  */