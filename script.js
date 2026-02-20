// --- Registro de usuario ---
document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");

    // Si estamos en la página de registro
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const cedula = document.getElementById("cedula").value;
            const fecha = document.getElementById("fecha").value;
            const password = document.getElementById("password").value;

            // Crear objeto usuario
            const usuario = {
                nombre: nombre,
                cedula: cedula,
                fecha: fecha,
                password: password
            };

            // Guardar en localStorage
            localStorage.setItem(cedula, JSON.stringify(usuario));

            alert("✅ Registro exitoso. Ahora puedes iniciar sesión.");
            window.location.href = "index.html"; // redirige al login
        });
    }

    // Si estamos en la página de inicio de sesión
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const usuarioIngresado = document.getElementById("usuario").value;
            const contraseñaIngresada = document.getElementById("contraseña").value;

            // Buscar usuario en localStorage
            const datosUsuario = localStorage.getItem(usuarioIngresado);

            if (!datosUsuario) {
                alert("⚠️ Usuario no encontrado. Regístrate primero.");
                return;
            }

            const usuario = JSON.parse(datosUsuario);

            // Validar contraseña
            if (usuario.password === contraseñaIngresada) {
                alert(`👋 Bienvenido, ${usuario.nombre}`);
                // Guardamos sesión activa
                localStorage.setItem("usuarioActivo", JSON.stringify(usuario));
                window.location.href = "tienda.html";
            } else {
                alert("❌ Contraseña incorrecta");
            }
        });
    }
});