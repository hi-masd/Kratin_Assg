// Simulated exercise data
let exerciseTime = 0;
let heartRate = 0;
let caloriesBurnt = 0;
let exerciseInterval;

function setGoal() {
  const exerciseGoalInput = document.getElementById('exerciseGoal');
  const goal = parseInt(exerciseGoalInput.value);
  // Logic to set exercise goal
}

function startExercise() {
  exerciseInterval = setInterval(() => {
    exerciseTime += 1;
    heartRate = Math.floor(Math.random() * (120 - 80 + 1)) + 80;
    caloriesBurnt += Math.floor(Math.random() * 10);
    updateExerciseData();
  }, 3000); // Update every 3 seconds
}

function stopExercise() {
  clearInterval(exerciseInterval);
}

function updateExerciseData() {
  document.getElementById('exerciseTime').textContent = exerciseTime;
  document.getElementById('heartRate').textContent = heartRate;
  document.getElementById('caloriesBurnt').textContent = caloriesBurnt;
}
