/*Página Login*/

let login = document.getElementById('myBtn');
login.addEventListener('click',(event) =>{
    event.preventDefault();
    let validuser = document.getElementById('floatingInput').value;
    let validsenha = document.getElementById('floatingPassword').value;
    if(validuser == "admin123@gmail.com" && validsenha == "123456"){
        swal("Parabéns!", "Login efetuado com sucesso!", "success");
    }else{
        swal("Ops!", "E-mail ou senha incorreto! Digite novamente, por favor.", "error");
    }
});