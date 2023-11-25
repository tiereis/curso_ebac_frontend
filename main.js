const form = document.getElementById('form-valid')

const contemMsgValid = document.querySelector('.msg-valid');
const contemMsgInvalid = document.querySelector('.msg-invalid');

const valorA = document.getElementById('number-a');
const valorB = document.getElementById('number-b');

const msgSucess = 'Formulario validado. <b>B</b> é maior que <b>A</b>'
const msgError = 'Erro, <b>A</b> maior que <b>B</b>, formulario não validado'

function validador(numA, numB){
    return numB > numA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    if (validador(valorA.value, valorB.value)){
        contemMsgValid.innerHTML = msgSucess;
        contemMsgValid.style.display = 'block';

        valorA.value = '';
        valorB.value = '';

    } else {
        contemMsgInvalid.innerHTML = msgError;
        contemMsgInvalid.style.display = 'block';
    }
});

form.addEventListener('reset', function(e){
    e.preventDefault();

    contemMsgValid.style.display = '';
    contemMsgInvalid.style.display = '';

    valorA.value = '';
    valorB.value = '';
});