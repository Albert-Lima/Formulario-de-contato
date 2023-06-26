// Obtém uma referência ao formulário pelo ID
var formulario = document.getElementById('formulario');

   // Adiciona um manipulador de evento para o envio do formulário
    formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio normal do formulário

     // Realize aqui qualquer manipulação ou validação adicional do formulário antes de enviá-lo

     // Envie o formulário usando o método submit()
    formulario.submit();
});
