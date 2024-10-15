"use client";

import { ThemeContext, ThemeType } from "../context/ThemeContext";
import { ReactNode, useContext, useEffect, useState } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const context = useContext(ThemeContext);
  const theme = context?.theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;
