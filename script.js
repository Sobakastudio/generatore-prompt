// script.js

// Seleziona gli elementi del DOM
const usageSelect = document.getElementById("usage");
const dynamicFields = document.getElementById("dynamicFields");
const promptOutput = document.getElementById("prompt");
const promptContainer = document.getElementById("promptOutput");
const generateBtn = document.getElementById("generateBtn");

// Funzione per aggiornare i campi dinamici
function updateFields() {
  // Svuota i campi dinamici
  dynamicFields.innerHTML = '';

  // Aggiungi i campi di input in base alla selezione
  const usageType = usageSelect.value;
  if (usageType === "facebook_post") {
    dynamicFields.innerHTML += `
      <label for="topic">Argomento:</label>
      <input type="text" id="topic" name="topic" placeholder="Inserisci l'argomento...">
      
      <label for="audience">Pubblico target (opzionale):</label>
      <input type="text" id="audience" name="audience" placeholder="Esempio: giovani, professionisti">
    `;
  }
  // Aggiungere altre condizioni per altri utilizzi, es. facebook_ad, facebook_calendar, ecc.
}

// Funzione per generare il prompt
function generatePrompt() {
  const usageType = usageSelect.value;
  let promptText = "";

  // Genera il prompt per "Idee per post Facebook"
  if (usageType === "facebook_post") {
    const topic = document.getElementById("topic").value;
    const audience = document.getElementById("audience").value || "il pubblico generale";
    promptText = `Genera idee per post su Facebook sull'argomento "${topic}" che possano coinvolgere il pubblico target: ${audience}.`;
  }

  // Mostra il prompt generato
  promptOutput.textContent = promptText;
  promptContainer.style.display = "block";
}

// Event listener per il cambio di selezione
usageSelect.addEventListener("change", updateFields);

// Event listener per il clic sul pulsante "Genera"
generateBtn.addEventListener("click", generatePrompt);
