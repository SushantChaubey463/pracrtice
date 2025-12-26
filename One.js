// for(let i=0;i<=10;i++){
//     console.log(i);
// }

// for(i=0;i<=100;i+=2){
//     console.log(i);  
// }
// let avg=0;
// let sum=0;
// for(i=1;i<=5;i++){
//     sum=sum+i
//     avg=sum/i
// }
// console.log(sum);
// console.log(avg);



// for(let i=1;i<=10;i++)
// for(let j=1;j<=10;j++){
//     console.log(`${i}*${j}=${j*i}`);
    
// }    


// let pass=[];
// let arr =[1,-2,-3,5,-9];
// for(let i=0;i<arr.length;i++){
//  if(pass=arr[i]>0){

//     console.log(arr[i]);
//  }  
//  } 



// let arr=[1,2,3,65,9,611]
// let max=arr[0];
// for(i=0;i<arr.length;i++){
//  if (arr[i]>max) {
//     max=arr[i]
//  }
// }
// console.log(max);

// let num=[1,6,3,69,9]  
// let max1=Math.max(...num);
  
//   console.log(max1);

// let a=0;
// let b=1;
// for(let i=0;i<=10;i++){
//  let next=a+b;
//  a=b;
//  b=next;
//  console.log(a);    
// }


// let fib=[0,1];
// for(i=2;i<=10;i++){
//     fib[i]=fib[i-1]+fib[i-2];
//     console.log(fib);    
// }

//24-sep-2025
//Q1///////////////////////////////////////
// function compress(str) {
//     let add="";
//     let count=1;
//     for(let i=0;i<str.length;i++){
//         if (str[i]===str[i+1]) {
//             count++;
//         }else{
//             add=add+str[i]+count;
//             count=1;
//         }
//     }
// return add   
// }
// console.log(compress("aaabbc"));



//etc   
//   let a = "hello world";
//   for( b of a){
//     console.log(b);
//   }


//Q2////////////////////////////////////
// const num={a:1,b:2,c:3}
// let sum=0;
// for(let nee in num){
//     sum=sum+num[nee];
// }
// console.log(sum);

//Q3/////////////////////////////////////

function otoa(obj) {
 let output=[];
 for(let key in obj){
    output.push(key+':'+ obj[key] )

 }   
    return output
}
const shu={name: "Ram",
    city:"delhi"
}
console.log(otoa(shu));




//Q4///////////////////////////////////

function newkey(obj) {
    let output={}
    for(key in obj){
    output["new_"+key]=obj[key];

    }
return output
    
}
const data ={a:1,b:2,c:3}

console.log(newkey(data));


//Q5///////////////////////////////////

function max(obj) {
    let max=1
    let maxkey=null
    
    for(let key in obj)
        if (obj[key]>max) {
            max=obj[key]
            maxkey=key;
        }
        return maxkey
}
const mma={ alice:80,bob:90,charlie:85};
console.log(max(mma));
