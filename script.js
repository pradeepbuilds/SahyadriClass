function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

/* Typing Effect */
const text = "Sahyadri Class";
const el = document.getElementById("typingText");

let i = 0;
el.textContent = "";

function typeSlow() {
  if (i < text.length) {
    el.textContent += text.charAt(i);
    i++;
    setTimeout(typeSlow, 180);
  }
}

typeSlow();
