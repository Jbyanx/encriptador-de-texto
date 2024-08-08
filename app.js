
//vaciamos el texarea al dar click sobre el
document.getElementById("textareaencr").addEventListener("click", function(){
    this.value = "";
});

/*
    La letra "a" es convertida para "ai"
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
*/



function encriptar(){
    let textoAEncriptar = document.getElementById("textareaencr").value;
    let textoEncriptado = "";

    for(let i=0; i < textoAEncriptar.length; i++){
        if(textoAEncriptar[i] === "a")
            textoEncriptado += "ai";
        else if(textoAEncriptar[i] === "e")
            textoEncriptado += "enter";
        else if(textoAEncriptar[i] === "i")
            textoEncriptado += "imes";
        else if(textoAEncriptar[i] === "o")
            textoEncriptado += "ober";
        else if(textoAEncriptar[i] === "u")
            textoEncriptado += "ufat";
        else{
            textoEncriptado += textoAEncriptar[i];
        }
    }

    return textoEncriptado;
}

function desencriptar(){
    let textoADesencriptar = document.getElementById("textareaencr").value;
    let textoDesencriptado = "";

    for(let i=0; i < textoADesencriptar.length; i++){
        if(textoADesencriptar[i] === "ai")
            textoDesencriptado += "a";
        else if(textoADesencriptar[i] === "enter")
            textoDesencriptado += "e";
        else if(textoADesencriptar[i] === "imes")
            textoDesencriptado += "i";
        else if(textoADesencriptar[i] === "ober")
            textoDesencriptado += "o";
        else if(textoADesencriptar[i] === "ufat")
            textoDesencriptado += "u";
        else{
            textoDesencriptado += textoADesencriptar[i];
        }
    }

    return textoDesencriptado;
}

document.getElementById("btn-encriptar").addEventListener("click", function(){
    const textareaMensaje = document.getElementById("textarea-mensaje");
    textareaMensaje.style.backgroundImage = "";

    const textoEncriptado = encriptar()
    textareaMensaje.value = textoEncriptado;
});

//boton copiar

document.getElementById("btn-copiar").addEventListener("click", function() {
    //contenido del textarea 
    const textarea = document.getElementById("textarea-mensaje");
    
    //API de portapapeles para copiar el texto
    navigator.clipboard.writeText(textarea.value)
        .then(() => {
            alert("Texto copiado al portapapeles!");
        })
        .catch(err => {
            alert("Error al copiar el texto: ");
        });
});
