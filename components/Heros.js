import { fadeIn } from "../variants";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col ">
      <div className=" z-10 grid mt-[100px] grid-cols-1 lg:grid-cols-12 min-h-screen items-center  justify-between gap-4 lg:gap-0">
        {/* Text Section */}
        <div className="col-span-7 place-self-center">
          <h1 className="name text-4xl  md:text-2xl lg:text-4xl">
            𝐘𝐚𝐬𝐬𝐢𝐧𝐞 𝐁𝐞𝐧 𝐂𝐡𝐚𝐫𝐫𝐚𝐝𝐚 <br />
          </h1>
          <p className="p max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-6 xl:mb-[20px]">
            <b>
              First-Year Master&apos;s Student in Software Engineering at @ISIMM{" "}
              <br /> Focused on web development,I enjoy coding and solving
              problems <br /> Graduating in 2027.
            </b>
          </p>

          <a
            href="/YassineBenCharrada.pdf"
            download="YassineBenCharrada-CV
          "
          >
            <button
              variant="ghost"
              className="bg-[#d3e8d7] hover:bg-[#8f9e92] text-black rounded-2xl transition-colors w-[200px] h-[50px] flex items-center justify-center"
              onClick={() => console.log("Ping!")}
            >
              {" "}
              <span className="flex items-center">
                {" "}
                Download CV{" "}
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 10V4a1 1 0 0 0-1-1H9.914a1 1 0 0 0-.707.293L5.293 7.207A1 1 0 0 0 5 7.914V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2M10 3v4a1 1 0 0 1-1 1H5m5 6h9m0 0-2-2m2 2-2 2"
                  />
                </svg>
              </span>{" "}
            </button>
          </a>
        </div>

        {/* Image Section */}
        <div className="col-span-5 place-self-center lg:mt-0 relative">
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            {/* Centered Box */}
            <div className="box1 absolute  transform -translate-x-1/2 -translate-y-1/2 top-0.5/2 left-1/2 xl:top-1/2">
              <div className="box absolute  transform -translate-x-1/2 -translate-y-1/2 top-0.5/2 left-1/2 xl:top-1/2">
                {/* Add content or dimensions if needed */}
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-12 flex items-center justify-center transform -translate-x-1/2 left-1/2 mt-[-500px] relative hidden md:flex">
          <a href="#about">
            <div className="mouse-scroll"></div>
          </a>
          <a href="#about">
            <span className="text-sm font-medium ml-2">Scroll Down</span>
          </a>
        </div>

        {/* Particles Container */}

        {/* Mouse Scroll Indicator */}
      </div>

      <div className="dox flex justify-center items-center flex-col mt-[10px]">
        <h2 className="text-4xl font-bold">Skills</h2>
        <span className="text-center">My technical skills</span>
      </div>
    </div>
  );
};

export default Home;
