// Array de itens do cardápio
const menuItems = [
  {
    name: "Margherita",
    category: "tradicional",
    price: "R$ 45,90",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca",
    description: "Molho de tomate, mussarela, manjericão fresco",
  },
  {
    name: "Pepperoni",
    category: "tradicional",
    price: "R$ 49,90",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e",
    description: "Molho de tomate, mussarela, pepperoni italiano",
  },
  {
    name: "Quattro Formaggi",
    category: "especial",
    price: "R$ 55,90",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    description: "Mussarela, gorgonzola, parmesão, catupiry",
  },
  {
    name: "Portuguesa",
    category: "tradicional",
    price: "R$ 52,90",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    description: "Molho de tomate, mussarela, presunto, ovos, cebola",
  },
  {
    name: "Veggie Supreme",
    category: "especial",
    price: "R$ 48,90",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e",
    description: "Molho de tomate, mussarela, champignon, pimentão, cebola",
  },
];

// Aguarda o DOM estar completamente carregado
document.addEventListener("DOMContentLoaded", () => {
  // Referências aos elementos do DOM
  const menuContainer = document.querySelector(".grid-cardapio");
  const filterButtons = document.querySelectorAll(".botao-categoria");
  const botaoMenuMobile = document.getElementById("botao-menu-mobile");
  const menuMobile = document.getElementById("menu-mobile");

  // Função para filtrar e mostrar os itens do menu
  function filterMenu(category) {
    if (!menuContainer) return;

    // Atualizar botões de filtro
    filterButtons.forEach((button) => {
      button.classList.remove("ativo");
      if (button.dataset.category === category) {
        button.classList.add("ativo");
      }
    });

    // Limpar o container atual
    menuContainer.innerHTML = "";

    // Filtrar e mostrar itens
    const filteredItems =
      category === "all"
        ? menuItems
        : menuItems.filter((item) => item.category === category);

    filteredItems.forEach((item) => {
      const menuItem = document.createElement("div");
      menuItem.className = "cartao-pizza";
      menuItem.innerHTML = `
                <div class="overflow-hidden">
                    <img src="${item.image}" alt="${item.name}" class="foto-pizza">
                </div>
                <div class="container-detalhe-pizza">
                    <h3 class="nome-pizza">${item.name}</h3>
                    <p class="comentario">${item.description}</p>
                    <span class="tag-preco">${item.price}</span>
                </div>
            `;
      menuContainer.appendChild(menuItem);
    });
  }

  // Adicionar eventos aos botões de filtro
  if (filterButtons) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterMenu(button.dataset.category);
      });
    });
  }

  // Menu mobile toggle
  if (botaoMenuMobile && menuMobile) {
    botaoMenuMobile.addEventListener("click", () => {
      menuMobile.classList.toggle("visivel");
    });
  }
  // Inicializar o cardápio
  filterMenu("all");
});

window.addEventListener('scroll', () => {
    const elementos = document.querySelectorAll('.fade-in-up');
    
    elementos.forEach(elemento => {
        const posicao = elemento.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;
        
        if (posicao < alturaTela - 100) {
            elemento.classList.add('visivel');
        }
    });
});
