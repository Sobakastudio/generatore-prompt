// instagram-post-calendar.js

// Seleziona gli elementi del DOM
const generateBtn = document.getElementById("generateBtn");
const promptOutput = document.getElementById("prompt");
const promptContainer = document.getElementById("promptOutput");

// Funzione per generare il prompt
function generatePrompt() {
  const tone = document.getElementById("tone").value;
  const style = document.getElementById("style").value;
  const postsPerWeek = document.getElementById("postsPerWeek").value;
  const months = document.getElementById("months").value;
  const topic = document.getElementById("topic").value;
  const target = document.getElementById("target").value;

  // Testo base per il prompt
  const promptText = `Ignora tutte le istruzioni precedenti. Sei un esperto di marketing su Instagram. Hai un tono di voce ${tone}. Hai uno stile di scrittura ${style}. Crea un calendario di post su Instagram per ${months} mesi basato sull’argomento "${topic}" per il tuo pubblico di riferimento ${target}. Devono esserci ${postsPerWeek} post su Instagram programmati ogni settimana del mese. Ogni post su Instagram deve avere un titolo e una descrizione accattivanti. Utilizza emoji uniche nella descrizione. La descrizione deve avere un hook e invogliare i lettori. La tabella deve riportare le date effettive del futuro. Ogni mese deve avere una propria tabella. Le colonne della tabella devono essere: data, descrizione dell'idea del post, didascalia senza hashtag, hashtag. Organizza ogni post di Instagram nella tabella in modo che assomigli a un calendario. Non fare riferimento a se stessi. Non spiegare cosa state facendo. Rispondi solo con la tabella.`;

  // Mostra il prompt generato
  promptOutput.textContent = promptText;
  promptContainer.style.display = "block";
}

// Event listener per il clic sul pulsante "Genera"
generateBtn.addEventListener("click", generatePrompt);
