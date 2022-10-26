/*Página recuperação de senha*/

let recuperar = document.getElementById('recuperacao');
recuperar.addEventListener('click',(event) =>{
    event.preventDefault();
    let dados = document.getElementById('floatingInput').value;
    if(dados == "admin123@gmail.com"){
        swal("Parabéns!", "As instruções de recuperação de senha, foram enviadas para o seu e-mail", "success");
    }else{
        swal("Ops!", "E-mail inválido!", "error");
    }
});