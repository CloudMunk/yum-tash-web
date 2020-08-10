import { useState, useEffect } from "react";

function ViewPort() {
    const isWindowClient = typeof window === "object";

    const [windowSize, setWindowSize] = useState(
      isWindowClient ? window.innerWidth : undefined
    );
    return windowSize;
  }
  

export default ViewPort