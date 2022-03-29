const leftSide = document.querySelector(".left");
const rightSide = document.querySelector(".right");
const container = document.querySelector(".container");

leftSide.addEventListener("mouseover", () => {
	container.classList.add("hover-left");
});

rightSide.addEventListener("mouseover", () => {
	container.classList.add("hover-right");
});

leftSide.addEventListener("mouseleave", () => {
	container.classList.remove("hover-left");
});

rightSide.addEventListener("mouseleave", () => {
	container.classList.remove("hover-right");
});
