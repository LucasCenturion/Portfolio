//Fuente Original :  http://timelessname.com/sandbox/matrix.html
//Configura el canvas para que ocupe la pantalla entera 
//canvas.height = window.innerHeight - document.querySelector('footer').clientHeight;
        canvas.width = window.innerWidth;
        // canvas.height = window.innerHeight;
        canvas.height = window.innerHeight - document.querySelector('footer').clientHeight;

// una entrada en el array por columna de texto
//cada valor represnta la posición y actual de la columna.  (en canvas 0 es en la parte superior y los valores positivos de y van disminuyendo)
var columns = []
for (i = 0; i < 256; columns[i++] = 1);

//ejecutado una vez por fotograma
function step() {
    //Ligeramente oscurece todo el canvas dibujando un rectángulo negro casi trasnsparente sobre todo el canvas
    /*esto explica tanto el flash inicial de blanco a negro (por defecto el canvas es blanco y progresivamente se convierte en negro) como el fading de los caracteres.*/
    canvas.getContext('2d').fillStyle = 'rgba(0,0,0,0.05)';
    canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height);

    //verde
    canvas.getContext('2d').fillStyle = '#0F0';
    //para cada clolumna
    columns.map(function (value, index) {
        //fromCharCode convierte puntos de código unicode ( http://en.wikipedia.org/wiki/Code_point ) a un string
        // Los code points están en el rango 33-126, que incluye letras y símbolos comunes del alfabeto latino
        var character = String.fromCharCode(33 +
            Math.random() * 94);
        //dibujar el carácter
        canvas.getContext('2d').fillText(character, //texto
            index * 10, //x
            value //y  1304
            
        );

        //desplaza hacia abajo el carácter
        //si el carácter es menor de 758 entonces hay una posibilidad aleatoria de que sea reseteado
        columns[index] = value > 758 + Math.random() * 1e4 ? 0 : value + 10
    })
}

//1000/33 = ~30 veces por segundo
setInterval(step, 33)

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 

  const toggle = document.querySelector(".toggle");
  const navMenu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {
navMenu.classList.toggle("nav-menu-visible")
});


//Animacion SobreMi
const textos = [
  "¡Hola! Soy Lucas Centurion, un estudiante entusiasta de Programación Web/Analista Programador en la Universidad ORT Escuela de Tecnologías.",
  "Nací en Sao Paulo, Brasil, el 10 de diciembre de 1991. Durante mis primeros semestres de carrera, he adquirido conocimientos en JavaScript, CSS, HTML y conceptos de C#.",
  "Aunque soy nuevo en el campo, estoy emocionado de aprender y crecer como desarrollador. Mi experiencia previa se centra en atención al cliente.",
  "Ahora, estoy en busca de mi primera oportunidad laboral como desarrollador. ¡Bienvenido a mi portfolio, donde comparto mi pasión por la programación y mis proyectos en crecimiento!"
];

let currentIndex = 0;
const speed = 50; // velocidad de escritura en milisegundos

function typeWriter() {
  if (currentIndex < textos.length) {
    const textoActual = textos[currentIndex];
    const parrafos = textoActual.split('\n'); // Separar en párrafos usando el salto de línea como separador

    const span = document.createElement("span");
    span.classList.add("maquinaEscribir");
    document.getElementsByClassName("presentacion")[0].appendChild(span);

    let i = 0;
    function typeChar() {
      if (i < parrafos.length) {
        const p = document.createElement("p"); // Crear elemento <p> para cada párrafo
        span.appendChild(p); // Agregar el párrafo al span

        const textoParrafo = parrafos[i];
        let j = 0;
        function typeText() {
          if (j < textoParrafo.length) {
            p.textContent += textoParrafo.charAt(j); // Agregar cada carácter al párrafo
            j++;
            setTimeout(typeText, speed);
          } else {
            i++;
            typeChar();
          }
        }

        typeText();
      } else {
        currentIndex++;
        typeWriter();
      }
    }

    typeChar();
  }
}

window.onload = typeWriter;


