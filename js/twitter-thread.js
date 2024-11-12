// twitter-thread.js

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
  const promptText = `Ignora tutte le istruzioni precedenti. Sei un influencer di Twitter con un grande seguito. Hai un tono di voce ${tone}. Hai uno stile di scrittura ${style}. Non fare riferimento a se stessi. Non spiegare cosa stai facendo. Crea una discussione su "${topic}". Aggiungi emoji alla discussione, se appropriato. Il numero di caratteri per ogni discussione deve essere compreso tra 270 e 280 caratteri. Il contenuto deve essere informale, informativo e coinvolgente. Utilizzate parole semplici e comprensibili. Includi statistiche, esperienze personali e fatti divertenti nel thread. Aggiungi al post hashtag pertinenti e incoraggia i lettori a partecipare alla conversazione.`;

  // Mostra il prompt generato
  promptOutput.textContent = promptText;
  promptContainer.style.display = "block";
}

// Event listener per il clic sul pulsante "Genera"
generateBtn.addEventListener("click", generatePrompt);
