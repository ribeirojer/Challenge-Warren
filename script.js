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
        tr.setAttribute("id", data[i].id);
        tr.setAttribute("onClick", "exibeModal(id)");
        tr.classList.add("hover");
        if(i%2){
            tr.classList.add("linhacinza");
        }
        corpoTabela.appendChild(tr);
    }
    
});

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function criaModal(data){
    
    const modalTitle = document.getElementById("modal-title");
    modalTitle.innerText = data.title;
    
    var modal1 = document.getElementById("modal-1");
    var modal2 = document.getElementById("modal-2");
    var modal3 = document.getElementById("modal-3");
    var modal4 = document.getElementById("modal-4");
    var modal5 = document.getElementById("modal-5");

    if(data.status==="created"){
        modal1.setAttribute('data-content', `${data.status}`);
        modal1.classList.add('corDeFundoEscura');
        modal2.setAttribute('style', `margin: 0 -2px`);
        modal4.setAttribute('style', `margin: 0 -2px`);
    }else if (data.status==="processing"){
        modal3.setAttribute('data-content', `${data.status}`);
        modal1.classList.add('corDeFundoEscura');
        modal2.classList.add('corDeFundoEscura');
        modal3.classList.add('corDeFundoEscura');
        modal4.setAttribute('style', `margin: 0 -2px`);
    } else {
        modal5.setAttribute('data-content', `${data.status}`);
        modal1.classList.add('corDeFundoEscura');
        modal2.classList.add('corDeFundoEscura');
        modal3.classList.add('corDeFundoEscura');
        modal4.classList.add('corDeFundoEscura');
        modal5.classList.add('corDeFundoEscura');
    }

    var modalValor = document.getElementById("modal-valor");
    modalValor.innerText = data.amount;
    
    var modalDe = document.getElementById("modal-de");
    modalDe.innerText = data.from;

    var modalPara = document.getElementById("modal-para");
    modalPara.innerText = data.to;

    console.log(data);
}
function limpaModal() {
    for(let i = 1; i<6; i++){
        var modala = document.getElementById(`modal-${i}`);
        modala.setAttribute('data-content', ``);
        modala.classList.remove('corDeFundoEscura');
        modala.removeAttribute('style');
    }
}
function exibeModal(id){
    myPromise.then((data) => {
        var modalContent = document.getElementById("modal-content");
        for(let i = 0; i<data.length; i++){
            if(data[i].id===id){
                criaModal(data[i]);
            }
        }
    });
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
    limpaModal();
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    limpaModal();
  }
}