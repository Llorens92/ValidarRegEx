function Validar() {
    var correcto = false;
    if (ValidarNIF() && ValidarNomyApe(1) && ValidarNomyApe(2))
        if (ValidarPass() && ValidarEmail()) {
            correcto = ValidarNotEmpty();
        } else {
            ValidarNotEmpty();
        }
    return correcto;
}
function ValidarNomyApe(num) {
    var value = document.getElementsByTagName("input")[num].value;
    var correcto = false;
    var salir = false;
    if (value.length > 0) {
        var expreg = /^([A-Z]|[a-z])/;
        for (var i = 0; i < value.length && !salir; i++) {
            if (expreg.test(value[i])) {
                correcto = true;
            } else {
                correcto = false;
                salir = true;
            }
        }
        if (!correcto)
            alert("El nombre y los apellidos deben estar compuestos solo por letras");
    } else {
        correcto = true;
    }
    return correcto;
}

function ValidarPass() {
    var value = document.getElementsByTagName("input")[5].value;
    var correcto = false;
    if (value.length === 0) {
        correcto = true;
    } else {
        var arrayCar = value.split("");
        var hayNum = false;
        var hayLetra = false;
        if (arrayCar.length < 2) {
            document.getElementsByTagName("span")[1].setAttribute("class", "glyphicon glyphicon-remove text-danger");
        } else {
            for (var i = 0; i < arrayCar.length && (!hayNum || !hayLetra); i++) {
                if (isNaN(arrayCar[i])) {
                    hayLetra = true;
                } else {
                    hayNum = true;
                }
            }
            if (hayNum && hayLetra) {
                document.getElementsByTagName("span")[1].setAttribute("class", "glyphicon glyphicon-ok text-success");
                correcto = true;
            } else {
                document.getElementsByTagName("span")[1].setAttribute("class", "glyphicon glyphicon-remove text-danger");
            }
        }
    }

    return correcto;

}
function ValidarEmail() {
    var value = document.getElementsByTagName("input")[4].value;
    var correcto = false;
    if (value.length === 0) {
        correcto = true;
    } else {
        var arrayCar = value.split("");
        var correctoArro = false;
        var posArro = -1;
        for (var i = 0; i < arrayCar.length && !correctoArro; i++) {
            if (arrayCar[i] === "@" && i !== 0 && i < arrayCar.length - 3) {
                correctoArro = true;
                posArro = i;
            }
        }
        var correctoPunto = false;
        for (var i = 0; i < arrayCar.length && !correctoPunto; i++) {
            if (arrayCar[i] === "." && i > 2 && i < arrayCar.length - 1) {
                correctoPunto = true;
            }
        }
        var correctoNotNum = false;
        for (var i = posArro; i < arrayCar.length; i++) {
            if (isNaN(arrayCar[i])) {
                correctoNotNum = true;
            }
        }
        if (correctoArro && correctoPunto && correctoNotNum) {
            document.getElementsByTagName("span")[0].setAttribute("class", "glyphicon glyphicon-ok text-success");
            correcto = true;
        } else {
            document.getElementsByTagName("span")[0].setAttribute("class", "glyphicon glyphicon-remove text-danger");
        }
    }
    return correcto;
}

function ValidarNIF() {
    return (ValidarNotEmptyNif() && Validar9Digitos() && ValidarNoEspacios() && Validar8PrimDig());
}

function Validar8PrimDig() {
    var nif = document.getElementsByTagName("input")[0].value;
    var nums = document.getElementsByTagName("input")[0].value.substring(0, 8);
    var letra = nif.substring(8, 9);
    var salir = false;
    var resto = nums % 23;
    var correcto = false;
    var expreg2 = /(^[1-9]{8}$)/;    
        if (expreg2.test(nums)){
            correcto = true;
        } else {
            alert("nuuuuu");
            correcto = false;
        }
    if (!correcto) {
        alert("Los 8 primeros caracteres del NIF deben ser números");
    } else {
        var expreg = /^([A-Z]|[a-z])/;
        if (expreg.test(letra)) {
            correcto = true;
        }
        var letrasValidas = ["t", "r", "w", "a", "g", "m", "y", "f", "p", "d", "x", "b", "n", "j", "z", "s", "q", "v", "h", "l", "c", "k", "e", "t"];
        if (letrasValidas[resto] === letra.toLowerCase()) {
            correcto = true;
        } else {
            correcto = false;
        }
        if (!correcto) {
            alert("La letra del NIF no es correcta");
        }
    }
    return correcto;
}

function ValidarNotEmpty() {
    var emptys = false;
    var radio = false;
    var contadorChecks = 0;
    var form = document.forms[0];
    for (var i = 1; i < form.length - 1 && !emptys; i++) {
        if (form.elements[i].value.length === 0) {
            alert("No ha rellenado el campo " + form.elements[i].name);
            emptys = true;
        }
        if (form.elements[i].type === "radio" && form.elements[i].name === "Sexo" && !radio) {
            if (form.elements[i].checked) {
                radio = true;
                contadorChecks++;
            }
        }
    }
    var final = false;
    if (contadorChecks !== 1 && !emptys)
        alert("Debe escoger una opcion en el campo Sexo");
    else if (!emptys)
        final = true;
    return final;
}
function ValidarNotEmptyNif() {
    var correcto = false;
    var nif = document.getElementsByTagName("input")[0].value;
    if (nif.length === 0) {
        alert("No ha rellenado el campo NIF");
        correcto = true;
    }
    return !correcto;
}


function ValidarNoEspacios() {
    var nums = document.getElementsByTagName("input")[0].value;
    var array = nums.split(" ");
    var hayEspacios = false;
    if (array.length > 1)
        hayEspacios = true;
    if (hayEspacios) {
        alert("Ha introducido espacios en blanco");
    }
    return !hayEspacios;
}

function Validar9Digitos() {
    var nums = document.getElementsByTagName("input")[0].value;
    var array = nums.split("");
    var NueveDig = true;
    if (array.length !== 9)
        NueveDig = false;
    if (!NueveDig) {
        alert("Debe introducir 9 dígitos");
    }
    return NueveDig;
}


