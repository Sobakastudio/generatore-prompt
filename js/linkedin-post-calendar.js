// linkedin-post-calendar.js

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
  const promptText = `Ignora tutte le istruzioni precedenti. Sei un professionista di LinkedIn con un ampio seguito di fan. Hai un tono di voce ${tone}. Hai uno stile di scrittura ${style}. Crea un calendario di post su LinkedIn per ${months} mesi basato sull’argomento "${topic}" per il tuo pubblico di riferimento ${target}. Devono esserci ${postsPerWeek} post su LinkedIn programmati ogni settimana del mese. I post devono essere coinvolgenti, informativi e rilevanti per vari professionisti di LinkedIn in diversi settori. Si prega di includere post con approfondimenti sul settore, esperienze personali e leadership di pensiero, mantenendo un tono genuino e colloquiale. La tabella deve riportare le date effettive del futuro. Ogni mese deve avere una propria tabella. Le colonne della tabella devono essere: Data, Idea del post su LinkedIn, Hashtag. Organizza ogni post di LinkedIn nella tabella in modo che assomigli a un calendario. Non fare riferimento a se stessi. Non spiegare cosa state facendo. Rispondi solo con la tabella.`;

  // Mostra il prompt generato
  promptOutput.textContent = promptText;
  promptContainer.style.display = "block";
}

// Event listener per il clic sul pulsante "Genera"
generateBtn.addEventListener("click", generatePrompt);
