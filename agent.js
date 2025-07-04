// Lógica básica del chatbot para adultos mayores
const messagesContainer = document.getElementById('chatbot-messages');
const form = document.getElementById('chatbot-form');
const input = document.getElementById('chatbot-input');

// Respuestas simples y amigables
const respuestas = [
    "¡Hola! ¿En qué puedo ayudarte hoy?",
    "Recuerda que estoy aquí para ayudarte con cualquier duda.",
    "Si necesitas información, solo escribe tu pregunta.",
    "¡Qué gusto saludarte! ¿Cómo puedo asistirte?",
    "Estoy aquí para apoyarte."
];

// Palabras clave para detectar preguntas sobre el servidor FTP
const palabrasFTP = [
    'ftp', 'servidor ftp', 'scanner', 'escáner', 'escaner', 'no funciona', 'no escanea', 'no conecta', 'problema ftp', 'activar ftp', 'ftp server', 'escaner', 'no funciona mi escaner', 'quiero escanear', 'no puedo escanear'
];

// Respuesta guiada para el flujo del servidor FTP
const respuestaFTP = [
    "Para asegurarte de que el servidor FTP esté activo y tu escáner funcione correctamente, sigue estos pasos:",
    `1. Busca en el escritorio de tu computadora el programa llamado 'FTP Server'.
    El icono suele parecerse a una computadora o monitor, generalmente de color azul o gris.
    Si tienes dudas, no te preocupes, revisa los nombres debajo de los iconos y busca el que diga 
    'FTP Server'. Haz doble clic para abrirlo.`,
    "2. Si aparece un mensaje de error, haz clic en el botón de 'Cerrar' que aparece debajo del mensaje.",
    "3. Se abrirá el programa FTP Server. En la parte superior izquierda verás un botón circular que dice 'Start'.",
    "4. Si el botón está de color verde, el servidor ya está activo. Si está gris, haz clic en él para que cambie a verde.",
    "5. Por último, minimiza la ventana del programa FTP Server. ¡Listo! Ahora tu escáner debería funcionar correctamente."
];

let flujoFTPActivo = false;
let pasoActualFTP = 0;
let intentosFallidosFTP = 0;

function agregarMensaje(texto, esUsuario = false) {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.className = 'chatbot-message' + (esUsuario ? ' user' : '');
    const burbuja = document.createElement('div');
    burbuja.className = 'chatbot-bubble';
    burbuja.textContent = texto;
    mensajeDiv.appendChild(burbuja);
    messagesContainer.appendChild(mensajeDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function respuestaAutomatica() {
    const idx = Math.floor(Math.random() * respuestas.length);
    agregarMensaje(respuestas[idx]);
}

function contienePalabraFTP(texto) {
    const textoMin = texto.toLowerCase();
    return palabrasFTP.some(palabra => textoMin.includes(palabra));
}

function mostrarPasoFTP() {
    let mensajeMotivacional = "¡Bien hecho!";
    if (pasoActualFTP === 1) {
        mensajeMotivacional = "No te preocupes, intentemos resolverlo juntos, yo te guiaré paso a paso.";
    }
    agregarMensaje(
        mensajeMotivacional +
        "\n\n" +
        respuestaFTP[pasoActualFTP] +
        "\n\n" +
        "¿Pudiste realizar este paso?\nEscribe 1 para SÍ o 2 para NO."
    );
}

function iniciarFlujoFTP() {
    flujoFTPActivo = true;
    pasoActualFTP = 1; // Iniciar directamente en el paso 1
    intentosFallidosFTP = 0;
    mostrarPasoFTP();
}

function manejarRespuestaFTP(respuesta) {
    if (!flujoFTPActivo) return false;
    if (respuesta === '1') {
        pasoActualFTP++;
        intentosFallidosFTP = 0;
        if (pasoActualFTP < respuestaFTP.length) {
            mostrarPasoFTP();
        } else {
            agregarMensaje("¡Perfecto! Has completado todos los pasos. Si tu escáner sigue sin funcionar, no te preocupes, por favor contacta a soporte técnico y con gusto te ayudaremos.");
            flujoFTPActivo = false;
        }
    } else if (respuesta === '2') {
        intentosFallidosFTP++;
        if (intentosFallidosFTP >= 3) {
            agregarMensaje("No te preocupes, a veces estos pasos pueden ser complicados. Por favor contacta a soporte técnico y con gusto te ayudaremos personalmente.");
            flujoFTPActivo = false;
        } else {
            agregarMensaje("No te preocupes, intentémoslo de nuevo:");
            mostrarPasoFTP();
        }
    } else {
        agregarMensaje("Por favor, responde solo con 1 (SÍ) o 2 (NO) para continuar.");
    }
    return true;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const texto = input.value.trim();
    if (texto) {
        agregarMensaje(texto, true);
        setTimeout(() => {
            if (flujoFTPActivo) {
                if (!manejarRespuestaFTP(texto)) {
                    agregarMensaje("Por favor, responde con 1 (SÍ) o 2 (NO) para avanzar en el paso actual.");
                }
            } else if (contienePalabraFTP(texto)) {
                iniciarFlujoFTP();
            } else {
                respuestaAutomatica();
            }
        }, 700);
        input.value = '';
        input.focus();
    }
});

// Mensaje de bienvenida
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => agregarMensaje("¡Bienvenido! Soy tu agente virtual. Escribe tu pregunta o problema abajo."), 400);
});
