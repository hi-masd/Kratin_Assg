let exerciseHistory = []; // Array to store exercise history

function setGoal() {
  // Logic to set exercise goal (similar to previous implementation)
}

function startExercise() {
  // Logic to start simulated exercise (similar to previous implementation)
}

function stopExercise() {
  // Logic to stop simulated exercise (similar to previous implementation)
}

function updateExerciseData() {
  // Update exercise metrics on the UI (similar to previous implementation)
}

function displayExerciseHistory() {
  const exerciseList = document.getElementById('exerciseList');
  exerciseList.innerHTML = '';
  exerciseHistory.forEach(exercise => {
    const li = document.createElement('li');
    li.textContent = `Exercise Time: ${exercise.exerciseTime} minutes | Heart Rate: ${exercise.heartRate} bpm | Calories Burnt: ${exercise.caloriesBurnt}`;
    exerciseList.appendChild(li);
  });
}

// Function to save exercise data to history
function saveExerciseData() {
  const exerciseData = {
    exerciseTime,
    heartRate,
    caloriesBurnt
  };
  exerciseHistory.push(exerciseData);
  displayExerciseHistory();
}
