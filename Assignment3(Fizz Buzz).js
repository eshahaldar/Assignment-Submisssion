for(i=1;i<=100;i++){
  x=i/15
  y=i/3
  z=i/5
  if(Number.isInteger(x)){        
    console.log("FizzBuzz")
  } 
  else if(Number.isInteger(y)){   
    console.log("Fizz")
  } 
  else if(Number.isInteger(z)){  
    console.log("Buzz")
  } 
  else{                          
    console.log(i)
  }
}