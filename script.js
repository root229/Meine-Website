// Elemente auswählen
const popup = document.getElementById("popup");
const infoButton = document.getElementById("infoButton");
const closePopup = document.getElementById("closePopup");

// Event-Listener für den Info-Button
infoButton.addEventListener("click", () => {
  popup.style.display = "flex"; // Pop-up sichtbar machen
});

// Event-Listener für das Schließen
closePopup.addEventListener("click", () => {
  popup.style.display = "none"; // Pop-up ausblenden
});

// Schließen des Pop-ups bei Klick außerhalb des Inhalts
window.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});
