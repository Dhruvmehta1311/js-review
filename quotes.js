const quoteButton = document.querySelector("#quoteBtn");
const quotePara = document.querySelector("#quotePara");
const quoteForm = document.querySelector("#quoteForm");

const api = "https://api.quotable.io/quotes/random";

async function getQuote() {
  const res = await fetch(api);
  const data = await res.json();
  randomQuote = data[0].content;
}

quoteForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  await getQuote();
  quotePara.textContent = `" ${randomQuote}"`;
});
