  let patients = [];
  let emergencyLevel = 1;

  function addPatient() {
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const pregnant = gender === 'femenino' ? document.getElementById('pregnant').value : 'no';
    const diseaseLevel = document.getElementById('disease').value;
    const description = document.getElementById('description').value;

    if (name && id && age && gender && diseaseLevel && description) {
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
        currentTime
      };

      patients.push(patient);
      patients.sort((a, b) => a.emergencyLevel - b.emergencyLevel);
      renderPatientList();
      updateTotalPatients();
      clearInputFields();
    } else {
      alert('Por favor completa todos los campos.');
    }
  }

  function renderPatientList() {
    const patientList = document.getElementById('patientList');
    patientList.innerHTML = '';

    patients.forEach(patient => {
      const listItem = document.createElement('li');
      listItem.textContent = `${patient.name} (ID: ${patient.id}) - Edad: ${patient.age} - Género: ${patient.gender} - Embarazada: ${patient.pregnant} - Nivel ${patient.emergencyLevel} - ${patient.description} - ${patient.diseaseLevel} - Hora de llegada: ${patient.currentTime}`;
      patientList.appendChild(listItem);
    });
  }

  function updateTotalPatients() {
    document.getElementById('total').textContent = patients.length;
  }

  function clearInputFields() {
    document.getElementById('name').value = '';
    document.getElementById('id').value = '';
    document.getElementById('age').value = '';
    document.getElementById('gender').value = 'masculino';
    document.getElementById('pregnant').value = 'no';
    document.getElementById('disease').value = 'Infecciones respiratorias agudas';
    document.getElementById('description').value = '';
  }

  function setEmergencyLevel(level) {
    emergencyLevel = level;

    const buttons = document.querySelectorAll('.emergency-buttons button');
    buttons.forEach(button => {
      button.classList.remove('selected');
    });

    const selectedButton = buttons[level - 1];
    selectedButton.classList.add('selected');
  }

  function showPregnancyInput() {
    const gender = document.getElementById('gender').value;
    document.getElementById('pregnancyInput').style.display = gender === 'femenino' ? 'block' : 'none';
  }
