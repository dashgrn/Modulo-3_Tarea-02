const inputNombre = document.getElementById('inputNombre');
const inputApellido = document.getElementById('inputApellido');
const inputTel = document.getElementById('inputTel');
const inputDir = document.getElementById('inputDir');
const inputObs = document.getElementById('inputObs');
const saveBtn = document.getElementById('saveBtn');
const getBtn = document.getElementById('getBtn');
const formContainer = document.getElementById('formContainer');


// declaring the saving the form data function
function saveForm() {
    if (isNaN(inputTel.value)) {
        const newP = document.createElement('p');
        const textVal = document.createTextNode('Solo se aceptan números en el campo de Telefono');
        newP.appendChild(textVal);
        formContainer.appendChild(newP);
    } else {
        console.log('inside save funct');
        localStorage.setItem('nombre', inputNombre.value);
        localStorage.setItem('apellido', inputApellido.value);
        localStorage.setItem('tel', inputTel.value);
        localStorage.setItem('dir', inputDir.value);
        localStorage.setItem('obs', inputObs.value);
        console.log('data saved');
    }
}

// declaring the get form data funct
function getForm() {
    inputNombre.value = localStorage.getItem('nombre');
    inputApellido.value = localStorage.getItem('apellido');
    inputTel.value = localStorage.getItem('tel');
    inputDir.value = localStorage.getItem('dir');
    inputObs.value = localStorage.getItem('obs');
    console.log('data loaded');
}

// save event listener
saveBtn.addEventListener('click', function(e) {
    saveForm();
    e.preventDefault();
});

//retrieve data form listener
getBtn.addEventListener('click', function(e) {
    getForm();
    e.preventDefault();
});