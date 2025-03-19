//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// app.js

const amigos = [];

function adicionarNome() {
    const nomeInput = document.getElementById('nomeAmigo');
    const nome = nomeInput.value.trim();

    if (nome === '') {
        alert('Por favor, digite um nome válido!');
        return;
    }

    amigos.push(nome);
    atualizarLista();
    nomeInput.value = '';
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo) => {
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista está vazia! Adicione pelo menos um amigo.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceSorteado];

    document.getElementById('resultado').textContent = `O amigo sorteado foi: ${nomeSorteado}`;
}
