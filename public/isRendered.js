import React, { useEffect, useState } from "react";

//returns true if the client-side is rendered
function isRendered() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  });

  return mounted;
}

export default isRendered;
