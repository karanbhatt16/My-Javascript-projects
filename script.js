let bar = document.querySelectorAll("ul")[4];
let sidebar = document.getElementsByClassName("sidebar")[0];
bar.addEventListener("click",()=>{
    sidebar.classList.remove("hide");
    bar.style.display = "none";
})

let cross = document.getElementsByClassName("cross")[0];
cross.addEventListener("click",()=>{
    sidebar.classList.add("hide");
    bar.style.display = "block";
})


// change color of the logo

const svgText = document.querySelector('#myLogo path');
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6', '#1ABC9C', 'black'];

  function changeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    svgText.setAttribute('fill', randomColor);
  }

  // Initial color change
  changeColor();

  // Repeat every 10 seconds
  setInterval(changeColor, 5000);




  // Typewriter effect
const text = `This is a space where I share the JavaScript projects I’ve been working on as I explore the world of web development.

JavaScript plays a huge role in building interactive, dynamic websites — and I’ve really enjoyed learning how it all works. Each project here reflects my interest in creating things with code and improving my skills step by step.

Outside of coding, I like exploring UI/UX design trends, solving coding challenges, and continuously improving my skills. I'm always open to collaboration, feedback, and connecting with other developers.`;

const delayBeforeStart = 500; // 1 second
const typingSpeed = 20; // ms per word

setTimeout(() => {
  const container = document.getElementById("typewriter");
  const words = text.split(/(\s+)/); // Keeps spaces and line breaks

  let i = 0;
  const interval = setInterval(() => {
    const span = document.createElement("span");
    span.className = "word";

    // Handle line breaks
    if (words[i] === "\n") {
      span.innerHTML = "<br>";
    } else if (words[i].trim() === "") {
      span.innerHTML = "&nbsp;";
    } else {
      span.textContent = words[i];
    }

    container.appendChild(span);
    i++;
    if (i === words.length) clearInterval(interval);
  }, typingSpeed);
}, delayBeforeStart);



const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

// Select all images inside .imageWrapper
const allImages = document.querySelectorAll(".imageWrapper img");

// Loop through each image and add click event
allImages.forEach(img => {
  img.addEventListener("click", function() {
    modal.style.display = "flex";
    modalImg.src = this.src;
  });
});

// Close modal when clicking the close button
closeBtn.onclick = function() {
  modal.style.display = "none";
};

// Close modal when clicking outside the image
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};