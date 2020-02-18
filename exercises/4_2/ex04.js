let x=3
let a=""
let ar=[] 
for (let n=0; n<=x; n+=1) {
    ar[n]= " "
}    
for  (let n=x; n>=0; n--){

   ar[n]+="*"  
  console.log(ar.join(""))
}
