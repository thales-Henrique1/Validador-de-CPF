function validarCPF() {

    // Remove caracteres indesejados do CPF
    cpf = cpf.replace(/[^\d]+/g,'');
  
    // Verifica se o CPF possui 11 dígitos
    if(cpf.length !== 11) {
      document.getElementById("mensagem").innerHTML = "O CPF deve conter 11 dígitos.";
      return false;
    }
  
    // Verifica se todos os dígitos do CPF são iguais
    var repetidos = true;
    for(var i = 0; i < 10; i++) {
      if(cpf.charAt(i) !== cpf.charAt(i+1)) {
        repetidos = false;
        break;
      }
    }
    if(repetidos) {
      document.getElementById("mensagem").innerHTML = "O CPF não pode conter todos os dígitos repetidos.";
      return false;
    }
  
    // Validação do CPF: cálculos matemáticos
    var soma = 0;
    for (var i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    var resto = soma % 11;
    var digito1 = resto < 2 ? 0 : 11 - resto;
  
    soma = 0;
    for (var i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    var digito2 = resto < 2 ? 0 : 11 - resto;
  
    // Verifica se os dígitos calculados correspondem aos dígitos informados
    if((digito1 !== parseInt(cpf.charAt(9))) || (digito2 !== parseInt(cpf.charAt(10)))) {
      document.getElementById("mensagem").innerHTML = "CPF inválido.";
      return false;
    }
  
    // Se tudo estiver ok, mostra um mensagem de sucesso
    document.getElementById("mensagem").innerHTML = "CPF válido!";
    return true;
  }