const firstName = "Oluwaseyi";
const lastName = "Alebiosu";
const age = 24;
const isStudent = true;
const favoriteColor = "Black";

function showMyInfo() {
  const personalInfo = `
    <div>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Current Age:</strong> ${age} years old</p>
      <p><strong>Student Status:</strong> ${isStudent}</p>
      <p><strong>Favourite Color:</strong> ${favoriteColor}</p>
    </div>
  `;
  document.getElementById("exercise1-output").innerHTML = personalInfo;
}

function showFutureAge() {
  const futureAge = age + 5;
  const personalInfo = `
    <div>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>In 5 years:</strong> I will be ${futureAge} years old</p>
      <p><strong>Student Status:</strong> ${isStudent}</p>
      <p><strong>Favourite Color:</strong> ${favoriteColor}</p>
    </div>
  `;
  document.getElementById("exercise1-output").innerHTML = personalInfo;
}