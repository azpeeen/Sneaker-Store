document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const produto = urlParams.get('produto');
    const nomeProduto = document.getElementById('nome-produto');
    const imagemProduto = document.getElementById('imagem-produto');
    const descricaoProduto = document.getElementById('descricao-produto');
    const precoProduto = document.getElementById('preco-produto');
    const botaoComprar = document.getElementById('comprar');

    const produtos = {
        dunk: {
            imagem: 'nikedunk.png.png',
            descricao: 'NIKE DUNK LOW PRO SB X PARRA ABSTRACT ART',
            preco: 'R$449,90'
        },
        nikeairforce: {
            imagem: 'airforce.png',
            descricao: 'NIKE AIR FORCE CLÁSSICO',
            preco: 'R$638,40'
        },
        airmax: {
            imagem: 'maxtriple.png.png',
            descricao: 'AIR MAX TN TRIPLE BLACK',
            preco: 'R$453,80'
        },
        jordan4: {
            imagem: 'jordan4.png',
            descricao: 'AIR JORDAN 4 RETRO',
            preco: 'R$1799,99'
        },
        nikejujutsu: {
            imagem: 'nikejujutsu.png',
            descricao: 'NIKE DUNK JUJUTSU KAISEN EDITION',
            preco: 'R$899,90'
        },
        jordan3: {
            imagem: 'jordan3.png',
            descricao: 'AIR JORDAN 3 DARK IRIS',
            preco: 'R$1900,00'
        }
    };

    if (produto && produtos[produto]) {
        const { imagem, descricao, preco } = produtos[produto];
        nomeProduto.textContent = descricao;
        imagemProduto.src = imagem;
        descricaoProduto.textContent = descricao;
        precoProduto.textContent = `Preço: ${preco}`;

        botaoComprar.addEventListener('click', function () {
            window.location.href = `carrinho.html?produto=${produto}`;
        });
    } else {
        nomeProduto.textContent = 'Produto não encontrado';
        imagemProduto.src = '';
        descricaoProduto.textContent = '';
        precoProduto.textContent = '';
    }
});
