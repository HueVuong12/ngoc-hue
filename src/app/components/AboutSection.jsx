"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import TabButton from "./TabButton";


const calculateExperience = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();

  let totalMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  if (totalMonths < 0) totalMonths = 0;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years > 0) {
    return `${years} yr ${months} mo`;
  }
  return `${totalMonths} mo`;
};

const totalExperience = calculateExperience("2025-07-01");

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [expandedWork, setExpandedWork] = useState(null);
  const [expandedCert, setExpandedCert] = useState(false);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-lg text-justify hover:shadow-purple-500/30 transition-all duration-300 space-y-4">
          <div className="space-y-3 text-gray-300">
            <p>
              <span className="font-semibold text-purple-300">Automation Testing:</span>{" "}
              Selenium WebDriver, TestNG, JUnit, REST Assured, CI/CD, JMeter,
              Performance Testing, Security Testing (OWASP ZAP).
            </p>
            <p>
              <span className="font-semibold text-purple-300">Manual Testing:</span>{" "}
              Test Case design, Test Execution, Bug Tracking (Jira), Regression & Smoke Testing, API Testing (Postman), JMeter, Security Testing (OWASP ZAP), Knowledge of SDLC & STLC.
            </p>
            <p>
              <span className="font-semibold text-purple-300">Database:</span>{" "}
              MongoDB, SQL.
            </p>

            <p>
              <span className="font-semibold text-purple-300">Other Tools:</span>{" "}
              Git, Figma.
            </p>
          </div>
        </div>
      ),
    },

    {
      title: "Work Experience",
      id: "work_experience",
      content: (
        <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-lg text-gray-300 hover:shadow-purple-500/30 transition-all duration-300 space-y-5">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-purple-400">FPT IS</h3>

            <span className="text-sm text-gray-400">
              Jul 2025 – Present ·{" "}
              <span className="text-purple-300 font-medium">
                {totalExperience}
              </span>
            </span>
          </div>

          <div>
            <button
              onClick={() =>
                setExpandedWork(expandedWork === "fresher" ? null : "fresher")
              }
              className="w-full flex justify-between items-center text-left text-gray-300 font-medium mt-4 hover:text-purple-300 transition-all"
            >
              <span>
                Software Tester (Fresher){" "}
                <span className="text-gray-400 text-sm">| Nov 2025 – Present</span>
              </span>
              {expandedWork === "fresher" ? (
                <ChevronUp className="w-5 h-5 text-purple-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-purple-400" />
              )}
            </button>
            {expandedWork === "fresher" && (
              <div className="space-y-3 mt-3 animate-fadeIn">
                <div>
                  <p className="text-gray-200 font-semibold">Internal Mobile Application</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">

                  </ul>
                </div>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() =>
                setExpandedWork(expandedWork === "intern" ? null : "intern")
              }
              className="w-full flex justify-between items-center text-left text-gray-300 font-medium mt-4 hover:text-purple-300 transition-all"
            >
              <span>
                Software Tester (Intern){" "}
                <span className="text-gray-400 text-sm">| Jul 2025 – Oct 2025</span>
              </span>
              {expandedWork === "intern" ? (
                <ChevronUp className="w-5 h-5 text-purple-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-purple-400" />
              )}
            </button>

            {expandedWork === "intern" && (
              <div className="space-y-3 mt-3 animate-fadeIn">
                <div>
                  <p className="text-gray-200 font-semibold">National Electronic Identification and Authentication System</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>
                      Tested a national digital identity mini app used by millions of
                      citizens across Vietnam.
                    </li>
                    <li>
                      Designed and executed functional, UI, and API test cases for
                      authentication and user management modules.
                    </li>
                    <li>
                      Performed regression testing during release cycles to ensure
                      system reliability and compliance with government standards.
                    </li>
                    <li>
                      Collaborated with developers and business analysts to track,
                      verify, and resolve defects efficiently.
                    </li>
                    <li>Tools: Postman, Swagger, Jira, Excel.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
        </div>
      ),
    },

    {
      title: "Education",
      id: "education",
      content: (
        <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 space-y-3 text-gray-300 text-justify">
          <h3 className="text-lg font-semibold text-purple-400">
            Industrial University of Ho Chi Minh City
          </h3>
          <p>
            <span className="font-semibold text-purple-300">Major:</span> Software Engineering
          </p>
          <p>
            <span className="font-semibold text-purple-300">Duration:</span> 2021 – Present
          </p>
        </div>
      ),
    },

    {
      title: "Certificates",
      id: "certificates",
      content: (
        <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-lg text-gray-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-300">

          <p className="mb-3 text-sm md:text-base">
            <span className="font-semibold text-purple-400">TOEIC:</span>{" "}
            655 (Listening & Reading), issued by IIG Vietnam (2025)
          </p>

          <div className="mt-1 group">
            <button
              onClick={() => setExpandedCert(!expandedCert)}
              className="w-full text-left flex items-start gap-3"
            >
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-purple-400 text-sm md:text-base group-hover:text-purple-300 transition-colors leading-snug">
                  AOTS Scholarship – Japan / Technical Training Program
                </p>
                <p className="font-semibold text-purple-400 text-sm md:text-base group-hover:text-purple-300 transition-colors leading-snug mt-0.5">
                  Funded by the Japanese Government (2025)
                </p>

              </div>

              <div className="flex-shrink-0 pt-0.5">
                {expandedWork ? (
                  <ChevronUp className="w-5 h-5 text-purple-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-purple-400" />
                )}
              </div>
            </button>
          </div>

          {expandedCert && (
            <div className="mt-3 space-y-2 animate-fadeIn text-sm md:text-base leading-relaxed">
              <p>
                <span className="font-semibold text-purple-400">Duration:</span>{" "}
                Jul 2025 – Oct 2025
              </p>

              <p className="text-justify">
                <span className="font-semibold text-purple-400">Study Topics:</span>{" "}
                Low-Code/No-code Development, Web Application Development with React, User Authentication & Basic Web Security with Laravel and MySQL, Japanese for IT and Japanese Culture.
              </p>

              <p>
                <span className="font-semibold text-purple-400">Score:</span>{" "}
                8.89 / 10
              </p>

              <p className="text-justify">
                <span className="font-semibold text-purple-400">Skills Acquired:</span>{" "}
                Built and tested web applications using React, Laravel, and MySQL, Implemented user authentication and applied basic web security practices, Gained hands-on experience with low-code/no-code platforms for rapid development, Improved skills in debugging, verifying functionalities, and ensuring application reliability, Developed basic communication skills in Japanese for IT and understanding of Japanese work culture.              </p>

              <a
                href="/aots.jpg"
                download
                className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-purple-200 bg-[#20132f]/70 border border-purple-500/40 overflow-hidden group transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-purple-400 group-hover:translate-y-[2px] transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4m-8 8h8" />
                </svg>
                <span className="relative z-10 group-hover:text-purple-100 transition-colors duration-300">
                  Download Certificate
                </span>
                <span className="absolute inset-0 rounded-full border border-purple-500/50 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-500"></span>
              </a>
            </div>
          )}

          <p className="mt-4 text-sm md:text-base">
            <span className="font-semibold text-purple-400">Observation Internship:</span>{" "}
            MobiFone Corporation (March 2025)
          </p>
        </div>
      ),
    },
    {
      title: "Awards",
      id: "awards",
      content: (
        <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-lg space-y-2 hover:shadow-purple-500/30 transition-all duration-300 text-gray-300">
          <p className="text-sm md:text-base">
            <span className="font-semibold text-purple-400">
              Tet Friendship Scholarship
            </span>
            <span className="text-gray-400"> · Jan 2026</span>
          </p>
        </div>

      ),
    }
  ];

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="About Me"
          width={500}
          height={500}
          className="rounded-2xl"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify text-gray-300">
            I am a Tester Automation with a passion for ensuring high-quality products
            through meticulous testing and attention to detail. I have experience working
            with manual and automated testing processes, using tools such as Postman,
            Selenium WebDriver, JUnit, TestNG, and Jira.
            <br />
            I have a good understanding of SDLC and Agile methodologies, and I collaborate
            closely with developers to detect and resolve issues early.
            <br />
            I am a quick learner, always seeking to expand my testing knowledge,
            and excited to contribute to building reliable, user-friendly applications.
          </p>

          <div className="flex flex-wrap gap-2 justify-start mt-8">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>

          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
