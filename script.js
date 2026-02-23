// days counter
const start = new Date("February 24, 2025");
const now = new Date();
const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
document.getElementById("days").innerText =
  diff + " Days of Friendship 💖";

// scroll reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// mouse hearts
document.addEventListener("mousemove", e => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💗";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 2000);
});

// teddy click reaction
document.querySelector(".teddy").addEventListener("click", () => {
  alert("🧸 Sending you a virtual hug 💕");
});