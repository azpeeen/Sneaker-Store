document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const produto = urlParams.get('produto');
    const itemCarrinho = document.getElementById('item-carrinho');

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
            descricao: ' AIR JORDAN 3 DARK IRIS',
            preco: 'R$1900,00'
        }
    };

    if (produto && produtos[produto]) {
        const { imagem, descricao, preco } = produtos[produto];
        itemCarrinho.innerHTML = `
            <figure>
                <img src="${imagem}" alt="${descricao}" width="200px">
                <figcaption>
                    <p>${descricao}</p>
                    <p>Preço: ${preco}</p>
                </figcaption>
            </figure>
        `;
    } else {
        itemCarrinho.innerHTML = '<p>Nenhum item no carrinho.</p>';
    }
});
