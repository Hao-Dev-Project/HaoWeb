"use client";
import { useEffect, useState } from "react";

// Types the text once, then stays. Screen readers get the full text immediately.
export default function Typewriter({ text, speed = 160 }: { text: string; speed?: number }) {
  const [count, setCount] = useState(0);
  const done = count >= text.length;

  useEffect(() => {
    if (done) return;
    const timer = setTimeout(() => setCount((c) => c + 1), count === 0 ? 400 : speed);
    return () => clearTimeout(timer);
  }, [count, done, speed]);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-flex items-center min-h-[1em]">
        {text.slice(0, count)}
        <span
          className={`ml-1 font-light text-amber-accent select-none transition-opacity duration-700 ${
            done ? "opacity-0 delay-[1500ms]" : "opacity-100"
          }`}
        >
          |
        </span>
      </span>
    </>
  );
}
