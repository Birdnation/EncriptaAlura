const input = document.querySelector(".texto");
const mensaje = document.querySelector(".mensaje");

function encriptar() {
    const texto = input.value;
    let textoEncriptado = "";

    if (/^[a-z]+$/.test(texto)) {
        for (let i = 0; i < texto.length; i++) {
            switch (texto[i]) {
                case 'a':
                    textoEncriptado += "ai";
                    break;
                case 'e':
                    textoEncriptado += "enter";
                    break;
                case 'i':
                    textoEncriptado += "imes";
                    break;
                case 'o':
                    textoEncriptado += "ober";
                    break;
                case 'u':
                    textoEncriptado += "ufat";
                    break;
                default:
                    textoEncriptado += texto[i];
                    break;
            }
        }
        mensaje.value = textoEncriptado; 
        mensaje.style.backgroundImage = "none";
    } else {
        alert("El texto solo debe contener letras minúsculas.");
    }
    input.value = "";
}

// Función para desencriptar el texto
function desencriptar() {
    const texto = input.value; 
    let textoDesencriptado = texto;

    if (/^[a-z]*(ai|enter|imes|ober|ufat)*$/.test(texto)) {
        textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
        textoDesencriptado = textoDesencriptado.replace(/enter/g, "e");
        textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");  
        textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
        textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");

        mensaje.value = textoDesencriptado;
        mensaje.style.backgroundImage = "none";
    } else {
        alert("El texto ingresado no es válido para desencriptar.");
    }
    input.value = "";
}

function copy() {
    const textoParaCopiar = mensaje.value; 
    navigator.clipboard.writeText(textoParaCopiar)
        .then(() => {
            console.log("Texto copiado al portapapeles");
            alert("Texto copiado al portapapeles!");
        })
        .catch(err => {
            console.error("No se pudo copiar el texto: ", err);
        });
}