import { logout } from 'global.js';

document.getElementById('logoutButton').addEventListener('click', async () => {
  try {
    await logout();
    alert("Sesión cerrada correctamente.");
    window.location.href = "index.html";
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
});
