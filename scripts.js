let caixa = document.querySelector('input');
let lista = document.querySelector('ul');

function inserir(){
    lista.innerHTML += `<li>${caixa.value}</li>`;
    caixa.value = '';
}