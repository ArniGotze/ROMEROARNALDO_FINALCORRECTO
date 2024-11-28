document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === 'USER' && password === 'PASS') {
        message.textContent = "Ingreso correcto.";
        // Aquí simularías el envío de correo
        alert(`Enviando correo a admin@example.com: ${username} ha ingresado.`); // Simulación

        // Redirigir a la página principal
        localStorage.setItem('username', username); // Guardar el usuario en almacenamiento local
        window.location.href = 'main.html';
    } else {
        message.textContent = "Ingreso incorrecto.";
    }
});

// Código para mostrar el usuario en la página principal
window.onload = function() {
    if (localStorage.getItem('username')) {
        document.getElementById('userSpan').textContent = localStorage.getItem('username');
    }
}
document.getElementById('sendEmailBtn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    // Simulación de envío de correo
    if (email) {
        document.getElementById('emailResponse').innerText = `Correo enviado a: ${email}`;
    } else {
        document.getElementById('emailResponse').innerText = "Por favor, ingresa un correo.";
    }
});

document.getElementById('fetchImageBtn').addEventListener('click', () => {
    // Simulación de obtener imagen aleatoria
    const images = [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/250"
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const imageElement = document.getElementById('displayImage');
    imageElement.src = randomImage;
    imageElement.style.display = 'block';
});

document.getElementById('fetchCatBtn').addEventListener('click', () => {
    // API de Gatos
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            const catImageElement = document.getElementById('catImage');
            catImageElement.src = data[0].url;
            catImageElement.style.display = 'block';
        });
});
function calcular(operacion) {
    let valor1 = prompt("Ingrese el primer valor:");
    let valor2 = prompt("Ingrese el segundo valor:");
    
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);
    
    let resultado;
    
    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor ingrese valores numéricos válidos.");
        return;
    }

    if (operacion === 'suma') {
        resultado = valor1 + valor2;
        document.getElementById('resultSum').textContent = resultado;
    } else if (operacion === 'resta') {
        resultado = valor1 - valor2;
        document.getElementById('resultRes').textContent = resultado;
    }
}
