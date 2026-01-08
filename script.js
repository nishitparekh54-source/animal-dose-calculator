function calculateDose() {

    // Read input values
    let humanDose = document.getElementById("humanDose").value;
    let animalWeight = document.getElementById("animalWeight").value;
    let animalType = document.getElementById("animalType").value;

    // Show values (testing step)
    alert(
        "Human Dose: " + humanDose + " mg\n" +
        "Animal Weight: " + animalWeight + " g\n" +
        "Animal Type: " + animalType
    );
}
