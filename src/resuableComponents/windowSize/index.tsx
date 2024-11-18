'use client'
import { useEffect,useState } from "react";

const useSize = () => {
    if (typeof window !== "undefined") {
        // browser code
      
    const [windowSize, setWindowSize] = useState(window.innerWidth);
  
    useEffect(() => {
      const windowSizeHandler = () => {
        setWindowSize(window.innerWidth);
      };
      window.addEventListener("resize", windowSizeHandler);
  
      return () => {
        window.removeEventListener("resize", windowSizeHandler);
      };
    }, []);
  
    return windowSize;
};
  };

  export default useSize;
