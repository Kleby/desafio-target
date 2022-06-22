const btn = document.querySelector("#btn-fibonnaci");
const h2 = document.querySelector("#mostrar-numero");

btn.addEventListener("click", enviar);

function enviar(){
    let valor = document.getElementById("in-fibonnaci").value;
    valor = parseInt(valor);
    if (valor < 0) {
        alert("Informe um valor positivo");
        location.reload();
        return;
    }
    seqFibonnaci(valor);    
}

function seqFibonnaci( numero ){    
    for(x=0, y=1 ;((x <= numero*numero) || (y <= numero*numero)); x+=y, y+=x){
        if ( (numero >= x) || (numero >= y))	{            
			if ((numero == x) || (numero == y)) {
                return h2.innerHTML = `O número ${numero} pertence à sequência de Fibonnaci`;			
		    }
	    }
		else{
            return h2.innerHTML = `O número ${numero}  NÃO pertence à sequência de Fibonnaci`;			

	    	 
		}
    }
}
