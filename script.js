const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar()
{   
    if (/^[a-z ]+$/.test(textArea.value)){
       
    
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = ""; 
    mensaje.style.backgroundImage= "none";
    }
    else {alert ("ERROR no son letras minusculas")
        location.reload();
    }
}

function encriptar(stringEncriptada)
{
    
let matrizCodigo= [["e","enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u","ufat"]];
console.table(matrizCodigo);
    stringEncriptada = stringEncriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    
return (stringEncriptada);
}
function btnDesencriptar()
{
   if(/^[a-z ]+$/.test(textArea.value)){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";}
    else {
        alert ("ERROR no son letras minusculas")
        location.reload();
        }
    
}

function desencriptar(stringDesencriptado)
{
let matrizCodigo= [["e","enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u","ufat"]];
stringDesencriptado = stringDesencriptado.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }
return stringDesencriptado
}

function btnCopiar() {
 textArea.value = mensaje.value;
}