document.addEventListener("DOMContentLoaded", () => {
  const profileLinks = document.querySelectorAll(".profile");

  profileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const item = link.closest("li");
      if (!item) return;

      const nameEl = item.querySelector("figcaption");
      const imgEl = item.querySelector("img");

      const name = nameEl ? nameEl.textContent.trim() : "";
      let imgSrc = imgEl ? imgEl.getAttribute("src") : "";

      if (
        imgSrc &&
        !imgSrc.startsWith("http") &&
        !imgSrc.startsWith("/") &&
        !imgSrc.startsWith("..")
      ) {
        imgSrc = "../" + imgSrc;
      }

      try {
        localStorage.setItem("perfilAtivoNome", name);
        localStorage.setItem("perfilAtivoImagem", imgSrc);
      } catch (e) {
        console.warn("Não foi possível salvar o perfil no localStorage:", e);
      }
    });
  });
});
