import { ReactNode } from "react";
import Navigation from "../components/navigation/Navigation";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {children}
      <Navigation />
    </div>
  );
};

export default Layout;
