// Objeto con propiedades

var p ={
    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null

}



// Objeto con métodos

var m ={

    inicio: function(){

        for(var i = 0; i < p.teclas.length; i++){

            p.teclas[i].addEventListener("click", m.oprimirTecla)

        }
    },

    oprimirTecla: function(e){

        p.accion = e.target.getAttribute("class");
        m.calculadora(p.accion);

    },

    calculadora: function(accion){

        switch(accion){
            case "numero":
                console.log("numero");
            break;
            case "signo":
                console.log("signo");
            break;
            case "igual":
                console.log("igual");
            break;
            case "decimal":
                console.log("decimal");
            break;
        }

    }

}
m.inicio();