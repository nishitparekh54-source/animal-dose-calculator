function calculateDose() {
    let humanDose = document.getElementById("humanDose").value;
    let animalWeight = document.getElementById("animalWeight").value;
    let animalType = document.getElementById("animalType").value;
     // Step 6.2: Human dose in mg/kg
    let humanDoseMgKg = humanDose / 60;
    alert(
        "Human Dose: " + humanDose + " mg\n" +
        "Human Dose (mg/kg): " + humanDoseMgKg.toFixed(2)
    );
}
