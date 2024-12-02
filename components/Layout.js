import { Sora } from "@next/font/google";
import ParticlesContainer from "../components/ParticlesContainer";

//font setting
const sora = Sora({
  subsets: ["latin"],
  variable: "---font-sora",
  weight: ["100", "200", "300", "400", "500", "700", "800"],
});

//component
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";
import About from "../components/About";
import Experience from "./Experience";
import Projects from "./ProjectsBtn";
import Contact from "./Contact";
import StarsCanvas from "./Canvas/Stars";
import Heros from "../components/Heros";
const Layout = ({ children }) => {
  return (
    <div
      className={
        "page bg-black bg-cover text-white  bg-no-repreat ${sora.variable} font-sora relative"
      }
    >
      <ParticlesContainer />
      <TopLeftImg />
      <Nav />
      <Header />
      <Heros />
      <About />
      <Experience />
      <Projects />
      <div className="relative bg-black z-0">
        <Contact />
        <StarsCanvas className="z-20" />
      </div>
    </div>
  );
};

export default Layout;
