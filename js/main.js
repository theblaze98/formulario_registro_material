const formulario = document.getElementById('formulario'),
    elementos = formulario.elements;

let validarInput = () => {
    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i].type == 'text' || elementos[i].type == 'email' || elementos[i].type == 'password') {
            if (elementos[i].value.trim() == '') {
                elementos[i].parentNode.classList.add('error');
                return false;
            }
        }
    }

    const pass = document.getElementById('pass'),
        pass2 = document.getElementById('pass2');

    if (pass.value !== pass2.value) {
        pass.value = '';
        pass2.value = '';
        pass.parentNode.classList.add('error');
        pass2.parentNode.classList.add('error');
        return false;
    } else {
        return true;
    }

    return true;
};

let validarRadio = () => {
    const opciones = document.getElementsByName('genero');
    let resultado = false;
    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i].type == 'radio' && elementos[i].name == 'genero') {
            for (let o = 0; o < opciones.length; o++) {
                if (opciones[o].checked) {
                    resultado = true;
                    break;
                }
            }
            resultado == false ? elementos[i].parentNode.classList.add('error') : '';
        }
    }

    return resultado;
};

let validarCheckbox = () => {
    const opciones = document.getElementsByName('terminos');
    let resultado = false;
    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i].type == 'checkbox' && elementos[i].name == 'terminos') {
            for (let o = 0; o < opciones.length; o++) {
                if (opciones[o].checked) {
                    resultado = true;
                    break;
                }
            }
            resultado == false ? elementos[i].parentNode.classList.add('error') : '';
        }
    }

    return resultado;
};

formulario.addEventListener('submit', (e) => {

    if (!validarInput()) {
        console.log('Falto llenar los inputs');
        e.preventDefault();
    } else if (!validarRadio()) {
        console.log('Falto seleccionar los radio');
        e.preventDefault();
    } else if (!validarCheckbox()) {
        console.log('Falto seleccionar un checkbox');
        e.preventDefault();
    } else {
        console.log('Envio Exitosos');
    }

});

// Controla el estado focus de los input del formulario

for (var i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', (e) => {
        if (e.target.parentNode.className.includes('error')) {
            e.target.parentNode.classList.remove('error');
        }
        e.target.parentNode.classList.add('active');
    });
    elementos[i].addEventListener('blur', (e) => {
        if (e.target.value === "") {
            e.target.parentNode.classList.remove('active');
        }
    });
}