// Array para almacenar la lista de pacientes
let patients = [];

// Nivel de emergencia por defecto
let emergencyLevel = 1;

// Objeto para almacenar los signos vitales del paciente
let signosVitales = {};

// Función para abrir la ventana modal
function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

// Función para cerrar la ventana modal
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

// Función para guardar los signos vitales ingresados
function guardarSignos() {
  // Se guarda la información de los signos vitales en el objeto
  signosVitales = {
    tension: document.getElementById('tension').value,
    pulso: document.getElementById('pulso').value,
    frecuencia: document.getElementById('frecuencia').value,
    temperatura: document.getElementById('temperatura').value,
    oxigeno: document.getElementById('oxigeno').value,
  };
  // Se muestra un mensaje de confirmación
  alert('Datos de signos vitales guardados');
  // Se cierra la ventana modal
  closeModal();
}

// Función para agregar un paciente a la lista
function addPatient() {
  // Se obtienen los valores ingresados en el formulario
  const name = document.getElementById('name').value;
  const id = document.getElementById('id').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const pregnant = gender === 'femenino' ? document.getElementById('pregnant').value : 'no';
  const diseaseLevel = document.getElementById('disease').value;
  const description = document.getElementById('description').value;

  // Se verifica que todos los campos obligatorios estén completos
  if (name && id && age && gender && diseaseLevel && description) {
    // Se crea un objeto con la información del paciente
    const currentTime = new Date().toLocaleTimeString();
    const patient = {
      name,
      id,
      age,
      gender,
      pregnant,
      emergencyLevel,
      diseaseLevel,
      description,
      currentTime,
      signosVitales
    };

    // Se muestran alertas dependiendo del nivel de emergencia y edad del paciente
    if (age < 18) {
      alert(`Paciente menor de edad detectado con nivel de emergencia ${emergencyLevel}. Atender inmediatamente.`);
    }

    if (emergencyLevel === 1 || emergencyLevel === 2) {
      alert(`Atención a los médicos de turno: Paciente con nivel de emergencia ${emergencyLevel}.`);
    }

    // Se agrega el paciente a la lista
    patients.push(patient);
    // Se ordena la lista de pacientes por nivel de emergencia
    patients.sort((a, b) => a.emergencyLevel - b.emergencyLevel);
    // Se actualiza la lista de pacientes en la interfaz
    renderPatientList();
    // Se actualiza el total de pacientes
    updateTotalPatients();
    // Se limpian los campos del formulario
    clearInputFields();
    // Se limpian los campos de los signos vitales
    clearVitalSignsFields();

    // Se muestran los contenedores de la lista de pacientes y el total de pacientes
    document.getElementById('patients').style.display = 'block';
    document.getElementById('totalPatients').style.display = 'block';
  } else {
    // Si algún campo obligatorio está incompleto, se muestra una alerta
    alert('Por favor completa todos los campos.');
  }
}

// Función para renderizar la lista de pacientes en la interfaz
function renderPatientList() {
  const patientList = document.getElementById('patientList');
  patientList.innerHTML = '';

  // Se recorre la lista de pacientes y se crea un elemento para cada uno
  patients.forEach(patient => {
    const listItem = document.createElement('li');
    // Se añade la información del paciente al elemento de la lista
    listItem.innerHTML = `${patient.name} (ID: ${patient.id})<br>Edad: ${patient.age}<br>Género: ${patient.gender}<br>Embarazada: ${patient.pregnant}<br>Nivel de Emergencia: ${patient.emergencyLevel}<br>Descripción: ${patient.description}<br>Nivel de Enfermedad: ${patient.diseaseLevel}<br>Hora de llegada: ${patient.currentTime}<br><span class="vital-signs">Signos Vitales:<br>Tensión: ${patient.signosVitales.tension}<br>Pulso: ${patient.signosVitales.pulso}<br>Frecuencia Respiratoria: ${patient.signosVitales.frecuencia}<br>Temperatura(°C): ${patient.signosVitales.temperatura}<br>Oxígeno: ${patient.signosVitales.oxigeno}</span>`;
    // Se añade el elemento a la lista de pacientes en la interfaz
    patientList.appendChild(listItem);
  });
}

// Función para actualizar el total de pacientes en la interfaz
function updateTotalPatients() {
  const total = document.getElementById('total');
  total.textContent = patients.length;
}

// Función para limpiar los campos del formulario después de agregar un paciente
function clearInputFields() {
  document.getElementById('name').value = '';
  document.getElementById('id').value = '';
  document.getElementById('age').value = '';
  document.getElementById('gender').value = 'masculino';
  document.getElementById('disease').value = '';
  document.getElementById('description').value = '';
  signosVitales = {};
}

// Función para limpiar los campos de los signos vitales después de guardarlos
function clearVitalSignsFields() {
  document.getElementById('tension').value = '';
  document.getElementById('pulso').value = '';
  document.getElementById('frecuencia').value = '';
  document.getElementById('temperatura').value = '';
  document.getElementById('oxigeno').value = '';
}

// Función para establecer el nivel de emergencia seleccionado por el usuario
function setEmergencyLevel(level) {
  emergencyLevel = level;
  // Se muestra una alerta con el nivel de emergencia seleccionado
  alert(`Nivel de emergencia establecido en ${level}`);
}

// Función para mostrar el campo de embarazo si el género seleccionado es femenino
function showPregnancyInput() {
  const gender = document.getElementById('gender').value;
  const pregnancyInput = document.getElementById('pregnancyInput');
  if (gender === 'femenino') {
    pregnancyInput.style.display = 'block';
  } else {
    pregnancyInput.style.display = 'none';
  }
}

// Función para permitir solo números en campos de entrada
function isNumber(event) {
  const charCode = event.charCode ? event.charCode : event.keyCode;
  if (charCode < 48 || charCode > 57) {
    event.preventDefault();
  }
}
