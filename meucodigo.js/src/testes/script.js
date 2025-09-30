const titulo = document.getElementById('titulo');
const mensagem = document.querySelector('.mensagem');
const botao = document.getElementById('botao');


botao.addEventListener('click', () => {
alert('E aí')
mensagem.classList.toggle('bg-yellow-200');
mensagem.classList.toggle('destaque');
titulo.textContent = 'DOM modificado!'


})