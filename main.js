
//INICIALIZAR VARIABLES O ARRAYS
let nombres = [];
let ganadores = [];
let azar = [];

let premios;
let cantidad;
let reGanar;

//OBTENER ELEMENTOS
const fragment = document.createDocumentFragment();
const fragment2 = document.createDocumentFragment();

const form = document.getElementById("form");
const participantesInput = document.getElementById("participantes");
const premiosInput = document.getElementById("premios");
const submit = document.getElementById("submit");
const mensaje = document.querySelector(".mensaje");
const checkbox = document.querySelector(".checkbox");
const instruccion = document.querySelector(".instruccion");

const form2 = document.getElementById("form-participantes")
const formParticipantes = document.querySelector(".input");
const sortear = document.querySelector(".form-participantes__button");

const mostrarGanador = document.querySelector(".mostrar-ganadores");
const ganador1 = document.querySelector(".ganador1")
const otrosGanadores = document.querySelector(".ganadores-otros");


//ACCIÓN AL PRESIONAR EL PRIMER BOTÓN.
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    
    if (participantesInput.value <= 1)
    {mensaje.innerHTML = "Debe haber al menos 2 participantes para sortear.";}
    else if (participantesInput.value > 100)
    {mensaje.innerHTML = "No se puede sortear con más de 100 participantes";}
    else if (premiosInput.value < 1)
    {mensaje.innerHTML = "Debe haber al menos 1 premio para sortear.";}
    else if (participantesInput.value >="A" || premiosInput.value >="A")
    {mensaje.innerHTML = "Solo se pueden poner números enteros en los campos";}
    else{
        form.setAttribute("hidden","true")
        premios = premiosInput.value;
        reGanar = checkbox.checked;
        instruccion.textContent = "Escribe los nombres de los participantes"
        createName();
        }
})

//ACCIÓN AL ELEGIR LOS NOMBRES Y SORTEAR.
sortear.addEventListener("click",(e)=>{
    e.preventDefault();
    let inputsForm = formParticipantes.children;
    for(input of inputsForm)
    {
        if(input.classList.contains("form-participantes__input"))
        {nombres.push(input.value)}
    }
    cantidad = nombres.unshift();
    form2.setAttribute("hidden","true")
    if (premios == 1)
    {instruccion.textContent = "Aquí está el ganador"}
    else {instruccion.textContent = "Aquí están los ganadores"}
    asignarGanador();
    mostrarGanadores();

    console.log("Participantes: " + cantidad);
    console.log("Premios: "+ premios);
    console.table(nombres);
    console.table(ganadores);
    console.log(azar);
    console.log("ReGanar: " + checkbox.checked)
})

//FUNCIÓN PARA CREAR LOS INPUTS DONDE SE DAN LOS NOMBRES DE LOS PARTICIPANTES
function createName()
{
    const cantidadPart = participantes.value;
    const cantidadPrem = premios.value;

    for(let i = 0; i < cantidadPart; i++)
    {
        const newPart = document.createElement("input")
        newPart.setAttribute("type","text")
        newPart.setAttribute("placeholder",`Participante N°${i+1}`)
        newPart.classList.add("form-participantes__input")
        newPart.setAttribute("required","true")
        fragment.appendChild(newPart)
    }
    sortear.removeAttribute("hidden")
    formParticipantes.appendChild(fragment)
}

//FUNCIÓN PARA DESIGNAR A LOS GANADORES DEL SORTEO
const asignarGanador = ()=>{
    let c = cantidad*10;

    //CREAR NÚMEROS RANDOMS
    for(let i=0; i<c; i++)
    {
        let random = Math.floor(Math.random()*cantidad);
        azar.push(random);
    }

    //REPITIENDO NOMBRES
    if(reGanar == true){
        for(let i=0; i < premios; i++)
        {
            ganadores.push(nombres[azar[i]])
        }
    }
    //SIN REPETIR NOMBRES
    else if (reGanar == false)
    {
        forfor:
        for(let i=0;i < premios; i++)
        {
            forof:
            for(win of azar)
            {
                if (ganadores.includes(nombres[win]))
                {
                    continue forof;
                }
                else {ganadores.push(nombres[win]); break forof;}
            }
        }
    }
}

//CREA LOS ELEMENTOS PARA MOSTRAR A LOS GANADORES Y SU POSICIÓN
const mostrarGanadores = ()=>{

    ganador1.innerHTML = `${ganadores[0]}`
    if (premios > 1)
    {
        for(let i=1; i<premios; i++)
        {
            const otrosGanadoresDiv = document.createElement("div");
            otrosGanadoresDiv.classList.add("ganadores-otros__div")
            const div = document.createElement("div");
            div.classList.add("winothers");
            const span = document.createElement("span");
            span.classList.add("beforeothers")
            const p = document.createElement("p");
            span.innerHTML = `${i+1}°`
            p.innerHTML = `${ganadores[i]}`;
            otrosGanadoresDiv.appendChild(div);
            div.appendChild(p);
            otrosGanadoresDiv.appendChild(span)
            otrosGanadoresDiv.appendChild(div)
            fragment2.appendChild(otrosGanadoresDiv)

        }
        otrosGanadores.appendChild(fragment2)
    }   
    mostrarGanador.removeAttribute("hidden");
}

//CREAR PARTICULAS DE FONDO CON PARTICLE JS
particlesJS("particles-js", 
{
    "particles": {
      "number": {
        "value": 160,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 143.85614385614386,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
})