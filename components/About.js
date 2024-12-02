import React from "react";
import ParticlesContainer from "./ParticlesContainer";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

const About = () => {
  return (
    <div
      id="about"
      className=" min-h-screen  text-green-400 flex justify-center items-center "
    >
      {/* Content Grid */}
      <div className=" z-10 grid grid-cols-1 mt-[100px] md:grid-cols-2 gap-8 p-10 mx-h-9xl max-w-6xl">
        {/* First Column */}
        <div className="bg-gray-900 p-8 rounded-[50px] shadow-lg h-[750px]">
          <div className="text-[#00ff00] flex items-center flex-col animate-pulse w-full">
            {" "}
            {/* Added w-full */}
            <div className="text-lg">
              <b> -------------------------------</b>{" "}
            </div>
            <div className="text-xl tracking-wide py-2 font-bold">
              I&apos;am Enjoying
            </div>
            <div className="text-lg">
              <b> -------------------------------</b>{" "}
            </div>
          </div>

          <ul className="space-y-4 mt-8">
            {" "}
            {/* Added mt-8 for spacing */}
            <li>
              <h3 className="font-semibold">🛠️ Web Developpement</h3>
              <ul className="list-disc pl-5">
                <li>Frontend Development </li>
                <li>Backend Development </li>
                <li>Database Management</li>
              </ul>
            </li>
            <li>
              <h3 className="font-semibold">💻 Full Stack Web Development</h3>
              <p>Full stack</p>
            </li>
            <li>
              <h3 className="font-semibold">📱 Mobile Application</h3>
              <ul className="list-disc pl-5">
                <li>Android</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Second Column */}
        <div className="bg-gray-900 p-8 rounded-[50px]  shadow-lg h-[750px]">
          <div className="text-[#00ff00] flex items-center flex-col animate-pulse w-full">
            {" "}
            {/* Added w-full */}
            <div className="text-lg">
              <b> -------------------------------</b>{" "}
            </div>
            <div className="text-xl tracking-wide py-2 font-bold">My World</div>
            <div className="text-lg">
              <b> -------------------------------</b>{" "}
            </div>
          </div>
          <ul className="space-y-5 mt-8">
            <li>
              <h3 className="font-semibold">⚛️ React</h3>
            </li>
            <li>
              <h3 className="font-semibold">💻 MongoDB</h3>
            </li>
            <li>
              <h3 className="font-semibold"> 📜 JavaScript </h3>
            </li>
            <li>
              <h3 className="font-semibold"> 🌐 .NET </h3>
            </li>
            <li>
              <h3 className="font-semibold"> 🧩 Blazor </h3>
            </li>

            <li>
              <h3 className="font-semibold"> 💎 C#</h3>
            </li>
          </ul>
          <div className="mt-2">
            <video
              width="290"
              height="1px"
              controls
              loop
              autoPlay
              muted
              className="rounded-[1000px]"
            >
              <source src="\coding.mp4" type="video/mp4" className="top-5" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <ParticlesContainer />
    </div>
  );
};

export default About;
