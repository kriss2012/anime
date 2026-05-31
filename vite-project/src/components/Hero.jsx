import React, { useEffect, useRef } from 'react';
import './Hero.css';
import Navbar from './Navbar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import storm from '/images/cloud.png';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top 100%',
    },
  });

  tl.fromTo(
    headingRef.current,
    { y: 80, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
  ).fromTo(
    paragraphRef.current,
    { y: 80, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
    "-=0.5"
  );
}, []);


  useEffect(() => {
    const drops = gsap.utils.toArray('.raindrop');
    const animations = [];

    ScrollTrigger.create({
      trigger: '.scroll-wrapper',
      start: 'top+=10 top',
      onEnter: () => {
        drops.forEach((drop) => {
          const startX = Math.random() * window.innerWidth;
          const duration = 1.5 + Math.random();
          const delay = Math.random();

          gsap.set(drop, {
            x: startX,
            y: -40,
            opacity: 0.5,
          });
const anim = gsap.to(drop, {
  y: window.innerHeight * 2, 
  duration,
  repeat: -1,
  delay,
  ease: 'none',
});


          animations.push(anim);
        });
      },
    });

    ScrollTrigger.create({
      trigger: '.section2',
      start: 'top top',
      end: 'bottom top',
      onLeave: () => {
        animations.forEach((a) => a.kill());
      },
    });
ScrollTrigger.create({
  trigger: '.section3',
  start: 'top center',
  onEnter: () => {
    animations.forEach((a) => a.kill());
  },
});

 ScrollTrigger.create({
  trigger: '.section2',
  start: 'top center',
  once: true,
  onEnter: () => {
    const tl = gsap.timeline();
    tl.to('.lightning-flash', { opacity: 1, duration: 0.1 })          
      .to('.lightning-flash', { opacity: 0, duration: 0.35 })         

      .to('.lightning-flash', { opacity: 1, duration: 0.05 }, "+=0.8") 
      .to('.lightning-flash', { opacity: 0, duration: 0.35 })

      .to('.lightning-flash', { opacity: 1, duration: 0.08 }, "+=0.6") 
      .to('.lightning-flash', { opacity: 0, duration: 0.4 });
  },
});

  }, []);

  return (
    <div className="scroll-wrapper">
        <div className="rain-zone">
      <div className="lightning-flash"></div>

      <div className="rain-container">
        {Array.from({ length: 50 }).map((_, i) => (
          <div className="raindrop" key={i}></div>
        ))}
      </div>


<div id="home" className="hero" style={{
        backgroundImage: `url(${storm})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
      }}>        <Navbar />
       <div className="cloud cloud1"></div>
<div className="cloud cloud2"></div>
<div className="cloud cloud3"></div>
<div className="cloud cloud4"></div>
<div className="cloud cloud5"></div>

        <div className="hero-text">
          <h1>Healing begins with small steps.</h1>
          <p className="hero-quote">
            "You are enough. You are growing. And you're allowed to take your time."
          </p>
          
          <button className="hero-btn" onClick={() => document.getElementById('struggle').scrollIntoView({ behavior: 'smooth' })}>Begin Your Journey</button>
        </div>
        

      </div>

     <div id="struggle" className="section2" ref={sectionRef}>
      <div className="section2-text">
        <h1 ref={headingRef}>Not every day is sunny.</h1>
        <p ref={paragraphRef}>
          There are moments when the weight feels too heavy, when the clouds seem endless, and everything slows down.
          But even in these storms, growth is happening — quietly, patiently. It's okay to not have the answers.
          It's okay to feel lost. Healing isn’t linear. Every step you take — even the small, invisible ones —
          matters. And while the world may feel grey today, know that light always finds its way back.
        </p>
      </div>
    </div>
      </div>
      <div id="healing" className="section3">
        <div className="sun-rays"></div> 
  <div className="section3-text">
    <h1>And then, the light returns.</h1>
    <p>
      After the storm, something shifts. The clouds begin to part, the sky opens up, and golden light pours through. 
      It may not fix everything, but it brings warmth — and a reminder: every night ends with a sunrise. 
      You’re still here. You’re still trying. And that means everything.
    </p>
  </div>
  <div className="birds">
  <div className="bird"></div>
  <div className="bird delay1"></div>
  <div className="bird delay2"></div>
</div>

</div>
<div id="growth" className="section4">

  <div className="section4-text">
    <h1>Growth Begins in the Quiet</h1>
    <p>
      In stillness, life begins to stir again. You may not notice it — but deep within, strength is returning.
      Every pause, every breath, every moment of rest is planting something new.
    </p>
  </div>
    <div className="left">
    <div className="growth-glow"></div>
 <div className="plant">
  <div className="stem"></div>

  <div className="leaf left-leaf"></div>
  <div className="leaf right-leaf"></div>
  <div className="leaf left-leaf-2"></div>
  <div className="leaf right-leaf-2"></div>

<div class="flower-container">
  <div class="flower">
    <div class="center"></div>
    <div class="petal petal1"></div>
    <div class="petal petal2"></div>
    <div class="petal petal3"></div>
    <div class="petal petal4"></div>
    <div class="petal petal5"></div>
    <div class="petal petal6"></div>
  </div>
</div>




</div>
<div className="plant plant2">
  <div className="stem"></div>

  <div className="leaf left-leaf leaf2"></div>
  <div className="leaf right-leaf leaf2"></div>
  <div className="leaf left-leaf-2 leaf2"></div>
  <div className="leaf right-leaf-2 leaf2"></div>

  <div className="flower-container flower2">
    <div className="flower">
      <div className="center"></div>
      <div className="petal petal1"></div>
      <div className="petal petal2"></div>
      <div className="petal petal3"></div>
      <div className="petal petal4"></div>
      <div className="petal petal5"></div>
      <div className="petal petal6"></div>
    </div>
  </div>
</div>

<div className="plant plant3">
  <div className="stem"></div>

  <div className="leaf left-leaf leaf3"></div>
  <div className="leaf right-leaf leaf3"></div>
  <div className="leaf left-leaf-2 leaf3"></div>
  <div className="leaf right-leaf-2 leaf3"></div>

  <div className="flower-container flower3">
    <div className="flower">
      <div className="center"></div>
      <div className="petal petal1"></div>
      <div className="petal petal2"></div>
      <div className="petal petal3"></div>
      <div className="petal petal4"></div>
      <div className="petal petal5"></div>
      <div className="petal petal6"></div>
    </div>
  </div>
  <div className="soil-base"></div>
<div className="soil-base layer1"></div>
<div className="soil-base layer2"></div>

</div>
<div className="butterfly butterfly1">
  <div className="wing left-wing"></div>
  <div className="wing right-wing"></div>
  <div className="body"></div>
</div>
<div className="butterfly butterfly2">
  <div className="wing left-wing"></div>
  <div className="wing right-wing"></div>
  <div className="body"></div>
</div>
<div className="butterfly butterfly3">
  <div className="wing left-wing"></div>
  <div className="wing right-wing"></div>
  <div className="body"></div>
</div>
<div className="butterfly butterfly4">
  <div className="wing left-wing"></div>
  <div className="wing right-wing"></div>
  <div className="body"></div>
</div>
<div className="butterfly butterfly5">
  <div className="wing left-wing"></div>
  <div className="wing right-wing"></div>
  <div className="body"></div>
</div>


  </div>
  </div>
</div>

<div id="future" className="section5">
  <div className="section5-content">
    <h1 className="reveal-text">You Are Ready.</h1>
    <p className="reveal-text delay">
      The storm has passed, the quiet has done its work, and now, you bloom.
      Carry this strength forward. Your journey is uniquely yours, and the world is better with your light in it.
    </p>
    <button className="hero-btn glow-btn" onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>Return to the Start</button>
  </div>
  <div className="floating-particles">
    {Array.from({ length: 20 }).map((_, i) => (
      <div className="particle" key={i}></div>
    ))}
  </div>
</div>

    </div>
    </>
  );
};

export default Hero;
