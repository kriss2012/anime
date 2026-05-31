import React, { useEffect, useRef } from 'react';
import './Hero.css';
import Navbar from './Navbar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import storm from '/images/cloud.png';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef   = useRef(null);
  const headingRef   = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Section 2 reveal
    const tl = gsap.timeline({
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    });
    tl.fromTo(headingRef.current,   { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1,   ease: 'power3.out' })
      .fromTo(paragraphRef.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }, '-=0.5');

    // Animate every .story-card on scroll
    gsap.utils.toArray('.story-card').forEach((card, i) => {
      gsap.fromTo(card,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: i * 0.15,
          scrollTrigger: { trigger: card, start: 'top 85%' }
        }
      );
    });

    // Animate quote lines
    gsap.utils.toArray('.quote-line').forEach((q) => {
      gsap.fromTo(q,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: q, start: 'top 85%' }
        }
      );
    });
  }, []);

  useEffect(() => {
    const drops = gsap.utils.toArray('.raindrop');
    const animations = [];

    ScrollTrigger.create({
      trigger: '.scroll-wrapper',
      start: 'top+=10 top',
      onEnter: () => {
        drops.forEach((drop) => {
          const startX  = Math.random() * window.innerWidth;
          const duration = 1.5 + Math.random();
          const delay    = Math.random();
          gsap.set(drop, { x: startX, y: -40, opacity: 0.5 });
          const anim = gsap.to(drop, { y: window.innerHeight * 2, duration, repeat: -1, delay, ease: 'none' });
          animations.push(anim);
        });
      },
    });

    ScrollTrigger.create({
      trigger: '.section2', start: 'top top', end: 'bottom top',
      onLeave: () => animations.forEach((a) => a.kill()),
    });

    ScrollTrigger.create({
      trigger: '.section3', start: 'top center',
      onEnter: () => animations.forEach((a) => a.kill()),
    });

    ScrollTrigger.create({
      trigger: '.section2', start: 'top center', once: true,
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to('.lightning-flash', { opacity: 1, duration: 0.1 })
          .to('.lightning-flash', { opacity: 0, duration: 0.35 })
          .to('.lightning-flash', { opacity: 1, duration: 0.05 }, '+=0.8')
          .to('.lightning-flash', { opacity: 0, duration: 0.35 })
          .to('.lightning-flash', { opacity: 1, duration: 0.08 }, '+=0.6')
          .to('.lightning-flash', { opacity: 0, duration: 0.4 });
      },
    });
  }, []);

  return (
    <>
    <div className="scroll-wrapper">
      <div className="rain-zone">
        <div className="lightning-flash"></div>
        <div className="rain-container">
          {Array.from({ length: 50 }).map((_, i) => (
            <div className="raindrop" key={i}></div>
          ))}
        </div>

        {/* ── SECTION 1: HERO ── */}
        <div id="home" className="hero" style={{
          backgroundImage: `url(${storm})`,
          backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center', width: '100%', height: '100vh',
        }}>
          <Navbar />
          <div className="cloud cloud1"></div>
          <div className="cloud cloud2"></div>
          <div className="cloud cloud3"></div>
          <div className="cloud cloud4"></div>
          <div className="cloud cloud5"></div>

          <div className="hero-text">
            <span className="hero-eyebrow">A Journey Inward</span>
            <h1>Healing begins<br/>with small steps.</h1>
            <p className="hero-quote">
              "You are enough. You are growing. And you're allowed to take your time."
            </p>
            <div className="hero-stats">
              <div className="stat"><span>∞</span><p>Strength in you</p></div>
              <div className="stat"><span>1</span><p>Step at a time</p></div>
              <div className="stat"><span>🌱</span><p>Growth is near</p></div>
            </div>
            <button className="hero-btn" onClick={() => document.getElementById('struggle').scrollIntoView({ behavior: 'smooth' })}>
              Begin Your Journey ↓
            </button>
          </div>
        </div>

        {/* ── SECTION 2: THE STRUGGLE ── */}
        <div id="struggle" className="section2" ref={sectionRef}>
          <div className="section2-text">
            <span className="section-eyebrow">Chapter I</span>
            <h1 ref={headingRef}>Not every day is sunny.</h1>
            <p ref={paragraphRef}>
              There are mornings when getting out of bed feels like climbing a mountain. When the mind loops the same 
              anxious thoughts on repeat, and the simplest tasks feel insurmountable. This is the storm — raw, heavy, 
              and exhausting. But here's the truth no one tells you: the storm is not a sign that you are broken. 
              It is a sign that you are human.
            </p>
          </div>

          <div className="story-cards-row">
            <div className="story-card dark-card">
              <div className="card-icon">🌧️</div>
              <h3>The Weight of Silence</h3>
              <p>Some pain is invisible. It lives behind a smile, hidden from the world. But silence doesn't make it smaller — sharing it, even just writing it down, begins the unraveling.</p>
            </div>
            <div className="story-card dark-card">
              <div className="card-icon">😶‍🌫️</div>
              <h3>When You Feel Numb</h3>
              <p>Numbness is not emptiness. It is your nervous system protecting you while it processes what is too much to feel at once. Rest in it. You are still alive. You are still here.</p>
            </div>
            <div className="story-card dark-card">
              <div className="card-icon">🌀</div>
              <h3>The Spiral</h3>
              <p>Healing isn't linear. You will have good days and terrible days in the same week. That's not failure — that's the natural rhythm of real recovery. Every loop brings you higher.</p>
            </div>
          </div>

          <div className="quote-block">
            <p className="quote-line">"You don't have to be positive all the time.</p>
            <p className="quote-line">It's perfectly okay to feel sad, angry, annoyed,</p>
            <p className="quote-line">frustrated, scared and anxious.</p>
            <p className="quote-line">Having feelings doesn't make you a negative person.</p>
            <p className="quote-line">It makes you human."</p>
            <span className="quote-author">— Lori Deschene</span>
          </div>
        </div>

        {/* ── SECTION 2.5: THE TURNING POINT ── */}
        <div id="turning" className="section-turning">
          <div className="turning-inner">
            <span className="section-eyebrow">Chapter II</span>
            <h2>The Moment Everything Shifts.</h2>
            <p>There is no dramatic turning point in most healing stories. There is just one quiet morning — a breath that feels a little lighter, a coffee that tastes a little richer, a thought that is a little kinder to yourself. That is the turning point. And it matters more than you know.</p>
          </div>
          <div className="turning-steps">
            <div className="step-card">
              <div className="step-num">01</div>
              <h4>Acknowledge the pain</h4>
              <p>The first act of healing is radical honesty. Say it out loud: "I am struggling." Not as defeat — but as the first act of courage.</p>
            </div>
            <div className="step-card">
              <div className="step-num">02</div>
              <h4>Choose one small thing</h4>
              <p>Not a grand plan. Not a transformation. Just one small thing today — drink water, step outside, text someone you love. That one thing is enough.</p>
            </div>
            <div className="step-card">
              <div className="step-num">03</div>
              <h4>Give yourself permission</h4>
              <p>Permission to rest. Permission to cry. Permission to not be okay. You are not a machine. You are allowed to process, to pause, to be fully human.</p>
            </div>
            <div className="step-card">
              <div className="step-num">04</div>
              <h4>Ask for a hand</h4>
              <p>Reaching out is not weakness — it is wisdom. A therapist, a friend, a journal, a hotline. You do not have to carry this alone. You were never meant to.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 3: THE HEALING ── */}
      <div id="healing" className="section3">
        <div className="sun-rays"></div>
        <div className="section3-text">
          <span className="section-eyebrow section-eyebrow--light">Chapter III</span>
          <h1>And then, the light returns.</h1>
          <p>After the storm, something shifts. The clouds begin to part, the sky opens up, and golden light pours through. It may not fix everything, but it brings warmth — and a reminder: every night ends with a sunrise. You're still here. You're still trying. And that means everything.</p>
        </div>

        <div className="healing-cards">
          <div className="story-card light-card">
            <div className="card-icon">☀️</div>
            <h3>Morning Rituals</h3>
            <p>How you start your day shapes your entire experience of it. Even five minutes of stillness — a warm drink, sunlight on your face, or a single grateful thought — can anchor you through anything.</p>
          </div>
          <div className="story-card light-card">
            <div className="card-icon">🫁</div>
            <h3>The Breath That Heals</h3>
            <p>Your breath is always there, waiting to bring you back. When the anxiety rises, breathe in for 4, hold for 4, out for 6. Your nervous system begins to calm. Your body is always on your side.</p>
          </div>
          <div className="story-card light-card">
            <div className="card-icon">📓</div>
            <h3>Write It Down</h3>
            <p>Journaling is not about perfect prose. It is about putting the chaos of your mind onto a page where it can no longer loop endlessly inside you. Three sentences a day can change your life.</p>
          </div>
        </div>

        <div className="birds">
          <div className="bird"></div>
          <div className="bird delay1"></div>
          <div className="bird delay2"></div>
        </div>
      </div>

      {/* ── SECTION 4: THE GROWTH ── */}
      <div id="growth" className="section4">
        <div className="section4-text">
          <span className="section-eyebrow section-eyebrow--green">Chapter IV</span>
          <h1>Growth Begins in the Quiet</h1>
          <p>
            In stillness, life begins to stir again. You may not notice it — but deep within, strength is returning.
            Every pause, every breath, every moment of rest is planting something new. Growth doesn't announce itself.
            It simply blooms when the conditions are right — and you are becoming those conditions.
          </p>
          <div className="affirmations">
            <div className="affirmation">I am allowed to grow at my own pace.</div>
            <div className="affirmation">My past does not define my future.</div>
            <div className="affirmation">I am worthy of love and peace.</div>
            <div className="affirmation">Every day I am becoming more myself.</div>
          </div>
        </div>
        <div className="left">
          <div className="growth-glow"></div>
          <div className="plant">
            <div className="stem"></div>
            <div className="leaf left-leaf"></div>
            <div className="leaf right-leaf"></div>
            <div className="leaf left-leaf-2"></div>
            <div className="leaf right-leaf-2"></div>
            <div className="flower-container">
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
          <div className="plant plant2">
            <div className="stem"></div>
            <div className="leaf left-leaf leaf2"></div>
            <div className="leaf right-leaf leaf2"></div>
            <div className="leaf left-leaf-2 leaf2"></div>
            <div className="leaf right-leaf-2 leaf2"></div>
            <div className="flower-container flower2">
              <div className="flower">
                <div className="center"></div>
                <div className="petal petal1"></div><div className="petal petal2"></div>
                <div className="petal petal3"></div><div className="petal petal4"></div>
                <div className="petal petal5"></div><div className="petal petal6"></div>
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
                <div className="petal petal1"></div><div className="petal petal2"></div>
                <div className="petal petal3"></div><div className="petal petal4"></div>
                <div className="petal petal5"></div><div className="petal petal6"></div>
              </div>
            </div>
            <div className="soil-base"></div>
            <div className="soil-base layer1"></div>
            <div className="soil-base layer2"></div>
          </div>
          <div className="butterfly butterfly1"><div className="wing left-wing"></div><div className="wing right-wing"></div><div className="body"></div></div>
          <div className="butterfly butterfly2"><div className="wing left-wing"></div><div className="wing right-wing"></div><div className="body"></div></div>
          <div className="butterfly butterfly3"><div className="wing left-wing"></div><div className="wing right-wing"></div><div className="body"></div></div>
          <div className="butterfly butterfly4"><div className="wing left-wing"></div><div className="wing right-wing"></div><div className="body"></div></div>
          <div className="butterfly butterfly5"><div className="wing left-wing"></div><div className="wing right-wing"></div><div className="body"></div></div>
        </div>
      </div>

      {/* ── SECTION 5: DAILY TOOLS ── */}
      <div className="section-tools">
        <span className="section-eyebrow section-eyebrow--blue">Chapter V</span>
        <h2>Tools for the Journey</h2>
        <p className="tools-subtitle">Small practices that build a life you love, one day at a time.</p>
        <div className="tools-grid">
          <div className="tool-card">
            <div className="tool-icon">🧘</div>
            <h4>Mindfulness</h4>
            <p>Even 5 minutes of quiet, present-moment awareness daily lowers cortisol, reduces anxiety and rewires the brain toward calm.</p>
          </div>
          <div className="tool-card">
            <div className="tool-icon">🚶</div>
            <h4>Movement</h4>
            <p>A 20-minute walk is clinically proven to reduce symptoms of depression. Your body and mind are one system — move the body, shift the mind.</p>
          </div>
          <div className="tool-card">
            <div className="tool-icon">🌙</div>
            <h4>Sleep Hygiene</h4>
            <p>Your brain literally cleans itself during sleep. Prioritizing 7-9 hours isn't laziness — it's the most powerful healing tool you have access to for free.</p>
          </div>
          <div className="tool-card">
            <div className="tool-icon">🫂</div>
            <h4>Connection</h4>
            <p>Loneliness is as harmful as smoking 15 cigarettes a day. Reach out to one person this week. A text, a call, a hug. Human connection is medicine.</p>
          </div>
          <div className="tool-card">
            <div className="tool-icon">🎨</div>
            <h4>Creative Expression</h4>
            <p>Art, music, writing, cooking — creating something gives the pain a form outside of you. It doesn't have to be good. It just has to be yours.</p>
          </div>
          <div className="tool-card">
            <div className="tool-icon">🌿</div>
            <h4>Nature Therapy</h4>
            <p>Spending 20 minutes in nature measurably reduces stress hormones. Trees, water, open sky — the world outside your head can reset the world inside it.</p>
          </div>
        </div>
      </div>

      {/* ── SECTION 6: THE FUTURE ── */}
      <div id="future" className="section5">
        <div className="section5-content">
          <span className="section-eyebrow section-eyebrow--light">Final Chapter</span>
          <h1>You Are Ready.</h1>
          <p>
            The storm has passed, the quiet has done its work, and now — you bloom. This is not the end of the story.
            This is where your real chapter begins. You have sat with your darkness, faced your fears, and chosen,
            again and again, to keep going. That is not a small thing. That is everything.
          </p>
          <p className="section5-sub">
            Carry this strength forward. Your journey is uniquely yours, and the world — your people, your future self —
            are better with your light in it. You are not what happened to you. You are what you choose to become.
          </p>
          <div className="final-quote">
            <p>"You survived everything you thought would break you.</p>
            <p>You are still here. That is the victory."</p>
          </div>
          <button className="hero-btn glow-btn" onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>
            ↑ Return to the Start
          </button>
        </div>
        <div className="floating-particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <div className="particle" key={i} style={{ animationDelay: `${(i * 0.5) % 5}s`, left: `${(i * 5) % 100}vw` }}></div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
