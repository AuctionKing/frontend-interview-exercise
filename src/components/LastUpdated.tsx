"use client";

import { useState } from "react";

export const LastUpdated = () => {
  const [time] = useState<string>(() => new Date().toLocaleString());

  return <span>Last Updated: {time}</span>;
};
