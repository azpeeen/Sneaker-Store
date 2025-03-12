document.querySelector('.busca').addEventListener('keyup', function() {
    const query = this.value.toLowerCase();
    const produtos = document.querySelectorAll('.produto');
    const banner = document.querySelector('.bannerjordan');
    const footer = document.querySelector('.footer');

    if (query) {
        if (banner) {
            banner.style.display = 'none';
        }

        if (footer) {
            footer.style.display = 'none';
        }
    } else {

        if (banner) {
            banner.style.display = '';
        }

        if (footer) {
            footer.style.display = '';
        }
    }

    produtos.forEach(function(produto) {
        const descricao = produto.querySelector('.descricao') ? produto.querySelector('.descricao').textContent.toLowerCase() : '';
        const preco = produto.querySelector('.preco') ? produto.querySelector('.preco').textContent.toLowerCase() : '';


        if (descricao.includes(query) || preco.includes(query)) {
            produto.style.display = '';
        } else {
            produto.style.display = 'none';
        }
    });
});
