function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const toggleIcon = document.querySelector('.toggle-password');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleIcon.textContent = '👁️';
  } else {
    passwordInput.type = 'password';
    toggleIcon.textContent = '🔒';
  }
}

function login() {
  const role = document.getElementById('role').value;
  const password = document.getElementById('password').value;

  // Simplemente mostrar el tipo de usuario y la contraseña en la consola para este ejemplo
  console.log(`Tipo de Usuario: ${role}`);
  console.log(`Contraseña: ${password}`);

  // Aquí deberías agregar tu lógica de inicio de sesión, como enviar los datos al servidor y validarlos.
}
