document.getElementById('calculateButton').addEventListener('click', function() {
    const initialVelocity = parseFloat(document.getElementById('initialVelocity').value) || 0;
    const finalVelocity = parseFloat(document.getElementById('finalVelocity').value) || 0;
    const acceleration = parseFloat(document.getElementById('acceleration').value) || 0;
    const time = parseFloat(document.getElementById('time').value) || 0;
    const displacement = parseFloat(document.getElementById('displacement').value) || 0;
    const selectedOption = document.getElementById('option').value;

    let result;

    if (selectedOption === 'finalVelocity') {
        result = initialVelocity + (acceleration * time);
        alert(`Final Velocity: ${result.toFixed(2)} m/s`);
    } else if (selectedOption === 'initialVelocity') {
        result = finalVelocity - (acceleration * time);
        alert(`Initial Velocity: ${result.toFixed(2)} m/s`);
    } else if (selectedOption === 'acceleration') {
        if (time === 0) {
            alert("Time cannot be zero when calculating acceleration.");
            return;
        }
        result = (finalVelocity - initialVelocity) / time;
        alert(`Acceleration: ${result.toFixed(2)} m/s²`);
    } else if (selectedOption === 'time') {
        if (acceleration === 0) {
            alert("Acceleration cannot be zero when calculating time.");
            return;
        }
        result = (finalVelocity - initialVelocity) / acceleration;
        alert(`Time: ${result.toFixed(2)} s`);
    } else if (selectedOption === 'displacement') {
        result = (initialVelocity * time) + (0.5 * acceleration * Math.pow(time, 2));
        alert(`Displacement: ${result.toFixed(2)} m`);
    } else {
        alert("Please select a calculation option.");
    }
});