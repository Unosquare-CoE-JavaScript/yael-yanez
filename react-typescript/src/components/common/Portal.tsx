import { FC, useEffect } from "react";
import { createPortal } from "react-dom";

const Portal: FC = ({ children }) => {
  const root = document.getElementById("portal");
  const el = document.createElement("div");

  useEffect((): (() => void) => {
    root?.appendChild(el);
    return () => root?.removeChild(el);
  }, [el, root]);

  return createPortal(children, el);
};

export default Portal;
