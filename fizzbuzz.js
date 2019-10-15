var num = 100 

const fizzbuzz = (n) => {
  switch (true) {
    case (n % 15 == 0):
      console.log(n + " FizzBuzz");
      break;
    case (n % 5 == 0):
      console.log(n + " Buzz");
      break;
    case (n % 3 == 0):
      console.log(n + " Fizz");
      break;
    default: 
      console.log(n);
      break
  }
}

// while (num >= 0) {
//   fizzbuzz(num);
//   num--;
// }


for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i);