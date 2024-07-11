import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  showHero?: boolean;
};

const Layout: React.FC<Props> = ({ children, showHero = false }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero && <Hero />}
      <div className="container mx-auto flex-1 py-10"> {children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
