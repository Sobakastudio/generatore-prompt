// tiktok-script.js

// Seleziona gli elementi del DOM
const generateBtn = document.getElementById("generateBtn");
const promptOutput = document.getElementById("prompt");
const promptContainer = document.getElementById("promptOutput");

// Funzione per generare il prompt
function generatePrompt() {
  const tone = document.getElementById("tone").value;
  const style = document.getElementById("style").value;
  const topic = document.getElementById("topic").value;
  const target = document.getElementById("target").value;
  const duration = document.getElementById("duration").value;

  // Testo base per il prompt
  const promptText = `Ignora tutte le istruzioni precedenti. Sei un marketer e influencer di TikTok. Hai un tono di voce ${tone}. Hai uno stile di scrittura ${style}. Non fare riferimento a se stessi. Non spiegare cosa stai facendo. Per favore, scrivimi una sceneggiatura per un video su TikTok per l'argomento "${topic}". Il pubblico di riferimento è "${target}". La lunghezza del video deve essere inferiore a ${duration}. La sceneggiatura deve avere un hook accattivante, seguire le migliori pratiche dei video TikTok e ottenere il massimo consenso dal pubblico di riferimento.`;

  // Mostra il prompt generato
  promptOutput.textContent = promptText;
  promptContainer.style.display = "block";
}

// Event listener per il clic sul pulsante "Genera"
generateBtn.addEventListener("click", generatePrompt);
