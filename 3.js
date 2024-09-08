document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtiene los valores de las contraseñas
    const oldPassword = document.getElementById('oldPassword').value;
    const newPassword = document.getElementById('newPassword').value;

    // Muestra las contraseñas ingresadas en el DOM
    document.getElementById('displayPasswords').innerText = 
        `Contraseña antigua: ${oldPassword}\nNueva contraseña: ${newPassword}`;

    // También se puede imprimir en la consola del navegador
    console.log("Contraseña antigua:", oldPassword);
    console.log("Nueva contraseña:", newPassword);
});
