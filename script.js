// Destinos dos botões. O portfólio permanece sem link por enquanto.
const links = {
  tracao: "https://plano-tracao.vercel.app/",
  presenca: "https://wa.me/5548988004807",
  portfolio: "#",
};

document.querySelectorAll("[data-link]").forEach((element) => {
  const destination = links[element.dataset.link];
  element.href = destination;

  if (destination === "#") {
    element.removeAttribute("target");
    element.removeAttribute("href");
    element.setAttribute("aria-disabled", "true");
    element.setAttribute("aria-label", "Acesse o Behance — em breve");
    element.addEventListener("click", (event) => event.preventDefault());
  }
});
