const elements = {
  buy: document.querySelectorAll("#buy"),
  left: document.getElementById("left"),
  right: document.getElementById("right"),
  home: document.querySelectorAll("#home"),
  decoration: document.querySelectorAll("#decoration"),
  backTitle: document.getElementById("back-title"),
  title: document.getElementById("title"),
  content: document.getElementById("content"),
  nome: document.getElementById("name"),
  description: document.getElementById("description"),
  star: document.getElementById("star"),
  social: document.getElementById("social"),
  img: document.getElementById("page-img"),
  txt: document.querySelectorAll("#txt"),
  nb_title: document.getElementById("nutrition-back-title"),
  n_title: document.getElementById("nutrition-title"),
};

const pages = [
  {
    id: "classic",
    name: "Classic",
    description: "the classic Monster design and flavor.",
  },
  {
    id: "ultra",
    name: "Ultra",
    description: "a sugar-free and calorie-free variant.",
  },
  {
    id: "juice",
    name: "Juice",
    description: "combines fruit juices with energy ingredients.",
  },
  {
    id: "mangoLoco",
    name: "Mango Loco",
    description: "a bold mango flavor with energy boost.",
  },
  {
    id: "doctor",
    name: "The Doctor",
    description: "a citrus soda inspired blend.",
  },
];

let currentIndex = 0;

function updateUI(index) {
  const page = pages[index].id;
  const colorProps = [
    "--background-color",
    "--decoration-color",
    "--secondary",
    "--primary",
    "--content",
  ];

  // Aggiorna gli elementi con le proprietà CSS dinamiche
  elements.home.forEach(
    (home) => (home.style.backgroundColor = `var(--${page}-background-color)`)
  );
  elements.decoration.forEach(
    (dec) => (dec.style.backgroundColor = `var(--${page}-decoration-color)`)
  );
  elements.buy.forEach((buy) => {
    buy.style.borderColor = `var(--${page}-primary)`;
    buy.style.color = `var(--${page}-primary)`;
    buy.addEventListener("mouseover", function () {
      buy.style.backgroundColor = `var(--${page}-secondary)`; // Cambia il colore del background quando il mouse passa sopra
    });
    buy.addEventListener("mouseout", function () {
      buy.style.backgroundColor = ``; // Cambia il colore del background quando il mouse passa sopra
    });
  });
  elements.backTitle.style.color = `var(--${page}-secondary)`;
  elements.title.style.color = `var(--${page}-primary)`;
  elements.left.style.color = `var(--${page}-primary)`;
  elements.left.style.borderColor = `var(--${page}-primary)`;
  elements.left.addEventListener("mouseover", function () {
    elements.left.style.backgroundColor = `var(--${page}-secondary)`; // Cambia il colore del background quando il mouse passa sopra
  });
  elements.left.addEventListener("mouseout", function () {
    elements.left.style.backgroundColor = ``; // Cambia il colore del background quando il mouse passa sopra
  });
  elements.right.style.color = `var(--${page}-primary)`;
  elements.right.style.borderColor = `var(--${page}-primary)`;
  elements.right.addEventListener("mouseover", function () {
    elements.right.style.backgroundColor = `var(--${page}-secondary)`; // Cambia il colore del background quando il mouse passa sopra
  });
  elements.right.addEventListener("mouseout", function () {
    elements.right.style.backgroundColor = ``; // Cambia il colore del background quando il mouse passa sopra
  });
  elements.content.style.color =
    page === "juice" || page === "mangoLoco" || page === "doctor"
      ? "white"
      : `var(--${page}-content)`;
  elements.nome.style.color = `var(--${page}-primary)`;
  elements.nome.innerHTML = pages[index].name;
  elements.description.style.color = `var(--${page}-content)`;
  elements.description.innerHTML = pages[index].description;
  elements.star.style.color = `var(--${page}-primary)`;
  elements.social.style.color = `var(--${page}-primary)`;
  elements.img.src = `imgs/${page}.webp`;
  elements.txt.forEach(
    (txt) => (txt.style.color = elements.content.style.color)
  );
  elements.nb_title.style.color = `var(--${page}-secondary)`;
  elements.n_title.style.color = `var(--${page}-primary)`;
}

elements.right.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % pages.length;
  updateUI(currentIndex);
});

elements.left.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + pages.length) % pages.length;
  updateUI(currentIndex);
});

// Inizializza la UI
updateUI(currentIndex);
