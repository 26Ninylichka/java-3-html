let target = Math.floor(Math.random() * 10);

let attempts = 0;

function makeGuess() {

    let input = document.getElementById("guess").value;
    let guess = parseInt(input);


    if (input === "") {
        document.getElementById("message").textContent = "Введи число";
        return;
    }

    attempts = attempts + 1;

    document.getElementById("attempts").textContent = "Спроб: " + attempts;


    while (true) {

        if (guess < target) {
            document.getElementById("message").textContent = "Більше";
            break;
        }

        if (guess > target) {
            document.getElementById("message").textContent = "Менше";
            break;
        }

        if (guess === target) {
            document.getElementById("message").textContent = "Ти вгадав!";
            break;
        }
    }
}


function startGame() {
    target = Math.floor(Math.random() * 10);
    attempts = 0;

    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "Спроб: 0";
    document.getElementById("guess").value = "";
}