const hexaInfo = document.getElementById("info-hexa");
const hexaBtn = document.getElementById("btn-hexa");
const container = document.getElementById("container");

const colors = ["red", "green", "blue"];
const colorsInHexa = ["#FF0000", "#00FF00", "#0000FF"];
const colorsLength = colors.length;

function generateRandomNum(colorsLength) {
    const randumNum = Math.floor(Math.random() * colorsLength);
    return randumNum;
}

hexaBtn.addEventListener("click", () => {
    const indexNum = generateRandomNum(colorsLength);
    const currentClass = container.classList;

    container.classList.remove(currentClass);
    container.classList.add(colors[indexNum]);
    hexaInfo.textContent = colorsInHexa[indexNum];
})