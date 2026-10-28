document.getElementById("btnMensagem").addEventListener("click", function() {
    alert("Olá! Você clicou no botão!");
});
// Seleciona o botão da página
const botao = document.getElementById("btnMensagem");
// Seleciona o espaço onde aparecerá a mensagem
const mensagem = document.getElementById("mensagem");

// Quando o botão for clicado
botao.addEventListener("click", function() {

    mensagem.textContent = "Olá! O JavaScript está funcionando!";

});