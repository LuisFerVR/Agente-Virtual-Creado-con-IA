# Agente Virtual 🤖

## 📝 Descripción General

Agente Virtual es una aplicación web sencilla y amigable, diseñada especialmente para asistir a usuarios con poca relación tecnológica en la verificación y activación del servidor FTP necesario para el funcionamiento de escáneres. El sistema guía paso a paso al usuario, con mensajes claros y confirmaciones, asegurando que incluso personas con poca experiencia tecnológica puedan completar el proceso.

---

## ⚠️ Problemática

En entornos donde los usuarios no tienen un alto nivel de conocimiento tecnológico, la configuración y verificación de servicios como un servidor FTP para escáneres puede ser un desafío significativo. Esto a menudo resulta en:

- **Frustración del usuario:** Dificultad para seguir instrucciones técnicas complejas.
- **Dependencia del soporte técnico:** Necesidad constante de asistencia, lo que consume recursos y tiempo.
- **Interrupción de flujos de trabajo:** Retrasos en tareas críticas debido a problemas de configuración.

---

## ✅ Solución Propuesta

Agente Virtual aborda esta problemática ofreciendo una interfaz de chatbot intuitiva que guía al usuario paso a paso a través del proceso de verificación y activación del servidor FTP. La solución se centra en:

- **Simplicidad:** Instrucciones claras y concisas, evitando jerga técnica.
- **Interactividad:** El chatbot responde a las acciones del usuario y ofrece retroalimentación en tiempo real.
- **Autonomía:** Empodera a los usuarios para resolver problemas comunes por sí mismos, reduciendo la carga del soporte técnico.
- **Accesibilidad:** Diseñado para ser fácil de usar por personas con poca experiencia tecnológica.

---

## 🛠️ Stack Tecnológico

Este proyecto fue desarrollado y gestionado utilizando las siguientes herramientas y tecnologías:

- **Gemini CLI:** Utilizado como interfaz de línea de comandos para interactuar con el modelo de lenguaje Gemini, facilitando la automatización de tareas y la generación de código.
- **Context7 (con MCPs):** Empleado para la gestión de dependencias y la integración de componentes, asegurando un desarrollo modular y eficiente.
- **Desktop Commander:** Herramienta para la ejecución de comandos de shell y la interacción con el sistema de archivos local, crucial para la automatización de tareas de desarrollo.
- **GitHub:** Plataforma de control de versiones utilizada para el alojamiento del repositorio, la colaboración y el despliegue continuo a través de GitHub Pages.
- **HTML, CSS, JavaScript:** Tecnologías web fundamentales para la construcción de la interfaz de usuario y la lógica del chatbot.

---

## 📂 Estructura del Proyecto

- `index.html`: Página principal de la aplicación, contiene la estructura del chatbot.
- `style.css`: Estilos visuales para una experiencia accesible y agradable.
- `agent.js`: Lógica del chatbot, incluyendo el flujo guiado para el servidor FTP y respuestas automáticas.

---

## 🚀 Instalación y Uso

1. **Descarga o clona el repositorio en tu computadora.**
2. **Abre el archivo `index.html` en tu navegador web preferido.**
3. **Interactúa con el chatbot:**
   - Escribe tu pregunta o problema en el campo de texto.
   - Si mencionas problemas con el escáner o el FTP, el chatbot te guiará paso a paso.

No se requiere instalación de dependencias ni servidores adicionales. Todo funciona localmente en el navegador.

---

## 💡 Flujo de Ayuda para el Servidor FTP

Cuando el usuario menciona problemas con el escáner o el servidor FTP, el chatbot inicia un flujo guiado:

1. **Identificación del programa:**
   - El chatbot ayuda a localizar el icono de 'FTP Server' en el escritorio, describiendo su aspecto y nombre.
2. **Apertura y manejo de errores:**
   - Indica cómo abrir el programa y qué hacer si aparece un mensaje de error.
3. **Verificación del estado:**
   - Explica cómo identificar si el servidor está activo (botón verde) o inactivo (botón gris) y cómo activarlo.
4. **Finalización:**
   - Indica que se debe minimizar la ventana y confirma si el escáner funciona.
5. **Confirmaciones:**
   - Tras cada paso, el usuario debe responder si lo logró (1) o no (2). Si falla 5 veces en un paso, se sugiere contactar a soporte técnico.

---

## ⚙️ Personalización

- Puedes modificar los mensajes y el flujo en `agent.js` para adaptarlos a otros procesos o necesidades.
- Los estilos pueden personalizarse en `style.css` para mejorar la accesibilidad o la identidad visual.

---

## ♿ Recomendaciones de Accesibilidad

- Fuentes grandes y colores contrastantes para facilitar la lectura.
- Botones grandes y claros.
- Mensajes cortos y directos.

---

## 📞 Soporte Técnico

Si el usuario no logra completar los pasos, el chatbot sugiere contactar a soporte técnico de manera amable y profesional.

---

## 📜 Créditos y Licencia

Desarrollado por Luis Fernando Vergara Ruiz.

---

## 📧 Contacto

Para soporte o sugerencias, escribe a: luis.fer.vera.ruiz@gmail.com

---

## 🚀 Deploy

Este proyecto ha sido publicado con GitHub Pages y Vercel. Puedes acceder a la aplicación en vivo a través del siguiente enlace: [https://agente-blue.vercel.app/](https://agente-blue.vercel.app/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FLuisFerVR%2FAgente-Virtual-Creado-con-IA)
