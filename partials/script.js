gsap.utils.toArray(".parallax").forEach((section, i) => {
  section.bg = section.querySelector(".bg"); 

  // Give the backgrounds some random images
  section.bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;
/*
  gsap.to(sections, { // yPercent: -100, // 
    ease: 'none', scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', pin: true, pinSpacing: false, scrub: 1, snap: 1 / 3, }
  }
  */
  // Do the parallax effect on each section
// if (i) {
    
 //   section.bg.style.backgroundPosition = `50% ${innerHeight / 1}px`;

    gsap.to(section.bg, {
      
   //   backgroundPosition: `50% ${-innerHeight / 1}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        scrub: true,
       // pin: true        
      }
    });
  //} 
  
});
