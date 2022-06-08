const url = "https://warren-transactions-api.herokuapp.com/api/transactions";

const corpoTabela = document.querySelector("#corpo_tabela");

async function getDados() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const myPromise = getDados();

myPromise.then((data) => {
    
    for(let i = 0; i < data.length; i++){
        const tr = document.createElement("tr");
        const tdTitulo = document.createElement("td");
        const tdDescricao = document.createElement("td");
        const tdStatus = document.createElement("td");
        const tdValor = document.createElement("td");

        tdTitulo.innerText = data[i].title
        tdDescricao.innerText = data[i].description
        tdStatus.innerText = data[i].status
        tdValor.innerText = data[i].amount

        tr.appendChild(tdTitulo);
        tr.appendChild(tdDescricao);
        tr.appendChild(tdStatus);
        tr.appendChild(tdValor);
        tr.setAttribute("onClick", "exibeModal()");
        tr.classList.add("hover");
        if(i%2){
            tr.classList.add("linhacinza");
        }
        corpoTabela.appendChild(tr);
    }
    
});

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function exibeModal(){
    modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}