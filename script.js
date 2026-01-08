function calculateDose() {
    // Read inputs and convert to numbers
    let humanDose = Number(document.getElementById("humanDose").value);
    // Step 6.2: Convert human dose to mg/kg (60 kg standard)
    let humanDoseMgKg = humanDose / 60;
    alert(
        "Human Dose: " + humanDose + " mg\n" +
        "Human Dose (mg/kg): " + humanDoseMgKg.toFixed(2)
    );
}
