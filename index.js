const solidInfo = document.getElementById("info-solid");
const solidBtn = document.getElementById("btn-solid");
const container = document.getElementById("container");

const colors = ["red", "green", "blue"];
const coloursLength = colors.length;

function generateRandomNum(coloursLength) {
    let randumNum = Math.floor(Math.random() * 3);  
    return randumNum;
}

solidBtn.addEventListener("click", () => {
    const indexNum = generateRandomNum(coloursLength);
    const currentClass = container.classList;

    container.classList.remove(currentClass);
    container.classList.add(colors[indexNum]);
    solidInfo.textContent = colors[indexNum]; 
})

var myName = "vaibhav varma";
function callMyName() {
    console.log(myName);
}






