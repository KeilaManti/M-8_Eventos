window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
   
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', function() {
        titulo.style.color = "#E51B3E";
    })

    let tituloInput = document.querySelector("#titulo");
    let estadoSecreto = 0;

    tituloInput.addEventListener('keydown', function (event) {
        let teclaIngresada = event.key;

        switch (estadoSecreto) {
            case 0:
            	console.log(estadoSecreto)
            	if (teclaIngresada == "s" || teclaIngresada == "S") {
            		estadoSecreto = 1;
            	} else {
            		estadoSecreto = 0;
            	}
                break;
            case 1:
            	console.log(estadoSecreto)
                if (teclaIngresada == "e" || teclaIngresada == "E") {
            		estadoSecreto = 2;
            	} else {
            		estadoSecreto = 0;
            	}
                break;
            case 2:
            	console.log(estadoSecreto)
                if (teclaIngresada == "c" || teclaIngresada == "C") {
            		estadoSecreto = 3;
            	} else {
            		estadoSecreto = 0;
            	}
                break;
            case 3:
            	console.log(estadoSecreto)
                if (teclaIngresada == "r" || teclaIngresada == "R") {
            		estadoSecreto = 4;
            	} else {
            		estadoSecreto = 0;
            	}
                break;
            case 4:
            	console.log(estadoSecreto)
                if (teclaIngresada == "e" || teclaIngresada == "E") {
            		estadoSecreto = 5;
            	} else {
            		estadoSecreto = 0;
            	}
                break;
            case 5:
            	console.log(estadoSecreto)
                if (teclaIngresada == "t" || teclaIngresada == "T") {
            		estadoSecreto = 6;
            	} else {
            		estadoSecreto = 0;
            	}
                break;
            case 6:
            	console.log(estadoSecreto)
                if (teclaIngresada == "o" || teclaIngresada == "O") {
            		estadoSecreto = 0;
            		alert("SECRETO MAGICO");
            	} else {
            		estadoSecreto = 0;
            	}
                break;
            default:
            	console.log(estadoSecreto)
                estadoSecreto = 0;
                break;
        }
    })

}