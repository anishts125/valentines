const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// -------- Stars Background --------
let stars = [];
for (let i = 0; i < 150; i++) {
stars.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
size: Math.random() * 2,
speed: Math.random() * 0.5
});
}

function drawStars() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "white";
stars.forEach(star => {
ctx.beginPath();
ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
ctx.fill();
star.y += star.speed;
if (star.y > canvas.height) star.y = 0;
});
requestAnimationFrame(drawStars);
}
drawStars();

// -------- Button click story --------
const button = document.getElementById("valentinesButton");

button.onclick = function () {

document.body.innerHTML = `

  <div style="height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;background:black;color:white;text-align:center;font-family:cursive">
    <h1 id="msg" style="font-size:38px;color:#ff4d6d;margin-bottom:20px;"></h1>
  </div>
  `;

const messages = [
"Hey…",
"I wanted to tell you something for a long time",
"You became special to me without warning",
"My days feel happier when I talk to you",
"You are my favourite notification",
"I smile at my phone because of you",
"Maybe this is silly…",
"But my feelings are real ❤️",
"So today I want to ask you something..."
];

let i = 0;
const msg = document.getElementById("msg");

function showMessage() {
if (i < messages.length) {
msg.innerHTML = messages[i];
i++;
setTimeout(showMessage, 2500);
} else {
showProposal();
}
}

showMessage();
};

// -------- Proposal Screen --------
function showProposal() {
document.body.innerHTML = `

  <div style="height:100vh;background:black;display:flex;flex-direction:column;justify-content:center;align-items:center;color:white;font-family:cursive;text-align:center;">
    <h1 style="font-size:45px;color:#ff4d6d;margin-bottom:40px;">Will you be my Valentine? ❤️</h1>
    <div>
      <button id="yesBtn" style="padding:15px 35px;font-size:20px;margin:10px;background:#ff4d6d;border:none;border-radius:30px;color:white;cursor:pointer;">YES 💖</button>
      <button id="noBtn" style="padding:15px 35px;font-size:20px;margin:10px;background:gray;border:none;border-radius:30px;color:white;cursor:pointer;">NO 🙈</button>
    </div>
  </div>
  `;

const yes = document.getElementById("yesBtn");
const no = document.getElementById("noBtn");

yes.onclick = () => {
document.body.innerHTML = `       <div style="height:100vh;background:black;display:flex;flex-direction:column;justify-content:center;align-items:center;color:white;font-family:cursive;text-align:center;">         <h1 style="font-size:50px;color:#ff4d6d;">YAYYYY!!! 💞</h1>         <h2>I promise to make you smile everyday ❤️</h2>       </div>
    `;
};

no.onmouseover = () => {
no.style.position = "absolute";
no.style.left = Math.random()*80 + "%";
no.style.top = Math.random()*80 + "%";
};
}
