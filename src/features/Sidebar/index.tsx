import Mobile from "./Mobile";
import Desktop from "./Desktop";
import useWindowSize from "@/hooks/useWindowSize";
export default ({ children }: { children: React.ReactNode }) => {
  const [ width ] = useWindowSize();
  if (width > 768) return <Desktop>{children}</Desktop>;
  return <Mobile>{children}</Mobile>;
};

