import { loginValidation, observador } from './global.js';

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    await loginValidation(email, password);
    observador();
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    alert("Credenciales incorrectas o usuario no registrado.");
  }
});
