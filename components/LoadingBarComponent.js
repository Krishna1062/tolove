"use client"; // Mark this as a client component

import { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";

export default function LoadingBarComponent({ progress }) {
  const [internalProgress, setInternalProgress] = useState(progress);

  useEffect(() => {
    setInternalProgress(progress);
  }, [progress]);

  return <LoadingBar color="#FF0000" progress={internalProgress} />;
}
