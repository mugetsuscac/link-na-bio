// Troque somente as URLs abaixo antes de publicar.
const links = {
  tracao: "#",
  presenca: "#",
  portfolio: "#",
};

document.querySelectorAll("[data-link]").forEach((element) => {
  const destination = links[element.dataset.link];
  element.href = destination;

  if (destination === "#") {
    element.removeAttribute("target");
    element.setAttribute("aria-label", `${element.textContent.trim()} — link a configurar`);
    element.addEventListener("click", (event) => event.preventDefault());
  }
});
