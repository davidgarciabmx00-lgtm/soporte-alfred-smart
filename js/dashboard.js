// js/dashboard.js

document.getElementById('status-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevenimos la recarga de la página
    const statusDiv = document.getElementById('ticket-status');
    statusDiv.textContent = 'Buscando ticket...';

    // Obtenemos los valores de los campos de entrada
    const email = document.getElementById('email').value;
    const ticketId = document.getElementById('ticket-id').value;

    try {
        // Hacemos una petición GET a nuestra función de consulta, pasando los datos en la URL (query string)
        const response = await fetch(`/.netlify/functions/check-status?email=${encodeURIComponent(email)}&ticketId=${encodeURIComponent(ticketId)}`);
        const ticket = await response.json();

        if (response.ok && ticket) {
            // Si se encontró el ticket, mostramos sus detalles
            statusDiv.innerHTML = `
                <h3>Estado del Ticket ${ticket.id}</h3>
                <p><strong>Estado Actual:</strong> <span style="color: ${ticket.estado === 'Resuelto' ? 'green' : 'orange'}">${ticket.estado}</span></p>
                <p><strong>Notas del Soporte:</strong> ${ticket.notas || 'Aún no hay notas.'}</p>
                <p><strong>Última Actualización:</strong> ${new Date(ticket.fecha).toLocaleString()}</p>
            `;
        } else {
            // Si no se encontró, informamos al usuario
            statusDiv.textContent = 'No se encontró un ticket con esos datos. Por favor, verifica el correo y el número de ticket.';
        }
    } catch (error) {
        statusDiv.textContent = 'Error al conectar con el servidor. Inténtalo más tarde.';
        console.error(error);
    }
});
