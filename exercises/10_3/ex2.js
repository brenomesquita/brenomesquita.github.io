let arr = []
let random = () => Math.floor(Math.random()*50);
for (let i = 0 ; i <= 10; i++){
  arr.push(random()**2)
}
let red = () => arr.reduce((e,i)=>e+i,0)
let chamar = red()
let promisse = new Promise((resolve,reject) => chamar<8000 ? resolve('ok') : reject())

promisse.then((suc) => console.log(`${chamar} ${suc}`)).catch(()=>console.log(`Deu ruim`))