
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

// Función para desencriptar el texto
function desencriptar() {
    let textoEncriptado = document.getElementById("textareaencr").value;

    // Definir las secuencias de encriptación y sus reemplazos
    const reemplazos = [
        { clave: "ufat", valor: "u" },
        { clave: "ober", valor: "o" },
        { clave: "imes", valor: "i" },
        { clave: "enter", valor: "e" },
        { clave: "ai", valor: "a" }
    ];

    // Reemplazar cada secuencia de encriptación por su letra correspondiente
    for (const { clave, valor } of reemplazos) {
        const regex = new RegExp(clave, 'g');
        textoEncriptado = textoEncriptado.replace(regex, valor);
    }

    return textoEncriptado;
}



document.getElementById("btn-encriptar").addEventListener("click", function(){
    const textareaMensaje = document.getElementById("textarea-mensaje");
    textareaMensaje.style.backgroundImage = "";

    const textoEncriptado = encriptar()
    textareaMensaje.value = textoEncriptado;
});

document.getElementById("btn-desencriptar").addEventListener("click", function() {
    // Limpiar el fondo de imagen del textarea en la sección de respuesta

    const textareaMensaje = document.getElementById("textarea-mensaje");
    textareaMensaje.style.backgroundImage = "";

    // Obtener el texto desencriptado
    const textoDesencriptado = desencriptar();
    
    // Actualizar el textarea en la sección de respuesta con el texto desencriptado
    textareaMensaje.value = textoDesencriptado;
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
