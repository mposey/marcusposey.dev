import { useEffect, useState } from "react";

type Props = {
  render: (isMobile: boolean) => JSX.Element | null;
  threshold?: number;
};

const MOBILE_WIDTH_THRESHOLD = 685;

const calcIsMobile = (t?: number) => {
  const threshold = t ? t : MOBILE_WIDTH_THRESHOLD;
  return typeof window !== "undefined" && window.innerWidth <= threshold;
};

const PlatformContext = ({ render, threshold }: Props) => {
  const [isMobile, setIsMobile] = useState(calcIsMobile(threshold));

  useEffect(() => {
    const listener = () => {
      setIsMobile(calcIsMobile(threshold));
    };
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  return render(isMobile);
};

export default PlatformContext;
