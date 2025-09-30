const lista = document.querySelector('#minha-lista');
const botaoAdd = document.getElementById('adicionar');
const botaoRemove = document.getElementById('remover');


botaoAdd.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.classList.add('text-gray-500');
    newItem.textContent = `Item ${lista.children.length + 1}`;
    lista.appendChild(newItem);
    verificarListaVazia()

});

botaoRemove.addEventListener('click', () => {
    const ultimoItem = lista.lastElementChild;
    if (ultimoItem) {
        lista.removeChild(ultimoItem)
    }
    verificarListaVazia()
});

function verificarListaVazia(){
    if(lista.children.length ===0){
        msgVazia.classList.remove('hidden')
    }else{
        msgVazia.classList.add('hidden')
    }
}