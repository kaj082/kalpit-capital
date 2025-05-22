import { useEffect, useState } from "react";

const dataText = [
  "Systematic Quantitative Research Platform",
  "Systematic Quantitative Research Platform",
];
const TypewriterHero = () => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = dataText[wordIndex];
    let timeout;

    if (!isDeleting && charIndex <= current.length) {
      setDisplayText(current.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex((ci) => ci + 1), 100);
    } else if (isDeleting && charIndex >= 0) {
      setDisplayText(current.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex((ci) => ci - 1), 50);
    } else {
      if (!isDeleting) {
        timeout = setTimeout(() => setIsDeleting(true), 700);
      } else {
        setIsDeleting(false);
        setWordIndex((wi) => (wi + 1) % dataText.length);
        timeout = setTimeout(() => setCharIndex(0), 200);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div className="relative w-full overflow-hidden">
      <h1 className="relative  flex items-center justify-center h-full text-[10px] md:text-sm font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-600 tracking-wider">
        {displayText}
        <span className="inline-block pl-0.5 w-[2px] h-6 bg-green-600 animate-pulse ml-1" />
      </h1>
    </div>
  );
};

export default TypewriterHero;
