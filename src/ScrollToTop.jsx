import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const data = useLocation();

  useEffect(() => {
    return window.scrollTo(0, 0);
  }, [data.pathname]);

  return null;
}