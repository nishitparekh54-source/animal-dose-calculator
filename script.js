function calculateDose() {

    let humanDose = document.getElementById("humanDose").value;
    let animalWeight = document.getElementById("animalWeight").value;
    let animalType = document.getElementById("animalType").value;

    alert(
        "Human Dose: " + humanDose + " mg\n" +
        "Animal Weight: " + animalWeight + " g\n" +
        "Animal Type: " + animalType
    );
}
