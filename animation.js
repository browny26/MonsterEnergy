gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const can = document.querySelector(".page-img");

  if (!can) return; // Evita errori se l'elemento non esiste

  // Inizializza Lenis
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => 1 - Math.pow(1 - t, 4),
    smooth: true,
    smoothTouch: false,
  });

  // Sincronizza Lenis con GSAP
  function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update(); // Aggiorna GSAP con Lenis
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  gsap.ticker.lagSmoothing(0); // Evita che GSAP interferisca con lo scroll

  // GSAP Animation
  gsap
    .timeline({
      scrollTrigger: {
        trigger: can,
        start: "top center",
        end: "+=2000",
        scrub: true,
        pin: false,
      },
    })
    .fromTo(
      can,
      {
        top: "700px",
        left: "50%",
        scale: 1.5,
      },
      {
        top: "1200px",
        left: "95%",
        scale: 0.5,
        duration: 0.5,
        ease: "power1.inOut",
      }
    );

  // Blocca lo scroll nativo del browser per evitare conflitti
  window.addEventListener("wheel", (e) => e.preventDefault(), {
    passive: false,
  });
  window.addEventListener("touchmove", (e) => e.preventDefault(), {
    passive: false,
  });
});
