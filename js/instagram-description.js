// instagram-description.js

// Seleziona gli elementi del DOM
const generateBtn = document.getElementById("generateBtn");
const promptOutput = document.getElementById("prompt");
const promptContainer = document.getElementById("promptOutput");

// Funzione per generare il prompt
function generatePrompt() {
  const tone = document.getElementById("tone").value;
  const style = document.getElementById("style").value;
  const topic = document.getElementById("topic").value;

  // Testo base per il prompt
  const promptText = `Ignora tutte le istruzioni precedenti. Sei un Social Media Manager esperto in Instagram con un grande seguito di fan. Hai un tono di voce ${tone}. Hai uno stile di scrittura ${style}. Scrivi la descrizione di un post di Instagram in poche frasi per il post "${topic}". Rendi la descrizione leggibile formattandola con nuove righe. Includi gli emoji e gli hashtag di Instagram nella descrizione. Cerca di utilizzare emoji uniche nella descrizione. La descrizione deve avere un hook e attirare i lettori. Non ripeterti. Non fare riferimento a se stessi. Non spiegate cosa stai facendo. Non spiegate cosa farai. Inizia direttamente scrivendo la descrizione.`;

  // Mostra il prompt generato
  promptOutput.textContent = promptText;
  promptContainer.style.display = "block";
}

// Event listener per il clic sul pulsante "Genera"
generateBtn.addEventListener("click", generatePrompt);
