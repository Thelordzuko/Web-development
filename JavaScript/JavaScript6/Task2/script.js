
function updateVisitCount() {
  let visitCount = localStorage.getItem("visitCount");
  let firstVisit = localStorage.getItem("firstVisit");

  if (visitCount) {

    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem("visitCount", visitCount);
  } else {

    visitCount = 1;
    localStorage.setItem("visitCount", visitCount);

    firstVisit = new Date().toLocaleString();
    localStorage.setItem("firstVisit", firstVisit);
  }

  document.getElementById("visitMessage").textContent = 
    `You have visited ${visitCount} time${visitCount > 1 ? "s" : ""}.`;

  if (firstVisit) {
    document.getElementById("firstVisit").textContent = 
      `Your first visit was on: ${firstVisit}`;
  }
}

function resetCounter() {
  localStorage.removeItem("visitCount");
  localStorage.removeItem("firstVisit");
  document.getElementById("visitMessage").textContent = "Counter has been reset.";
  document.getElementById("firstVisit").textContent = "";
}


window.onload = updateVisitCount;
