import React from "react";
import {
  CIcon,
  CppIcon,
  PythonIcon,
  JsIcon,
  TsIcon,
  ReactIcon,
  NextjsIcon,
  TailwindcssIcon,
  NodejsIcon,
  ExpressIcon,
  ApiIcon,
  ChatIcon, 
  GithubIcon,
  MongoIcon,
  MysqlIcon,
  GitIcon,
  Postsql, 
  PrismaIcon,
} from "./TechIcons"; 

import TechButton from "./TechButton";
import ReachOutDirectly from "./ReachOutDirectly";
import StartProject from "./StartProject";

const Profile = () => {
  return (
    <>
      <div className="relative pt-24 pb-16 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-tl from-teal-200 to-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-12 mb-16 relative z-10">
          <div className="relative flex-shrink-0">
            <img
              alt="Vishal Dangwal"
              className="w-48 h-48 md:w-64 md:h-64 aspect-square object-cover rounded-3xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-300"
              src="Images\vishal dangwal.png"
            ></img>
            <span className="absolute -bottom-2 -right-2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full shadow-lg">
              Developer
            </span>
          </div>

          <div className="flex-grow">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-2 tracking-tight text-gray-900 leading-tight">
              Vishal Dangwal
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 font-semibold mb-4">
              Skilled in Web Development &amp; Problem Solving Enthusiast
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium flex items-center shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-code mr-2"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>{" "}
                Engineering Student at NITJ
              </span>
            </div>

            <div className="text-left">
              <div className="text-xl md:text-2xl font-medium text-gray-800 flex items-center mb-4 justify-center lg:justify-start">
                <span className="mr-3 text-3xl">🙏</span> Namaste!
              </div>
              <p className="mb-6 leading-relaxed text-gray-700 max-w-prose">
                I'm a passionate problem solver with a solid foundation in Data
                Structures and Algorithms (C++) and a drive for modern web
                development. I specialize in crafting responsive, user-friendly
                interfaces using technologies like React and Tailwind CSS,
                always focusing on clean, maintainable, and efficient code that
                optimizes performance and elevates user experience. My toolkit
                further includes JavaScript, TypeScript, Prisma, and SQL. I'm
                deeply committed to continuous learning, improving through
                hands-on development, and finding practical solutions to
                real-world challenges. Just like navigating the winding paths of
                Uttarakhand, I thrive on exploring new ways to build robust and
                reliable digital experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16 border-t border-[#f0f0f0] pt-12">
          <div className="flex items-center mb-8">
            <div className="p-3 rounded-xl shadow-xl bg-[#e0f2f7] text-[#03a9f4] mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sliders"
              >
                <line x1="4" y1="21" x2="4" y2="14"></line>
                <line x1="4" y1="10" x2="4" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="3"></line>
                <line x1="20" y1="21" x2="20" y2="16"></line>
                <line x1="20" y1="12" x2="20" y2="3"></line>
                <circle cx="4" cy="12" r="2"></circle>
                <circle cx="12" cy="10" r="2"></circle>
                <circle cx="20" cy="14" r="2"></circle>
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Technical Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-blue-200 px-4 py-2 rounded">
                Languages
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-3 pt-2">
                <TechButton label="C" icon={CIcon} />
                <TechButton label="C++" icon={CppIcon} />
                <TechButton label="Python" icon={PythonIcon} />
                <TechButton label="JavaScript" icon={JsIcon} />
                <TechButton label="TypeScript" icon={TsIcon} />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-blue-200 px-4 py-2 rounded">
                FrontEnd
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-3 pt-2">
                <TechButton label="React" icon={ReactIcon} />
                <TechButton label="Next.js" icon={NextjsIcon} />
                <TechButton label="Tailwind CSS" icon={TailwindcssIcon} />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-blue-200 px-4 py-2 rounded">
                Backend
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-3 pt-2">
                <TechButton label="Node.js" icon={NodejsIcon} />
                <TechButton label="Express.js" icon={ExpressIcon} />
                <TechButton label="APIs" icon={ApiIcon} />
                <TechButton label="OpenAI API" icon={ChatIcon} />
                <TechButton label="Github API" icon={GithubIcon} />
                <TechButton label="Third-Party Integrations" icon={ApiIcon} />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-blue-200 px-4 py-2 rounded">
                Databases & ORM
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-3 pt-2">
                <TechButton label="MongoDB" icon={MongoIcon} />
                <TechButton label="MySQL" icon={MysqlIcon} />
                <TechButton label="PostgreSQL" icon={Postsql} />
                <TechButton label="Prisma ORM" icon={PrismaIcon} />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-blue-200 px-4 py-2 rounded">
                Version Control & Tools
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-3 pt-2">
                <TechButton label="Git" icon={GitIcon} />
                <TechButton label="GitHub" icon={GithubIcon} />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 border-t border-[#f0f0f0] pt-12">
          <div className="flex items-center mb-8">
            <div className="p-3 rounded-xl bg-[#e6ffee] text-[#22c55e] mr-4 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-graduation-cap"
              >
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                <path d="M22 10v6"></path>
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Education
            </h2>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors duration-300">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                <h3 className="font-semibold text-lg text-gray-800">
                  Dr. B. R. Ambedkar National Institute of Technology Jalandhar
                </h3>
                <span className="text-sm text-gray-500 mt-1 sm:mt-0">
                  Aug 2023 — Jun 2027
                </span>
              </div>
              <p className="text-gray-600 mb-1">
                B.Tech in Information Technology
              </p>
              <p className="text-sm text-gray-500">Cumulative GPA: 8.47/10.0</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors duration-300">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                <h3 className="font-semibold text-lg text-gray-800">
                  Kendriaya Vidyalaya Suranussi Jalandhar
                </h3>
                <span className="text-sm text-gray-500 mt-1 sm:mt-0">
                  Apr 2020 — Mar 2022
                </span>
              </div>
              <p className="text-gray-600 mb-1">Interdemiate in Non-Medical</p>
              <p className="text-sm text-gray-500">Percentage: 92 %</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center py-12 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Let's Build Something Amazing!
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-prose mx-auto">
          I'm always eager to collaborate on exciting projects. Feel free to
          reach out and let's discuss your ideas.
        </p>
      </div>
      <ReachOutDirectly />
      <StartProject />
    </>
  );
};

export default Profile;