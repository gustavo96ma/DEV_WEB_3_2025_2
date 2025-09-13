console.log('Hello World!');
console.log('asdasd');

let botaoMudarCor = document.getElementById('botao');
console.log(botaoMudarCor);

let titulo = document.getElementById('titulo');
console.log(titulo);

botaoMudarCor.addEventListener('click', () => {

    console.log(titulo.style.color);

    if (titulo.style.color == '') {
        titulo.style.color = 'red';
        titulo.textContent = 'Agora é Vermelho';
        return;
    }

    if (titulo.style.color == 'red') {
        titulo.style.color = 'blueviolet';
        titulo.textContent = 'Agora é Roxo';
        return;
    }

    titulo.style.color = 'red';
    titulo.textContent = 'Agora é Vermelho';


});