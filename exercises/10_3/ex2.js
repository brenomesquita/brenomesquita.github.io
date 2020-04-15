let arr = []
let random = () => Math.floor(Math.random()*50);
for (let i = 0 ; i <= 10; i++){
  arr.push(random()**2)
}
let red = () => arr.reduce((e,i)=>e+i,0)
let chamar = red()
let promisse = new Promise((resolve,reject) => chamar<8000 ? resolve('ok') : reject())

promisse.then((suc) => console.log(`${[2,3,5,10].map(n=>Math.floor(chamar/n))} ${suc}`))
        .then(()=> console.log(chamar))
        .catch(()=>console.log(`É mais de oito mil! Essa promise deve estar quebrada!`))


