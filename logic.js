calculate_dosage_volume_ml_mg();
calculate_dosage_volume_ml_ug();
dosage_form_ml_mg.oninput = function(event) {
  event.preventDefault();
  calculate_dosage_volume_ml_mg();
};

dosage_form_ml_ug.oninput = function(event) {
  event.preventDefault();
  calculate_dosage_volume_ml_ug();
};

/*
Dosage Volume = (Available Volume * RX Dose) / Available Dose
*/
function calculate_dosage_volume_ml_mg() {
  const form = document.forms.dosage_form_ml_mg;
  //inputs
  let available_volume= form.elements.available_volume.value;
  let available_dose = form.elements.available_dose.value;
  let rx_dose= form.elements.rx_dose.value;
  
  if (available_volume== null || available_volume== "") {
    available_volume= 5;
  }
  if (available_dose== null || available_dose== "") {
    available_dose= 250;
  }
  if (rx_dose== null || rx_dose== "") {
    rx_dose= 250;
  }
  
  //outputs
  let dosage_volume = (available_volume * rx_dose) / available_dose;
  form.elements.dosage_volume.value = dosage_volume.toFixed(2);
  /*if (savings< 0) {
    form.elements.savings.className = "result-negative"
  } else {
    form.elements.savings.className = "result"
  }*/
}

/*
Dosage Volume = (Available Volume * RX Dose) / Available Dose
*/
function calculate_dosage_volume_ml_ug() {
  const form = document.forms.dosage_form_ml_ug;
  //inputs
  let available_volume= form.elements.available_volume.value;
  let available_dose = form.elements.available_dose.value;
  let rx_dose= (form.elements.rx_dose.value)/1000;
  
  if (available_volume== null || available_volume== "") {
    available_volume= 5;
  }
  if (available_dose== null || available_dose== "") {
    available_dose= 250;
  }
  if (rx_dose== null || rx_dose== "") {
    rx_dose= 250000;
  }
  
  //outputs
  let dosage_volume = (available_volume * rx_dose) / available_dose;
  form.elements.dosage_volume.value = dosage_volume.toFixed(3);
}