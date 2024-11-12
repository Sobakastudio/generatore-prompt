// instagram-carousel.js

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
  const promptText = `Ignora tutte le istruzioni precedenti. Sei un Social Media Manager esperto di Instagram con un grande seguito di fan. Hai un tono di voce ${tone}. Hai uno stile di scrittura ${style}. Crea un carosello Instagram su "${topic}". Devono esserci circa 8-10 diapositive. Scrivi i dettagli su tutte le diapositive con i titoli. Genera un esempio di contenuto esatto per ogni diapositiva. Dopo aver scritto le diapositive del carosello, aggiungi una linea di separazione. Genera quindi una descrizione del post di Instagram in poche frasi per il carosello. Includi gli emoji e gli hashtag di Instagram nella descrizione. Cerca di utilizzare emoji uniche nel contenuto. La descrizione deve avere un hook e attirare i lettori. Non ripeterti. Non fare riferimento a se stessi. Non spiegate cosa stai facendo. Non spiegare cosa stai per fare. Inizia direttamente scrivendo i dettagli delle diapositive.`;

  // Mostra il prompt generato
  promptOutput.textContent = promptText;
  promptContainer.style.display = "block";
}

// Event listener per il clic sul pulsante "Genera"
generateBtn.addEventListener("click", generatePrompt);
