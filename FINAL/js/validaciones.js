$(document).ready(function(){
    
    var errorNombre = $("#errorNombre");
    var errorApellido = $("#errorApellido");
    var errorEdad = $("#errorEdad");
    
    var arrayValidos = [];
    
    $("#btnEnviar").click(function(){
        var strNombre = $("#txtNombre").val();
        var strApellido = $("#txtApellido").val();
        var intEdad = $("#txtEdad").val();
        
         // validamos el campo edad
        if(!validaNum(intEdad)){
            mostrar(errorEdad);
            errorEdad.text("Error: Debe ingresar solo numeros");
        }else{
            arrayValidos.push("Edad Válida");
        }

      // validamos el campo apellido
       if(isEnBlanco(strApellido)){
           mostrar(errorApellido);
            errorApellido.text("Error: Debe ingresar el apellido");
       }else{
           arrayValidos.push("Apellido Válido");
       }
        
        // validamos el campo nombre
        if(isEnBlanco(strNombre)){
            mostrar(errorNombre);
            errorNombre.text("Error: Debe escribir al menos un Nombre");
       }else{
           arrayValidos.push("Nombre Válido");
       }
        
         
        // chequeamos los errores
        var tamanio = arrayValidos.length;
        if(tamanio != 0){
            // quitamos de la pantalla
            removerErrores();
            // los creamos nuevamente
            crearErrores();
            // si los 3 estan ok, se deshabilita el boton enviar
            if(tamanio == 3){
                $("#btnEnviar").attr("disabled",true);
            }
            mostrarValido(arrayValidos);
        }
    });
});

function removerErrores(){
    var formulario = document.getElementById("formulario");
    var div = document.getElementById("camposValidos");
    formulario.removeChild(div);
}

function crearErrores(){
    var formulario = document.getElementById("formulario");
    var div = document.createElement("div");
    div.class="col-sm-12";
    div.setAttribute("id","camposValidos");
    formulario.append(div);
}

function mostrar(objeto){
    objeto.addClass("form-control alert alert-danger mostrar");
}

function isEnBlanco(valor){
    if(valor==''){
        return true;
    }
    return false;
}

function validaNum(valor){
    if(isEnBlanco(valor)){
        return false;
    }
    
    if(isNaN(valor)){
        return false;
    }
    return true;
}

// funcion para ocultar el mensaje de error una vez nos paramos sobre el input de texto del error en cuestion
function ocultaError(parrafo){
    var objeto = $("#"+parrafo);
    if(objeto.hasClass('mostrar')){
        objeto.removeClass("mostrar");
        objeto.addClass("errores");
    }
}

function mostrarValido(arrayStr){
    var div = document.getElementById("camposValidos");
    var long = arrayStr.length;
    
    for(var i = 0; i<long; i++){
        var par = document.createElement("p");
        var tex = document.createTextNode(arrayStr.pop());
        par.appendChild(tex);
        div.className = "alert alert-success mostrar";
        div.appendChild(par);
    }
}