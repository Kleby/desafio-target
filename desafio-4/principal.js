const faturamentoMensal = [
    {
        estado: 'SP',
        valor: 67836.43
    },
    {
        estado: 'RJ',
        valor: 36678.66
    },
    {
        estado: 'MG',
        valor: 29229.88
    },
    {
        estado: 'ES',
        valor: 27165.48
    },
    {
        estado:'Outros',
        valor: 19849.53
    }
];

function main(objFatura){
    tabelaFaturamentoMensal(objFatura);
    criaTabelaCompleta(objFatura);
}

function calcvalores(objFatura){
    const valores = objFatura.map(item =>{        
        return item.valor
    });
    return valores;

}
function valorTotal (objFatura){
    let total = 0;
    const valores  = calcvalores(objFatura)
    
    for (let valor in valores){
        total+=valores[valor];
    }
    return total;
}

function percentualMensal(objFatura){
    const valores = calcvalores(objFatura);
    const total = valorTotal(objFatura);
    let perValores = [];  
    let calcPercentagem; 
    const estados = objFatura.map(item => {
        return item.estado;
    });

    for(let valor in valores){
        calcPercentagem = valores[valor]*100/total;
        perValores.push({'estado': estados[valor], 
                        'percentagem' :calcPercentagem
    });
    }
    return perValores;
}

function criaTabelaCompleta(objFatura){    
    const tabela = document.createElement('table');
    const tbody = document.createElement('tbody'); 
    const thead = document.createElement('thead');
    let tr= document.createElement('tr');
    const thEstado = document.createElement('th');
    const thPercentagem = document.createElement('th');
    const listEstado = percentualMensal(objFatura).map(item => { return item.estado});
    const listPercentagem = percentualMensal(objFatura).map(item => { return item.percentagem});
    const thTotal = document.createElement('th');
    const tdTotal = document.createElement('td');
    let total = 0;

    thead.innerHTML='<h3>Porcentagem do faturamento mensal por Estados</h3>'
    tbody.appendChild(thead);
    thEstado.innerHTML='Estado';
    tr.appendChild(thEstado);

    thPercentagem.innerHTML = "Porcentagem"
    tr.appendChild(thPercentagem);

    thTotal.innerHTML = "Total"
    tbody.appendChild(tr);

    for(let i = 0 ; i < listEstado.length ; i++){
        tr = document.createElement('tr');
        let tdEstado= document.createElement('td');
        let tdPercentagem= document.createElement('td');
        
        total+=listPercentagem[i];
        console.log(listPercentagem[i])
        tdEstado.innerHTML = listEstado[i];
        tdPercentagem.innerHTML = listPercentagem[i].toFixed(2)+"%";

        tr.appendChild(tdEstado);
        tr.appendChild(tdPercentagem)
        tbody.appendChild(tr);
    }
    tr=document.createElement('tr');
    tdTotal.innerHTML = `${total}%`
    tr.appendChild(thTotal);
    tr.appendChild(tdTotal);
    tbody.appendChild(tr)
    tabela.appendChild(tbody)
    document.body.appendChild(tabela);
}

function tabelaFaturamentoMensal(objFatura){
    const listEstado = objFatura.map(item => { return item.estado; });
    const listFaturamento = objFatura.map(item => { return item.valor; });
    let total = 0;
    const tabela = document.createElement('table');
    const tbody = document.createElement('tbody'); 
    const thead = document.createElement('thead');
    let tr= document.createElement('tr');
    const thEstado = document.createElement('th');
    const thFaturamento = document.createElement('th');
    const thTotal = document.createElement('th');
    const tdTotal = document.createElement('td');

    thead.innerHTML='<h3>valor do faturamento mensal por Estados</h3>'
    tbody.appendChild(thead);
    thEstado.innerHTML='Estado';
    tr.appendChild(thEstado);

    thFaturamento.innerHTML = "Faturamento"
    tr.appendChild(thFaturamento);

    thTotal.innerHTML = "Total"
    tbody.appendChild(tr);

    for(let i = 0 ; i < listEstado.length ; i++){
        tr = document.createElement('tr');
        let tdEstado= document.createElement('td');
        let tdFaturamento = document.createElement('td');
        total+=listFaturamento[i];
        tdEstado.innerHTML = listEstado[i];
        tdFaturamento.innerHTML = `R$ ${listFaturamento[i]}`;

        tr.appendChild(tdEstado);
        tr.appendChild(tdFaturamento)
        tbody.appendChild(tr);
    }
    tr=document.createElement('tr');
    tr.setAttribute('class', 'trTotal')
    tdTotal.innerHTML = `R$ ${total}`
    tr.appendChild(thTotal);
    tr.appendChild(tdTotal);
    tbody.appendChild(tr)
    tabela.appendChild(tbody);
    document.body.appendChild(tabela);
}


main(faturamentoMensal);