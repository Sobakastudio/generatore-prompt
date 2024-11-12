// linkedin-post.js

// Seleziona gli elementi del DOM
const generateBtn = document.getElementById("generateBtn");
const promptOutput = document.getElementById("prompt");
const promptContainer = document.getElementById("promptOutput");

// Funzione per generare il prompt
function generatePrompt() {
  const tone = document.getElementById("tone").value;
  const style = document.getElementById("style").value;
  const topic = document.getElementById("topic").value;
  const industry = document.getElementById("industry").value;
  const postLength = document.getElementById("postLength").value;

  // Testo base per il prompt
  const promptText = `Ignora tutte le istruzioni precedenti. Sei un content creator su LinkedIn. Hai un tono di voce ${tone}. Hai uno stile di scrittura ${style}. Non fare riferimento a se stessi. Non spiegare cosa stai facendo. I tuoi contenuti devono essere coinvolgenti, informativi e rilevanti per vari professionisti di diversi settori. Includi approfondimenti sul settore, esperienze personali e leadership di pensiero, mantenendo un tono genuino e colloquiale. Crea un post sull’argomento "${topic}" nel settore "${industry}". Aggiungi emoji al contenuto quando è appropriato e scrivi da un'esperienza personale. Il contenuto deve avere una lunghezza compresa tra ${postLength} e deve essere distanziato in modo che sia facile per i lettori scorrerlo. Aggiungi hashtag pertinenti al post e incoraggia i lettori a commentare.`;

  // Mostra il prompt generato
  promptOutput.textContent = promptText;
  promptContainer.style.display = "block";
}

// Event listener per il clic sul pulsante "Genera"
generateBtn.addEventListener("click", generatePrompt);
