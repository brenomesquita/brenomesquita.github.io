let custo=5
let imposto= custo*20/100
let custoTotal= custo+imposto
let valor=10
let lucro= valor-custoTotal
let vendas= 1000*lucro
if (custo==0 || valor==0 || vendas==0){
    console.log("[ERRO]")
}else{
    console.log(vendas)
}