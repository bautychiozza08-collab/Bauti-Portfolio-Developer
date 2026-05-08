// Animación reveal al hacer scroll

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0px)";

    }

  });

},{
  threshold:.2
});

cards.forEach(card => {

  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = ".6s";

  observer.observe(card);

});

// Glow dinámico del mouse

document.addEventListener("mousemove",(e)=>{

  document.body.style.background =
  `
  radial-gradient(
  circle at ${e.clientX}px ${e.clientY}px,
  rgba(255,23,68,.08),
  #090909 30%
  )
  `;

});