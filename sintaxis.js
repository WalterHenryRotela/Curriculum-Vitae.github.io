
alert("Bienvenido a mi curricum vitae del trabajo final de front end!!! disfrute :D ")

window.onscroll = function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      document.getElementById("button").classList.add("visible");
    } else {
      document.getElementById("button").classList.remove("visible");
    }
  };
  
  document.getElementById("button").onclick = function () {
    this.classList.add("red");
    window.scrollTo(0, 0);
  };
  
  document.getElementById("button").onmouseup = function () {
    this.classList.remove("red");
  };

  let counter = 0;

// Aumenta el contador cada vez que se carga la página
window.onload = function () {
  counter++;
  document.getElementById("counter").innerHTML = counter;
};

const images = document.querySelectorAll('#projects img');

images.forEach(image => {
  image.addEventListener('click', event => {
    const details = event.currentTarget.nextElementSibling;
    details.style.display = (details.style.display === 'block') ? 'none' : 'block';
  });
});

const testimonials = [
    {
      quote: "Trabajar con ellos ha sido una experiencia increíble. Han sido muy profesionales y han entregado el trabajo a tiempo.",
      name: "Juan Pérez"
    },
    {
      quote: "Su atención al cliente es excelente. Siempre están dispuestos a ayudar y resolver cualquier problema que pueda surgir.",
      name: "Ana Martínez"
    },
    // ...
  ];
  
  const nextButton = document.querySelector('#next-button');
  const quoteElement = document.querySelector('blockquote');
  const nameElement = document.querySelector('blockquote::after');
  
  let currentTestimonial = 0;
  
  function updateTestimonial() {
    quoteElement.textContent = testimonials[currentTestimonial].quote;
    nameElement.textContent = testimonials[currentTestimonial].name;
  }
  
  nextButton.addEventListener('click', event => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
  });
  
  updateTestimonial();
  
  const formulario = document.querySelector('#formulario');
  const nombre = document.querySelector('#nombre');
  const email = document.querySelector('#email');
  const errorNombre = document.querySelector('#error-nombre');
  const errorEmail = document.querySelector('#error-email');
  
  formulario.addEventListener('submit', event => {
    // Evita que el formulario se envíe
    event.preventDefault();
  
    // Valida los datos del formulario
    let esValido = true;
    if (nombre.value.trim() === '') {
      esValido = false;
      errorNombre.classList.add('error-visible');
    } else {
      errorNombre.classList.remove('error-visible');
    }
    if (email.value.trim() === '' || !emailEsValido(email.value)) {
      esValido = false;
      errorEmail.classList.add('error-visible');
    } else {
      errorEmail.classList.remove('error-visible');
    }
    if (esValido) {
      // Si los datos son válidos, envía el formulario
      formulario.submit();
    } else {
      // Si los datos no son válidos, muestra un mensaje de error
      alert('Por favor, corrige los errores del formulario');
    }
  });
  
  function emailEsValido(email) {
    // Comprueba si el valor de email es una dirección de correo electrónico válida
    // ...
  }
  