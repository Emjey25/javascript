const menuToggle = document.querySelector(".menuToggle");
const navegation = document.querySelector(".navegation");

menuToggle.onclick = function () {
    navegation.classList.toggle("open");
};

const lists = document.querySelectorAll(".list");

function activeLink() {
    lists.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
}

lists.forEach((item) => item.addEventListener("click", activeLink));
