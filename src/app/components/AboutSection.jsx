"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-lg text-justify hover:shadow-purple-500/30 transition-all duration-300 space-y-4">
        <div className="space-y-3 text-gray-300">
          <p>
            <span className="font-semibold text-purple-300">Automation Testing:</span>{" "}
            Selenium WebDriver, TestNG, JUnit, Postman, REST Assured, CI/CD, JMeter,
            Performance Testing.
          </p>

          <p>
            <span className="font-semibold text-purple-300">Frontend:</span>{" "}
            React.js, React Query, Tailwind CSS.
          </p>

          <p>
            <span className="font-semibold text-purple-300">Database:</span>{" "}
            MongoDB, SQL.
          </p>

          <p>
            <span className="font-semibold text-purple-300">Mobile:</span>{" "}
            React Native.
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
        {/* Company Header */}
        <div>
          <h3 className="text-xl font-semibold text-purple-400">
            FPT IS
          </h3>
        </div>

        {/* Fresher Role */}
        <div>
          <p className="text-gray-300 font-medium">
            Software Tester (Fresher) <span className="text-gray-400 text-sm">| Nov 2025 – Present</span>
          </p>

        </div>

        {/* Intern Role */}
        <div>
          <p className="text-gray-300 font-medium mt-4">
            Software Tester Intern <span className="text-gray-400 text-sm">| Jul 2025 – Oct 2025</span>
          </p>

          <div className="space-y-3 mt-1">
            <div>
              <p className="text-gray-200 font-semibold">VNeID Mini App</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Tested a national digital identity mini app used by millions of citizens across Vietnam.</li>
                <li>Designed and executed functional, UI, and API test cases for authentication and user management modules.</li>
                <li>Performed regression testing during release cycles to ensure system reliability and compliance with government standards.</li>
                <li>Collaborated with developers and business analysts to track, verify, and resolve defects efficiently.</li>
                <li>Tools: Postman, Jira, Excel.</li>
              </ul>
            </div>

            <div>
              <p className="text-gray-200 font-semibold">Di_HDBank Mobile App</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Conducted functional, UI, and API testing for mobile banking features used nationwide.</li>
                <li>Performed regression testing across Android and iOS to ensure feature consistency and stability.</li>
                <li>Verified API responses and optimized end-user experience through detailed defect analysis.</li>
                <li>Collaborated with developers to resolve issues and improve product quality.</li>
                <li>Tools: Postman, Jira, TestRail.</li>
              </ul>
            </div>
          </div>
        </div>
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
      <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-lg space-y-4 hover:shadow-purple-500/30 transition-all duration-300 text-gray-300">
        <p>
          <span className="font-semibold text-purple-300">TOEIC:</span>{" "}
          655 (Listening & Reading), issued by IIG Vietnam (2025)
        </p>
        <p>
          <span className="font-semibold text-purple-300">Observation Internship:</span>{" "}
          MobiFone Corporation (March 2025)
        </p>
      </div>
    ),
  },

  {
    title: "Awards",
    id: "awards",
    content: (
      <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-lg space-y-4 text-justify hover:shadow-purple-500/30 transition-all duration-300 text-gray-300">
        <h3 className="text-lg font-semibold text-purple-400">
          AOTS Scholarship – Japan / Technical Training Program Funded by the Japanese Government (2025)
        </h3>
        <p>
          Participated in a training course organized by{" "}
          <span className="font-semibold text-white">
            AOTS (Association for Overseas Technical Cooperation and Sustainable Partnerships)
          </span>.
        </p>
        <p>
          <span className="font-semibold text-purple-300">Study Topics:</span>{" "}
          Web Programming, Software Testing and Quality Assurance, No-code/Low-code Development,
          Japanese Language, and Japanese Corporate Culture.
        </p>
        <p>
          <span className="font-semibold text-purple-300">Skills Acquired:</span>{" "}
          Enhanced proficiency in automation testing, no-code tools, Japanese business culture,
          and team collaboration.
        </p>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

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

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
