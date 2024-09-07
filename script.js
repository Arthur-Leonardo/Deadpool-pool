const busca = document.getElementById('busca');
const resultado = document.getElementById('resultado');

busca.addEventListener('input', () => {
  const nomeBuscado = busca.value.toLowerCase();
  const deadpoolEncontrado = deadpools.find(deadpool => deadpool.nome.toLowerCase() === nomeBuscado);

  if (deadpoolEncontrado) {
    resultado.innerHTML = `
    <div class="card">
      <h2>${deadpoolEncontrado.nome}</h2>
      <p>Universo: ${deadpoolEncontrado.universo}</p>
      <p>Habilidades: ${deadpoolEncontrado.habilidades.join(', ')}</p>
      <p>Armas: ${deadpoolEncontrado.armas.join(', ')}</p>
      <img src="${deadpoolEncontrado.imagem}" alt="${deadpoolEncontrado.nome}">
    </div>
    `;
  } else {
    resultado.innerHTML = `
    <div class="nenc">
      <p>Deadpool não encontrado!</p>
    </div>
    `;
  }
});