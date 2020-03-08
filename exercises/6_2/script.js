window.onload=function(){
    let estado= document.getElementById("estado")
    let tdsEstados= ["Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará (CE)",
    "Distrito Federal (DF)",
    "Espírito Santo (ES)",
    "Goiás (GO)",
    "Maranhão (MA)",
    "Mato Grosso (MT)",
    "Mato Grosso do Sul (MS)",
    "Minas Gerais (MG)",
    "Pará (PA)" ]
    for(let z in tdsEstados){
        let cria=document.createElement("option")
        cria.classList.add("cria")
        cria.innerText= tdsEstados[z]
        estado.appendChild(cria)
    }

    //document.getElementById('data').DatePickerX.init();
    //window.DatePickerX.setDefaults( Object yyyy/mm/dd )

    //let ev=document.getElementById("resultado")
    //let get= document.getElementById("get").value
    //function stopDefAction() {
    //    ev.preventDefault();
    //    let dados= document.getElementById("dados")
    //    dados.innerText=get
    //}
    //ev.addEventListener("click", stopDefAction)
}