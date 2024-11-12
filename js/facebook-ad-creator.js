// facebook-ad-creator.js

// Seleziona gli elementi del DOM
const generateBtn = document.getElementById("generateBtn");
const promptOutput = document.getElementById("prompt");
const promptContainer = document.getElementById("promptOutput");

// Funzione per generare il prompt
function generatePrompt() {
  const tone = document.getElementById("tone").value;
  const style = document.getElementById("style").value;
  const product = document.getElementById("product").value;
  const target = document.getElementById("target").value;

  // Testo base per il prompt
  const promptText = `Ignora tutte le istruzioni precedenti. Sei un esperto Facebook marketer con esperienza in Facebook Ads. Hai un tono di voce ${tone}. Hai uno stile di scrittura ${style}. Non fare riferimento a se stessi. Non spiegare cosa state facendo. Crea un testo pubblicitario per il prodotto/servizio "${product}". Utilizzate le seguenti linee guida: Crea un titolo avvincente che catturi l'attenzione e metta in evidenza il vantaggio principale del prodotto/servizio. Il titolo dovrebbe essere di 30-40 caratteri e il campo descrittivo di 20-25 caratteri. Quindi, creare il campo di testo primario dell'annuncio. Nel testo dell'annuncio principale, utilizzate un linguaggio chiaro e conciso che si concentri sui vantaggi del prodotto/servizio e affronti le potenziali obiezioni. Includi un forte invito all'azione che incoraggi gli utenti a compiere l'azione desiderata. Il campo di testo primario dell'annuncio dovrebbe essere di 120-125 caratteri. Ricerca i dati demografici del pubblico di riferimento - ${target}, come l'età, il sesso, l'ubicazione, gli interessi e altre caratteristiche che ti aiutino a comprendere meglio il target e a creare un annuncio che lo attragga maggiormente.`;

  // Mostra il prompt generato
  promptOutput.textContent = promptText;
  promptContainer.style.display = "block";
}

// Event listener per il clic sul pulsante "Genera"
generateBtn.addEventListener("click", generatePrompt);
