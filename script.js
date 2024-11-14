const multiple3 = "Fizz";
const multiple5 = "Buzz";

const num1 = 3;
const num2 = 5;


for(let i=1; i<=100; i++){

  if((!(i%num1)) && (!(i%num2))){
    console.log(multiple3 + multiple5)
  } else if(!(i%num1)){
    console.log(multiple3)
  } else if(!(i%num2)){
    console.log(multiple5)
  } else {
    console.log(i)
  }
}