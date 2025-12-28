import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";
import { counterContext } from "./contextCounter";
export const ContextComponent = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(false);

  const value = { isEnglish, setIsEnglish };
  return (
    <counterContext.Provider value={{ value }}>
      {children}
      <Analytics />
    </counterContext.Provider>
  );
};
