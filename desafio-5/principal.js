const strOriginal = document.querySelector('#string');
document.querySelector('#btn').onclick = ()=>
    inverterString();

function inverterString(){
    const originalValue = strOriginal.value
    let aux=[]; //array Auxiliar para pegar os caracteres inversos das strings
    const strResultado = document.querySelector("#resultado");
    
    for(let i = originalValue.length-1; i >= 0 ; i--){
        if( i === originalValue.length-1){
            //pega a primeira letra da string inversa e coloca-la em maiúscula
            aux.push(originalValue[i].toUpperCase());
        }
        else if(i===0){
            //aqui já é colocar o último caractere inerso e minúscula
            aux.push(originalValue[i].toLowerCase());
        }
        else aux.push(originalValue[i]);
    }
    return strResultado.innerHTML = aux.join('');  
}
