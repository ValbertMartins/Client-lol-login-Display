const labelEmail = document.querySelector('.labelEmail');
const labelSenha = document.querySelector('.labelSenha')
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const alertEmail = document.querySelector('#alertEmail');

const toggleButton = () => {
    if(email.value.length >= 2 && senha.value.length >= 1){
        email.style.transition = 'none';
        document.querySelector('#button-login').style.backgroundColor =  '#D13639';
        document.querySelector('#button-login').style.cursor = 'pointer';
        
    } else if (email.value.length < 2 || senha.value.length < 2){
        document.querySelector('#button-login').style.backgroundColor =  '#fff';
    }
} 


//verify if label continues open or not.
const verificarCampoVazio = (input, label) => {
    if(input.value.length == 0){
        label.removeAttribute('id')
    } else {
        console.log(input.value.length)
    } 
    
}


//changeColorEMail 
const ChangeColorEmail = () => {
    if(email.value.length == 1){
        email.style.transition = 'none';
        email.style.border = '2px solid #eabfef'
        document.querySelector('.labelEmail').style.color = '#be29cc'
        alertEmail.style.display = 'block'
        
    } else { 
        document.querySelector('.labelEmail').style.color = '#b2b2b2'
        alertEmail.style.display ='none'
    }
}

email.addEventListener('click' , () => { 
    email.style.border = '2px solid black'
    labelEmail.setAttribute("id","emailLabelOn"); 
    ChangeColorEmail();
    
})

email.addEventListener('blur', () => {
    email.style.border = '2px solid white'
    verificarCampoVazio(email,labelEmail);
    ChangeColorEmail();
   
})

senha.addEventListener('click' , () => { 
    senha.style.border = '2px solid black'
    labelSenha.setAttribute("id","senhaLabelOn");  
})

senha.addEventListener('blur', () => {
    senha.style.border = '2px solid white';
    verificarCampoVazio(senha,labelSenha);
    
})



document.querySelectorAll('.inputs input').forEach( input => {
    input.addEventListener('input', toggleButton)
    
})