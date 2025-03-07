import React, { useEffect, useState } from "react";
const Loadingscreen = ({ onComplete }) => {
  const [text, settext] = useState("");

  const fulltext = "<hello world!>";
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      settext(fulltext.slice(0, index++));
      // index++;
      if (index > fulltext.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-[min(10vw,70px)] font-mono font-bold ">
        {text} <span className="animate-blink-1 ml-1"> | </span>
      </div>

      <div className="w-[300px] h-[2px] bg-gray-100 rounded relative overflow-hidden">
        <div className="w-[30%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar "></div>
      </div>
    </div>
  );
};

export default Loadingscreen;
