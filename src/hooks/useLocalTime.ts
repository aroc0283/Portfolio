"use client";

import { useState, useEffect } from "react";

function getLocalTime() {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Denver",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());
}

export function useLocalTime() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setTime(getLocalTime());
    const id = setInterval(() => setTime(getLocalTime()), 60_000);
    return () => clearInterval(id);
  }, []);

  return time;
}
