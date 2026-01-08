function calculateDose() {

    // Read inputs
    let humanDose = Number(document.getElementById("humanDose").value);
    let animalWeightGrams = Number(document.getElementById("animalWeight").value);
    let animalType = document.getElementById("animalType").value;

    // Step 6.2: Human dose in mg/kg (60 kg standard)
    let humanDoseMgKg = humanDose / 60;

    // Step 6.3: Km conversion factor
    let kmFactor;

    if (animalType === "rat") {
        kmFactor = 6.2;
    } else if (animalType === "mouse") {
        kmFactor = 12.3;
    }

    // Animal dose in mg/kg
    let animalDoseMgKg = humanDoseMgKg * kmFactor;

    // Step 6.4: Convert animal weight to kg
    let animalWeightKg = animalWeightGrams / 1000;

    // Final dose in mg
    let finalDoseMg = animalDoseMgKg * animalWeightKg;

    alert(
        "Human Dose (mg/kg): " + humanDoseMgKg.toFixed(2) + "\n" +
        "Animal Dose (mg/kg): " + animalDoseMgKg.toFixed(2) + "\n" +
        "Animal Weight: " + animalWeightKg.toFixed(3) + " kg\n\n" +
        "FINAL DOSE TO ADMINISTER: " + finalDoseMg.toFixed(2) + " mg"
    );
}
