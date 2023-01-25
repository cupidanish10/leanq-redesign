gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// gsap.to("#fullpage .section", {
//   scrollTrigger: {
//     scroller: "#fullpage",
//     trigger: "#fullpage section",
//     start: 'center 55%',
//     markers: true,
//     toggleActions: 'play complete restart',
//     scrub: true
//   },
//   duration: 2,
//   ease: 'back'
// });

let sectionsHp = gsap.utils.toArray(".section");
console.log("panels are", sectionsHp);

