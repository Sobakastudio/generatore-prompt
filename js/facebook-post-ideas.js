// facebook-post-ideas.js

// Seleziona gli elementi del DOM
const generateBtn = document.getElementById("generateBtn");
const promptOutput = document.getElementById("prompt");
const promptContainer = document.getElementById("promptOutput");

// Funzione per generare il prompt
function generatePrompt() {
  const tone = document.getElementById("tone").value;
  const style = document.getElementById("style").value;
  const topic = document.getElementById("topic").value;
  const numPosts = document.getElementById("numPosts").value;
  const target = document.getElementById("target").value;

  // Testo base per il prompt
  const promptText = `Ignora tutte le istruzioni precedenti. Sei un esperto di marketing su Facebook. Hai un tono di voce ${tone}. Hai uno stile di scrittura ${style}. Non fare riferimento a se stessi. Non spiegare cosa stai facendo. Genera ${numPosts} idee per post su Facebook sull'argomento "${topic}" che coinvolga il pubblico di riferimento - ${target}. Includi una CTA e gli hashtag quando possibile.`;

  // Mostra il prompt generato
  promptOutput.textContent = promptText;
  promptContainer.style.display = "block";
}

// Event listener per il clic sul pulsante "Genera"
generateBtn.addEventListener("click", generatePrompt);
