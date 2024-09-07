//script
const busca = document.getElementById('busca');
const resultado = document.getElementById('resultado');

busca.addEventListener('input', () => {
    const nomeBuscado = busca.value.toLowerCase().replace('-', '');
    const deadpoolsEncontrados = deadpools.filter(deadpool =>
    deadpool.nome.toLowerCase().replace('-', '').includes(nomeBuscado) || deadpool.grupo.toLowerCase().replace('-', '').includes(nomeBuscado) || deadpool.universo.toLowerCase().replace('-', '').includes(nomeBuscado));
    resultado.innerHTML = '';
    deadpoolsEncontrados.forEach(deadpool => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <h2>${deadpool.nome}</h2>
          <p>Universo: ${deadpool.universo}</p>
          <p class="os">Habilidades: ${deadpool.habilidades.join(', ')}</p>
          <p>Armas: ${deadpool.armas.join(', ')}</p>
          <p class="os">Grupo: ${deadpool.grupo}</p>
          <img src="${deadpool.imagem}" alt="${deadpool.nome}">
        `;
        resultado.appendChild(card);
      });
  });