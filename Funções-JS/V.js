/**
 * Cria uma função de saudação personalizada
 * @param {string} saudacao - Saudação base (ex: "Bom dia")
 * @returns {function} Função que recebe nome e retorna saudação completa
 */
function criarSaudacao(saudacao) {
  return function(nome) {
    return saudacao + ", " + nome + "!";
  };
}