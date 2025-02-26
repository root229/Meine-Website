window.onload = function () {
  const minWidth = 678; // Mindestbreite in Pixel
  const minHeight = 940; // Mindesthöhe  

alert("Breite: " + window.innerWidth + ", Höhe: " + window.innerHeight);
  
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