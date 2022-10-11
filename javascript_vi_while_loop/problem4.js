let i=1;
let n=100;
let sum=0;

while(i<=n)
  {
    if(i%2==0){
      sum+=i;
      
    }
    i++;
  }

let average = sum/(n/2);
console.log(average);
