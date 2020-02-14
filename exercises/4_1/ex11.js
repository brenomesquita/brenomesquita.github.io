let salario=20000
if(salario<=1.556,94){
    inss=salario*8/100
}else if(salario>=1.556,94 && salario<=2.594,92){
    inss=salario*9/100
}else if(salario>=2.594,93 && salario<=5.189,82){
    inss=salario*11/100
}else{
    inss=570,88
}
let salarioDedu=salario-inss
if(salarioDedu>=1.903,98){
    ir= inss
}else if(salarioDedu<=1.903,98 && salarioDedu<=2.826,65){
    ir=(salarioDedu*7.5/100)- 142,80
}else if(salarioDedu<=2.826,66 && salarioDedu<=3.751,05){
    ir=(salarioDedu*15/100)- 354,80
}else if(salarioDedu<=3.751,06 && salarioDedu<=4.664,68){
    ir=(salarioDedu*22.5/100)- 636,13
}else{
    ir=(salarioDedu*27.5/100)- 869,36
}
let result=salarioDedu-ir
console.log(result)