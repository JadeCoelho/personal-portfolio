const projects = [
  {
    name: "Clima agora",
    description:
      "Descubra como está o tempo em qualquer local | Prática de <strong>API</strong>",
    src: "clima",
    view: "https://jadecoelho.github.io/clima-agora/",
    repository: "https://github.com/JadeCoelho/clima-agora",
  },
  {
    name: "Flashcards",
    description:
      "Crie seus próprios flashcards | Prática de  <strong>LocalStorage</strong>",
    src: "flashcards",
    view: "https://jadecoelho.github.io/flashcards/",
    repository: "https://github.com/JadeCoelho/flashcards",
  },
  {
    name: "Galeria",
    description:
      "Galeria dos meus desenhos | Prática de <strong>HTML, CSS e JS</strong>",
    src: "galeria",
    view: "https://jadecoelho.github.io/galeria-desenhos/",
    repository: "https://github.com/JadeCoelho/galeria-desenhos",
  },
  {
    name: "Gerador de senha",
    description:
      "Defina o número de caracteres e gere uma senha aleatória | Prática de <strong>HTML, CSS e JS</strong>",
    src: "senha",
    view: "https://jadecoelho.github.io/gerador-senha/",
    repository: "https://github.com/JadeCoelho/gerador-senha",
  },
  {
    name: "Planner semanal",
    description:
      "Faça seu planejamento semanal de forma digital | Prática de  <strong>LocalStorage</strong>",
    src: "planner",
    view: "https://jadecoelho.github.io/planner/",
    repository: "https://github.com/JadeCoelho/planner",
  },
  {
    name: "Pokedex",
    description:
      "Pokedex que construí durante um bootcamp | Prática de <strong>API REST</strong>",
    src: "pokedex",
    view: "https://jadecoelho.github.io/pokedex/",
    repository: "https://github.com/JadeCoelho/pokedex",
  },
  {
    name: "Quizovo",
    description:
      "Quizovo é um criador de quizzes. Crie e jogue seu quiz. É meu projeto favorito <3 | Prática de <strong>Angular e Bootstrap</strong>",
    src: "quizovo",
    view: "https://youtu.be/BHXzME1XHPk",
    repository: "https://github.com/JadeCoelho/quizovo",
  },
  {
    name: "Site de jogos",
    description:
      "Os jogos que desenvolvi reunidos em um só lugar | Prática de <strong>HTML, CSS e JS</strong>",
    src: "jogos",
    view: "https://jadecoelho.github.io/meus-jogos/",
    repository: "https://github.com/JadeCoelho/meus-jogos",
  },
  {
    name: "Watchlist",
    description:
      "Faça sua lista do que assistir | Prática de <strong>Angular</strong>",
    src: "watchlist",
    view: "https://youtu.be/7QVKwn0PtcM",
    repository: "https://github.com/JadeCoelho/watchlist",
  },
];

const technologies = [
  "html5",
  "css3",
  "javascript",
  "angular",
  "typescript",
  "bootstrap",
  "sass",
  "git",
];

const projectsContainer = document.querySelector(".projects-container");
const ul = document.querySelector("#knowledges ul");
const toggle = document.querySelector(".toggle");

function createProjects() {
  let card;
  for (const project of projects) {
    let card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <div class="img">
      <img src="assets/${project.src}.png" alt="${project.name}" class="project-img" />
      <div class="btns">
          <a href="${project.view}" target="_blank"><i class='bx bx-show'></i></a>
          <a href="${project.repository}" target="_blank"><i class='bx bxl-github' ></i></a>
        </div>
      </div>
      
      <div class="project-details">
        <h4 class="project-name">${project.name}</h4>
        <p class="project-description">${project.description}</p>
      </div>
    `;
    projectsContainer.appendChild(card);
  }
  return card;
}

createProjects();

toggle.addEventListener("click", () => {
  if (toggle.classList.contains("bxs-moon")) {
    toggle.classList.remove("bxs-moon");
    toggle.classList.add("bxs-sun");
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  } else {
    toggle.classList.remove("bxs-sun");
    toggle.classList.add("bxs-moon");
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }
});

for (let i = 0; i < technologies.length; i++) {
  let li = document.createElement("li");
  li.innerHTML = `<abbr title='${technologies[i]}'><i class="bx bxl-${technologies[i]}"></i></abbr>`;
  ul.appendChild(li);
}
