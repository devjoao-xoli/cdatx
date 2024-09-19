const produtos = {
    agronomicos: [
        { id: 'product1', nome: 'Adubo Orgânico', imagem: 'https://via.placeholder.com/150' },
        { id: 'product2', nome: 'Composto Natural', imagem: 'https://via.placeholder.com/150' },
        { id: 'product9', nome: 'Calcário', imagem: 'https://via.placeholder.com/150' },
        { id: 'product10', nome: 'Semente de Milho', imagem: 'https://via.placeholder.com/150' },  // Novo produto
        { id: 'product11', nome: 'Herbicida', imagem: 'https://via.placeholder.com/150' }          // Outro novo produto
    ],
    pecuarios: [
        { id: 'product3', nome: 'Ração Bovina', imagem: 'https://via.placeholder.com/150' },
        { id: 'product4', nome: 'Sal Mineral', imagem: 'https://via.placeholder.com/150' }
    ],
    piscina: [
        { id: 'product5', nome: 'Cloro', imagem: 'https://via.placeholder.com/150' },
        { id: 'product6', nome: 'Filtro de Piscina', imagem: 'https://via.placeholder.com/150' }
    ],
    ferramentas: [
        { id: 'product7', nome: 'Enxada', imagem: 'https://via.placeholder.com/150' },
        { id: 'product8', nome: 'Foice', imagem: 'https://via.placeholder.com/150' }
    ]
 };
 
 // Função para renderizar produtos dinamicamente
 function renderizarProdutos(categoria) {
    const container = document.getElementById(`${categoria}-products`);
    produtos[categoria].forEach(produto => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h4>${produto.nome}</h4>
            <input type="number" placeholder="Quantidade" min="1" id="${produto.id}">
        `;
        container.appendChild(productItem);
    });
}

// Renderizar todos os produtos ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos('agronomicos');
    renderizarProdutos('pecuarios');
    renderizarProdutos('piscina');
    renderizarProdutos('ferramentas');
});