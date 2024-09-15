import { userRegister, emailVerification } from 'global.js';

const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  try {
    await userRegister(email, password);
    await emailVerification();
    alert('Registro exitoso. Por favor, verifica tu correo electrónico.');
    window.location.href = "index.html";
  } catch (error) {
    console.error("Error en el registro:", error);
    alert("Error al registrar el usuario.");
  }
});
