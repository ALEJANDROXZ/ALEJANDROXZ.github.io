import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
import { 
  getAuth, 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  GoogleAuthProvider    
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyBPLAeGZt8TYBtAYHmDfeVNmeFwB61BFv0",
  authDomain: "paginaweb2-604e3.firebaseapp.com",
  projectId: "paginaweb2-604e3",
  storageBucket: "paginaweb2-604e3.appspot.com",
  messagingSenderId: "929541821568",
  appId: "1:929541821568:web:21aa121de31c920cc88265",
  measurementId: "G-NSHQ9JYNHC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Iniciar sesión
export const loginValidation = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// Cerrar sesión
export const logout = () => signOut(auth);

// Registrar usuario
export const userRegister = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

// Enviar verificación de correo
export const emailVerification = () =>
  sendEmailVerification(auth.currentUser);

// Restablecer contraseña
export const resetPassword = (email) => 
  sendPasswordResetEmail(auth, email);

// Observador de autenticación
export function observador() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log("Usuario autenticado con UID:", uid);
      if (user.email === "admin@admin.com") {
        window.location.href = "home_admin.html";
      } else {
        window.location.href = "home_user.html";
      }
    } else {
      console.log("No hay usuarios autenticados.");
      window.location.href = "index.html";
    }
  });
}
