
  function saveNote() {
    const note = document.getElementById("noteArea").value;
    const savedAt = new Date().toLocaleString();

    // Save both note and timestamp in localStorage
    localStorage.setItem("note", JSON.stringify({ text: note, savedAt }));

    alert("Note saved!");
    displayTimestamp(savedAt);
  }

  function loadNote() {
    const saved = localStorage.getItem("note");

    if (saved) {
      const { text, savedAt } = JSON.parse(saved);
      document.getElementById("noteArea").value = text;
      displayTimestamp(savedAt);
    } else {
      console.log("No saved note found.");
    }
  }

  function displayTimestamp(time) {
    document.getElementById("timestamp").textContent = "Last saved at: " + time;
  }

  // Auto-load note on page refresh
  window.onload = function () {
    loadNote();
  };
