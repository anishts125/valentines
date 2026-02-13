var canvas = document.getElementById("starfield");
var context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

const button = document.getElementById("valentinesButton");

button.addEventListener("click", () => {
    if (button.textContent === "Click Me! ❤") {
        button.textContent = "sending...";
        fetch('https://formspree.io/f/mreaplye', { 
            method: 'POST',
            body: JSON.stringify({ message: "Shruti clicked it! ❤️" }),
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
        }).then(() => {
            button.textContent = "I'll Heart you forever! ❤️";
        });
    }
});

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24);
    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    context.shadowColor = "rgba(255, 105, 180, 1)";
    context.shadowBlur = 8;

    if (frameNumber < 250) {
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("Everyday day I cannot believe how lucky I am", canvas.width/2, canvas.height/2);
        opacity += 0.01;
    } else if (frameNumber < 500) {
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("Everyday day I cannot believe how lucky I am", canvas.width/2, canvas.height/2);
        opacity -= 0.01;
    } else if (frameNumber < 750) {
        if (frameNumber === 500) opacity = 0;
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        drawTextWithLineBreaks(["amongst trillions and trillions of stars,", "over billions of years"], canvas.width/2, canvas.height/2, fontSize, 8);
        opacity += 0.01;
    } else if (frameNumber < 1000) {
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        drawTextWithLineBreaks(["amongst trillions and trillions of stars,", "over billions of years"], canvas.width/2, canvas.height/2, fontSize, 8);
        opacity -= 0.01;
    } else if (frameNumber < 1250) {
        if (frameNumber === 1000) opacity = 0;
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("to be alive, and to get to spend this life with you", canvas.width/2, canvas.height/2);
        opacity += 0.01;
    } else if (frameNumber < 1500) {
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("to be alive, and to get to spend this life with you", canvas.width/2, canvas.height/2);
        opacity -= 0.01;
    } else if (frameNumber < 2500) {
        if (frameNumber === 1500) opacity = 0;
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        drawTextWithLineBreaks(["I Heart you so much Shruti, more than", "all the time and space in the universe can contain"], canvas.width/2, canvas.height/2, fontSize, 8);
        opacity += 0.01;
    } else {
        context.fillStyle = `rgba(255, 105, 180, 1)`;
        drawTextWithLineBreaks(["I Heart you so much Shruti, more than", "all the time and space in the universe can contain"], canvas.width/2, canvas.height/2, fontSize, 8);
        context.fillText("Happy Valentine's Day <3", canvas.width/2, (canvas.height/2 + 120));
        button.style.display = "block";
    }
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
    updateStars();
    drawText();
    frameNumber++;
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.requestAnimationFrame(draw);
