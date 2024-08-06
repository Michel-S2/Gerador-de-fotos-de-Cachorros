document.querySelector('.container button').addEventListener('click', () => {
    esconderImagem();
    mostrarMensagem('Carregando...')
    gerarImagem();
    
})

async function gerarImagem() {
    let apiResponse = await fetch(`https://dog.ceo/api/breeds/image/random`);
    let json = await apiResponse.json();
    renderizarImagem(json.message);
} 

async function renderizarImagem(imagem) {
    let img = document.querySelector('.cachorroImage')

    mostrarMensagem('');
    mostrarImagem();
    img.innerHTML = `
        <img src="${imagem}" alt="cachorro">
    `;
    
}

function mostrarMensagem(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}

function esconderImagem() {
    document.querySelector('.cachorroImage').style.display = 'none';
}

function mostrarImagem() {
    document.querySelector('.cachorroImage').style.display = 'block';
}