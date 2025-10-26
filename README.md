# Reportes_AlfredSmart
Resumen de la Solución Propuesta
Construiremos una aplicación web progresiva (PWA) que se alojará gratuitamente en GitHub Pages. La lógica de envío de correos se manejará a través de Funciones Serverless (como Netlify Functions o Vercel Functions), que se integran perfectamente con tu repositorio de GitHub. Esto nos permite ejecutar código en el backend (como enviar correos con la API de Gmail) sin necesidad de un servidor propio, manteniendo tus credenciales seguras.

Arquitectura:

Frontend (lo que ve el usuario): HTML, CSS y JavaScript puro. Se alojará en GitHub Pages.
Backend (la lógica de envío): Una función serverless (Node.js) que se activará cuando el usuario envíe el formulario.
Servicio de Correo: Usaremos la librería Nodemailer para conectarnos a la API de Gmail con las credenciales que proporcionaste.
Alojamiento y Despliegue: Usaremos un servicio como Netlify o Vercel. Se conectarán a tu repo de GitHub, y cada vez que hagas un push, se desplegará automáticamente la nueva versión de la app y la función serverless.
