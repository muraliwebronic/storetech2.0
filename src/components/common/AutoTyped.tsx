"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

interface AutoTypedProps {
  strings: string[];
  color?: string; // Expecting Tailwind classes like "text-blue-500"
  cursorChar?: string;
  typeSpeed?: number;
  backSpeed?: number;
  startDelay?: number;
  loop?: boolean;
}

const AutoTyped: React.FC<AutoTypedProps> = ({
  strings,
  color = "text-black", // Default fallback
  cursorChar = "|",
  typeSpeed = 50,
  backSpeed = 30,
  startDelay = 100,
  loop = true,
}) => {
  // 1. Create a reference to store the DOM element the typing happens in
  const el = useRef<HTMLSpanElement>(null);
  
  // 2. Create a reference to store the Typed instance itself
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      // 3. Initialize Typed.js logic
      typed.current = new Typed(el.current, {
        strings: strings,
        typeSpeed: typeSpeed,
        backSpeed: backSpeed,
        startDelay: startDelay,
        loop: loop,
        cursorChar: cursorChar,
        // This ensures the cursor also inherits the color if needed, 
        // or you can target .typed-cursor in your globals.css
        autoInsertCss: true, 
      });
    }

    // 4. Cleanup: Destroy instance on unmounting to prevent memory leaks
    return () => {
      typed.current?.destroy();
    };
  }, [strings, typeSpeed, backSpeed, startDelay, loop, cursorChar]);

  return (
    <span className={`inline-block ${color}`}>
      <span ref={el} />
    </span>
  );
};

export default AutoTyped;