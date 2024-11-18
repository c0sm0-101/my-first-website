// Interactive Background Animation: Create floating circles
function createFloatingCircles() {
  for (let i = 0; i < 10; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    const size = Math.random() * 30 + 20;  // Random size between 20px and 50px
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${Math.random() * window.innerHeight}px`;  // Random vertical position
    circle.style.left = `${Math.random() * window.innerWidth}px`;  // Random horizontal position
    circle.style.animationDuration = `${Math.random() * 10 + 5}s`;  // Random speed
    document.querySelector('.background').appendChild(circle);
  }
}
createFloatingCircles();

// Typing Animation for Welcome Message
function typeMessage() {
  const welcomeText = "Welcome to JavaScript";
  const welcomeElement = document.getElementById('welcome-text');
  let i = 0;

  function addChar() {
    welcomeElement.innerText += welcomeText[i];
    i++;
    if (i < welcomeText.length) {
      setTimeout(addChar, 100);
    }
  }

  addChar();
}

typeMessage();

// Custom Greeting Based on User Input
document.getElementById('greet-btn').addEventListener('click', function() {
  const userName = document.getElementById('userName').value;
  const greetingMessage = document.getElementById('greetingMessage');
  
  if (userName) {
    greetingMessage.innerText = `Welcome to JavaScript, ${userName}!`;
  } else {
    greetingMessage.innerText = 'Please enter your name!';
  }
});

// Random Quote Generator
const quotes = [
  "JavaScript is the language of the web!",
  "Code is like humor. When you have to explain it, it’s bad.",
  "You can’t spell 'JavaScript' without 'fun'!",
  "The best way to learn JavaScript is by writing JavaScript.",
  "Don’t worry if it’s not working. If everything was perfect, you’d be out of a job.",
];

document.getElementById('quote-btn').addEventListener('click', function() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').innerText = randomQuote;
});

// Change Text & Button Color Randomly
function changeText() {
  const welcomeText = document.getElementById("welcome-text");
  const button = document.getElementById("change-text-btn");

  // Change text content
  welcomeText.innerText = "JavaScript is Dynamic and Fun!";

  // Add a pulsating animation
  welcomeText.classList.add("pulse-animation");

  // Change button color randomly
  button.style.backgroundColor = getRandomColor();
}

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
