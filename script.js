// 👉 Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// 🌟 Animate Navbar Links on Desktop Load
gsap.from(".nav-links li", {
    opacity: 0,
    y: -20,
    duration: 1,
    stagger: 0.2
});

// 🍔 Hamburger Toggle with GSAP Animation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener("click", () => {
    const isActive = navLinks.classList.contains("active");

    if (!isActive) {
        navLinks.classList.add("active");

        // 🎀 Slide In Nav
        gsap.fromTo(navLinks, 
            { x: 300, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
        );

        // ✨ Animate Each Link
        gsap.from(".nav-links li", {
            opacity: 0,
            x: 50,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out"
        });
    } else {
        // 🎀 Slide Out Nav
        gsap.to(navLinks, {
            x: 300,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                navLinks.classList.remove("active");
                navLinks.removeAttribute("style"); // Reset transform and opacity
            }
        });
    }
});

// ✨ Hero Section Animations
gsap.from(".text-container h2", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out"
});

gsap.from(".text-container p", {
    duration: 1.2,
    y: 50,
    opacity: 0,
    delay: 0.3,
    ease: "power2.out"
});

gsap.fromTo(".btn", 
    { opacity: 0, y: -40 }, 
    { opacity: 1, y: 30, duration: 1, delay: 1, ease: "power2.out" }
);

// 🌟 Images Slide In
gsap.from(".image-container.left img", {
    duration: 1,
    x: -100,
    opacity: 0,
    delay: 0.5,
    ease: "power2.out"
});

gsap.from(".image-container.right img", {
    duration: 1,
    x: 100,
    opacity: 0,
    delay: 1,
    ease: "power2.out"
});

// 💫 Flip Card Load-In
gsap.from(".flip-card", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
});

// 🪄 About Section
gsap.from(".ab1 h2", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 1,
    ease: "power2.out"
});

gsap.from(".ab1 p", {
    opacity: 0,
    x: 20,
    duration: 1,
    delay: 1,
    ease: "power2.out"
});

// ✨✨✨ Scroll Animations ✨✨✨

// Headings Reveal
gsap.from(".scroll-fade h2", {
    scrollTrigger: {
        trigger: ".scroll-fade h2",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out"
});

// Paragraphs Reveal
gsap.from(".scroll-fade p", {
    scrollTrigger: {
        trigger: ".scroll-fade p",
        start: "top 85%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    x: 40,
    duration: 1,
    delay: 0.2,
    ease: "power2.out"
});

// Images on Scroll
gsap.from(".scroll-img", {
    scrollTrigger: {
        trigger: ".scroll-img",
        start: "top 85%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power2.out"
});

// 🪄 Reusable Reveal Class
gsap.utils.toArray(".reveal").forEach(el => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out"
    });
});
