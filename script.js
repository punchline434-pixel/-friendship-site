// Countdown
const anniversaryDate = new Date("February 24, 2025");
function updateCountdown(){
  const now = new Date();
  const diff = Math.floor((now - anniversaryDate)/(1000*60*60*24));
  document.getElementById("days").innerText = diff + " Days of Friendship 💖";
}
updateCountdown();
setInterval(updateCountdown,1000*60*60);

// Scroll reveal
const reveals=document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{
  reveals.forEach(el=>{
    const top=el.getBoundingClientRect().top;
    if(top<window.innerHeight-100){el.classList.add("active");}
  });
});

// Typing effect
const message = "This website is a special gift for you 💖";
let index=0;
const typingEl=document.querySelector(".typing-text");
function type(){
  if(index<message.length){
    typingEl.textContent+=message.charAt(index);
    index++;
    setTimeout(type,70);
  }
}
type();

// Mouse / touch hearts
document.addEventListener("mousemove",e=>createHeart(e.clientX,e.clientY));
document.addEventListener("touchmove",e=>createHeart(e.touches[0].clientX,e.touches[0].clientY));
function createHeart(x,y){
  const heart=document.createElement("div");
  heart.className="heart";
  heart.innerText=["💗","💖","💞","✨","💕"][Math.floor(Math.random()*5)];
  heart.style.left=x+"px";
  heart.style.top=y+"px";
  heart.style.fontSize=(15+Math.random()*20)+"px";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),3000);
}

// Teddy click
document.querySelector(".teddy").addEventListener("click",()=>{
  alert("🧸 Sending you a big virtual hug 💕");
});

// Confetti + Sparkles Soft
const canvas=document.getElementById("confetti");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const ctx=canvas.getContext("2d");
let confettis=[];
function random(min,max){return Math.random()*(max-min)+min;}
for(let i=0;i<150;i++){
  confettis.push({
    x:random(0,canvas.width),
    y:random(-canvas.height,0),
    r:random(5,10),
    d:random(2,5),
    color:["#FFB6C1","#FFC0CB","#FFE4E1","#FFF0F5","#FFDAB9"][Math.floor(Math.random()*5)],
    tilt:random(-10,10),
    opacity:random(0.6,1)
  });
}
function drawConfetti(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  confettis.forEach(c=>{
    // Confetti line
    ctx.beginPath();
    ctx.lineWidth=c.r;
    ctx.strokeStyle=c.color;
    ctx.globalAlpha=c.opacity;
    ctx.moveTo(c.x + c.tilt, c.y);
    ctx.lineTo(c.x + c.tilt, c.y + c.d*5);
    ctx.stroke();
    // Sparkle
    ctx.beginPath();
    ctx.fillStyle = c.color;
    ctx.globalAlpha = c.opacity * 0.5;
    ctx.arc(c.x, c.y, c.r/2, 0, Math.PI*2);
    ctx.fill();

    c.y += c.d;
    if(c.y>canvas.height){c.y=-10;c.x=random(0,canvas.width);}
  });
  ctx.globalAlpha=1;
  requestAnimationFrame(drawConfetti);
}
drawConfetti();
window.addEventListener("resize",()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});