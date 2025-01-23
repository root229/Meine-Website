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
window.onload = function () {
  const minWidth = 678; // Mindestbreite in Pixel
  const minHeight = 940; // Mindesthöhe in Pixel

  // Überprüfe die Bildschirmgröße
  if (screen.width < minWidth || screen.height < minHeight || /iPhone/.test(navigator.userAgent)) {
    const warning = document.createElement("div");
    warning.style.position = "fixed";
    warning.style.top = "0";
    warning.style.left = "0";
    warning.style.width = "100%";
    warning.style.backgroundColor = "red";
    warning.style.color = "white";
    warning.style.textAlign = "center";
    warning.style.padding = "10px";
    warning.style.zIndex = "1000";
    warning.innerText = "Warnung: Diese Website benötigt eine größere Bildschirmgröße. Falls du gerade nichts besseres hast, dann ist das nicht schlimm, die Bilder sind dann einfach sehr klein";
    document.body.prepend(warning);
  }
};
console.log("Breite:", window.innerWidth, "Höhe:", window.innerHeight);
