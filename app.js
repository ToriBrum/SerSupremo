console.log(dados);
const searchInput = document.getElementById('searchInput');
const clearButton = document.getElementById('clearButton');

clearButton.addEventListener('click', () => {
  searchInput.value = '';
});
const suggestions = ['opção 1', 'opção 2', 'opção 3'];

// Função para filtrar as sugestões
function filterSuggestions(value) {
  return suggestions.filter(suggestion => suggestion.toLowerCase().includes(value.toLowerCase()));
}

// ... (restante do código JavaScript)