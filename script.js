// Smooth scroll button
document.getElementById("exploreBtn").addEventListener("click", () => {
  document.getElementById("program").scrollIntoView({ behavior: "smooth" });
});

// Contact form alert
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Terima kasih! Pesan Anda telah terkirim.");
  e.target.reset();
});

// Dark mode toggle
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Scroll animation observer
const observers = document.querySelectorAll(".fade-in, .slide-up");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("show");
  });
});
observers.forEach(el => observer.observe(el));

// Counter animation
const counters = document.querySelectorAll('.count');
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 200; // speed
    if(count < target){
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting && !counter.classList.contains('counted')){
        updateCount();
        counter.classList.add('counted');
      }
    });
  }, {threshold:0.5});
  counterObserver.observe(counter);
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  const bg = document.querySelector('.parallax-bg');
  if(bg) bg.style.transform = `translateY(${scroll*0.3}px)`;
});
