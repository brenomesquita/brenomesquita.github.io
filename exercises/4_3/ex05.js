let palavra= "arara"
function string(){
    for(let i = palavra.length;; i--){
        if( palavra[i] == palavra.length-i ){
            return true;
        }else{
            return false;
        }
    }
}
console.log(string(palavra))