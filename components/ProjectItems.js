import React from "react";
import Link from "next/link";
import Image from "next/image";

function ProjectItems() {
  const projects = [
    {
      title: "Assurence",
      imageUrl: "/Project1.jpeg",
      linkUrl: "https://github.com/yassine-ux-dev/Assurence", // Add the appropriate link URL here
    },
    {
      title: "Aqoot Service", // You can change the title for the second project
      imageUrl: "/Project2.jpeg",
      linkUrl: "https://github.com/yassine-ux-dev/Aqoot-Service", // Add the appropriate link URL here
    },
    {
      title: "Cara", // You can change the title for the second project
      imageUrl:"/Project3.jpeg" ,
      linkUrl: "https://github.com/yassine-ux-dev/awesome-frontend-ecommerce.", // Add the appropriate link URL here
    },
  ];

  return (
    <div className="grid grid-cols-1  lg:grid-cols-6 xl:grid-cols-2 gap-10">
      {" "}
      {/* Responsive grid classes */}
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#fcfcfc] to-[#bdf8dd] "
        >
          <Image
            className="rounded-xl group-hover:opacity-10"
            src={project.imageUrl}
            alt={project.title} // Better alt text for accessibility
            width={600}
            height={600}
          />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl text-white tracking-wider text-center">
              {project.title}
            </h3>
            <p className="pb-4 pt-2 text-white text-center">React JS</p>
            <Link href={project.linkUrl}>
              <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                More Info
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectItems;
