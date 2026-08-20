document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // SECRET CLICKER
    // =========================

    let clicks = 0;

    const clickButton = document.getElementById("clickButton");
    const clickCounter = document.getElementById("clicks");
    const secretMessage = document.getElementById("secretMessage");

    if (clickButton && clickCounter && secretMessage) {

        clickButton.addEventListener("click", function () {

            clicks++;

            clickCounter.textContent = clicks;

            if (clicks === 50) {
                secretMessage.textContent =
                    "Halfway there. Why are you doing this?";
            }

            if (clicks === 75) {
                secretMessage.textContent =
                    "Seriously?";
            }

            if (clicks >= 100) {
                secretMessage.innerHTML =
                    'You found something! ' +
                    '<a href="secret.html">GO HERE.</a>';
            }

        });

    }


    // =========================
    // GUESS THE NUMBER
    // =========================

    let secretNumber =
        Math.floor(Math.random() * 100) + 1;

    window.checkGuess = function () {

        const input =
            document.getElementById("guess");

        const result =
            document.getElementById("guessResult");

        const guess = Number(input.value);

        if (!guess) {
            result.textContent = "Enter a number first.";
            return;
        }

        if (guess === secretNumber) {

            result.textContent =
                "🎉 Correct! New number generated.";

            secretNumber =
                Math.floor(Math.random() * 100) + 1;

        } else if (guess < secretNumber) {

            result.textContent = "Too low.";

        } else {

            result.textContent = "Too high.";

        }

    };


    // =========================
    // REACTION TEST
    // =========================

    let reactionReady = false;
    let reactionStart = 0;

    window.startReaction = function () {

        const box =
            document.getElementById("reactionBox");

        const text =
            document.getElementById("reactionText");

        if (!box || !text) return;

        reactionReady = false;

        box.textContent = "WAIT...";
        text.textContent = "Wait...";

        const delay =
            Math.floor(Math.random() * 3000) + 1500;

        setTimeout(function () {

            reactionReady = true;
            reactionStart = Date.now();

            box.textContent = "CLICK NOW!";
            text.textContent = "GO!";

        }, delay);

    };


    window.reactionClick = function () {

        const box =
            document.getElementById("reactionBox");

        const text =
            document.getElementById("reactionText");

        if (!box || !text) return;

        if (!reactionReady) {

            box.textContent = "Too early!";
            text.textContent = "You jumped the gun.";

            return;

        }

        const time =
            Date.now() - reactionStart;

        box.textContent = time + " ms";
        text.textContent = "Nice reaction!";

        reactionReady = false;

    };

});
