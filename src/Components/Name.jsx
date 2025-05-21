import React, { useState, useEffect, useRef } from "react";

const Name = () => {
  const titles = [
    "Passionate Programmer",
    "Competitive Programmer",
    "Full Stack Developer",
    "JavaScript Enthusiast",
    "React Specialist",
    "Node.js Developer",
    "CSS & Tailwind Wizard",
    "Problem Solver",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeedRef = useRef(100);
  const deletionSpeedRef = useRef(50);
  const animationDelayRef = useRef(1500);
  const newWordPauseRef = useRef(500); 

  useEffect(() => {
    let typer;

    const handleTyping = () => {
      const currentTitle = titles[currentIndex];
      let currentTypingSpeed;

      if (isDeleting) {
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
        currentTypingSpeed = deletionSpeedRef.current; 
      } else {
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
        currentTypingSpeed = typingSpeedRef.current; 
      }

      if (!isDeleting && displayedText === currentTitle) {
        currentTypingSpeed = animationDelayRef.current;
        setIsDeleting(true);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        currentTypingSpeed = newWordPauseRef.current; 
      }
      typer = setTimeout(handleTyping, currentTypingSpeed);
    };

    typer = setTimeout(handleTyping, typingSpeedRef.current); 

    return () => clearTimeout(typer);
  }, [displayedText, isDeleting, currentIndex, titles]);

  return (
    <div className="h-screen px-4 md:px-12 mx-auto relative flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(rgb(224, 224, 224) 1px, transparent 1px), linear-gradient(to right, rgb(240, 240, 240) 1px, transparent 1px), linear-gradient(to bottom, rgb(240, 240, 240) 1px, transparent 1px)",
            backgroundSize: "15px 15px, 30px 30px, 30px 30px", 
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-white/70"></div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-80 md:h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-80 md:h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-[2000ms] z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-60 md:h-60 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-[4000ms] z-0"></div>

      <div className="absolute w-4 h-4 bg-purple-300 rounded-full top-[10%] left-[10%] animate-float animation-delay-[500ms] z-10"></div>
      <div className="absolute w-3 h-3 bg-green-300 rounded-full bottom-[15%] left-[25%] animate-float animation-delay-[1500ms] z-10"></div>
      <div className="absolute w-5 h-5 bg-yellow-300 rounded-full top-[20%] right-[20%] animate-float animation-delay-[3000ms] z-10"></div>
      <div className="absolute w-2 h-2 bg-blue-300 rounded-full bottom-[5%] right-[10%] animate-float animation-delay-[2500ms] z-10"></div>

      <div className="flex flex-col items-center relative z-20 text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4
                       text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500
                       animate-gradient-shift
                       transition-all duration-300 hover:scale-105 hover:animate-pulse-glow"> 
          Hello, I am Vishal Dangwal
        </h1>
        <p className="text-lg md:text-xl text-[#6b6b6b] font-light max-w-2xl animate-float-y-slow">
          Skilled in Web Development and Problem Solving Enthusiast
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-[200%] h-12 bg-gray-100/50 overflow-hidden flex items-center z-10">
        <div className="flex animate-move-left text-gray-500 font-medium text-sm md:text-base whitespace-nowrap will-change-transform">
          {Array(10).fill(
            <span className="mx-4">
              • Competitive Programming • Full Stack Development • React • Node.js • JavaScript • Problem Solving •
            </span>
          )}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none z-30 opacity-50"
           style={{
             background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.05) 70%, rgba(0,0,0,0.1) 100%)'
           }}>
      </div>
    </div>
  );
};

export default Name;