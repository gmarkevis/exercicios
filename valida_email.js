function validarEmail(email){
    let validacao = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (email.indexOf(" ") >= 0 || email.length == 0){
        return "Email vazio ou com espaços";
    }else{
        if(validacao.test(email) && email.indexOf("gmail.com") >= 0){
            return "Email com domínio Gmail aceito!";
        }else if ((validacao.test(email) && email.indexOf("hotmail.com") >= 0)){
            return "Email com domínio Hotmail aceito!";
        }else if ((validacao.test(email) && email.indexOf("outlook.com") >= 0)){
            return "Email com domínio Outlook aceito!";
        }else{
            return "Email inválido"
        }
    }
    
}

console.log(validarEmail("teste@gmail.com"))