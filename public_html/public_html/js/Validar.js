function Validar() {
    return ValidarNotEmpty();
}

function ValidarNomyApe(num) {
    var arrayCar = document.getElementsByTagName("input")[num].value.split("");
    var correcto = true;
    for (var i = 0; i < arrayCar.length && correcto; i++) {
        if (!isNaN(arrayCar[i])) {
            correcto = false;
            alert("El nombre y los apellidos solo pueden estar compuestos por letras");
        }
    }
    return correcto;
}

function ValidarEmail() {
    var arrayCar = document.getElementsByTagName("input")[4].value.split("");
    var correctoArro = false;
    var posArro = -1;
    console.log("1");
    for (var i = 0; i < arrayCar.length && !correctoArro; i++) {
        console.log(i);
        console.log(arrayCar[i]);
        console.log("  ");
        if (arrayCar[i] === "@" && i !== 0 && i < arrayCar.length - 3) {
            correctoArro = true;
            posArro = i;
        }
    }
    console.log("2");
    var correctoPunto = false;
    for (var i = 0; i < arrayCar.length && !correctoPunto; i++) {
        console.log(i);
        console.log(arrayCar[i]);
        console.log("  ");
        if (arrayCar[i] === "." && i > 2 && i < arrayCar.length - 1) {
            correctoPunto = true;
        }
    }
    var correctoNotNum = false;
    console.log("3");
    for (var i = posArro; i < arrayCar.length; i++) {
        console.log(i);
        console.log(arrayCar[i]);
        console.log("  ");
        if (isNaN(arrayCar[i])) {
            correctoNotNum = true;
        }
    }
    if (correctoArro && correctoPunto && correctoNotNum) {
        document.getElementsByTagName("span")[0].setAttribute("class", "glyphicon glyphicon-ok text-success");  
    } else {
        document.getElementsByTagName("span")[0].setAttribute("class", "glyphicon glyphicon-remove text-danger");     
    }
}

function ValidarNIF() {
    return (ValidarNotEmpty() && Validar9Digitos() && ValidarNoEspacios() && Validar8PrimDig());
}

function Validar8PrimDig() {
    var nif = document.getElementsByTagName("input")[0].value;
    var nums = document.getElementsByTagName("input")[0].value.substring(0, 8);
    nums = parseInt(nums);
    var letra = nif.substring(8, 9);
    var resto = nums % 23;
    var correcto = false;
    if (isNaN(nums)) {
        alert("Los 8 primeros caracteres del NIF deben ser números");
    } else {
        var letrasValidas = ["t", "r", "w", "a", "g", "m", "y", "f", "p", "d", "x", "b", "n", "j", "z", "s", "q", "v", "h", "l", "c", "k", "e", "t"];
        if (letrasValidas[resto] === letra.toLowerCase()) {
            correcto = true;
        }
        if (!correcto) {
            alert("La letra del NIF no es correcta");
        }
    }
    return correcto;
}

function ValidarNotEmpty() {
    var correcto = false;
    for (var i = 0; i < document.getElementsByTagName("input").length - 1 && !correcto; i++) {
        if (document.getElementsByTagName("input")[i].value.length === 0) {
            alert("Debe rellenar todos los campos");
            correcto = true;
        }
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
    var NueveDig = false;
    if (array.length !== 9)
        NueveDig = true;
    if (NueveDig) {
        alert("Debe introducir 9 dígitos");
    }
    return !NueveDig;
}


