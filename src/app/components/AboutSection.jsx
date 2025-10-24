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
    id: "Work Experience",
    content: (
      <ul className="list-disc pl-2">
       
      </ul>
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
          <span className="font-semibold text-purple-300">Major:</span>{" "}
          Software Engineering
        </p>

        <p>
          <span className="font-semibold text-purple-300">Duration:</span>{" "}
          2021 – Present
        </p>
      </div>
    ),
  },

  {
  title: "Certificates",
  id: "Certificates",
  content: (
    <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-lg space-y-4 hover:shadow-purple-500/30 transition-all duration-300">

      <div className="space-y-3 text-gray-300">
        <p>
          <span className="font-semibold text-purple-300">
            TOEIC :
          </span>{" "}
        655 (Listening & Reading), issued by IIG Vietnam (2025)
        </p>
        <p>
          <span className="font-semibold text-purple-300">
            Observation Internship:
          </span>{" "}
           MobiFone Corporation (March - 2025)
        </p>
      </div>
    </div>
  ),
},

  {
    title: "Awards",
    id: "Awards",
    content: (
      <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-lg space-y-4 text-justify hover:shadow-purple-500/30 transition-all duration-300">
        <h3 className="text-lg font-semibold text-purple-400">
          AOTS Scholarship – Japan / Technical Training Program Funded by the Japanese Government (2025)
        </h3>

        <p className="text-gray-300">
          Participated in a Training Course organized by{" "}
          <span className="font-semibold text-white">
            AOTS (Association for Overseas Technical Cooperation and Sustainable Partnerships)
          </span>{" "}
        </p>

        <div className="space-y-3 text-gray-300">
          <p>
            <span className="font-semibold text-purple-300">Study Topics:</span>{" "}
            Web Programming, Software Testing and Quality Assurance, No-code and
            Low-code Development, Japanese Language, and Japanese Corporate Culture.
          </p>

          <p>
            <span className="font-semibold text-purple-300">Skills Acquired:</span>{" "}
            Strengthened proficiency in modern software development and testing
            processes; enhanced logical thinking, automation, and process optimization
            through No-code/Low-code tools; improved Japanese communication skills and
            deepened understanding of Japanese business culture and work ethics.
          </p>

          <p>
            <span className="font-semibold text-purple-300">Impact:</span>{" "}
            Applied acquired knowledge and skills to real-world software development
            and testing projects; cultivated a professional, disciplined, and
            quality-oriented mindset inspired by Japanese standards; expanded
            international collaboration networks in the technology field.
          </p>
        </div>
      </div>
    ),
  },
    {
    title: "Volunteer Experience",
    id: "Volunteer Experience",
    content: (
      <ul className="list-disc pl-2">
       
      </ul>
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
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify">
            I am a Tester Automation  with a passion for ensuring high-quality products through meticulous testing and attention to detail. I have experience working with manual and automated testing processes, and I’m familiar with tools like Postman, Selenium, WebDriver, JUnit, TestNG, and Jira.
            I have a good understanding of software development life cycle (SDLC) and agile methodologies, and I collaborate closely with developers to detect and resolve issues early.
            I am a quick learner and always seeking to expand my knowledge of testing tools and techniques. I am a team player and excited to contribute to building stable, reliable, and user-friendly applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Work Experience")}
              active={tab === "Work Experience"}
            >
              {" "}
              Work Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Certificates")}
              active={tab === "Certificates"}
            >
              {" "}
              Certificates{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Awards")}
              active={tab === "Awards"}
            >
              {" "}
              Awards{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Volunteer Experience")}
              active={tab === "Volunteer Experience"}
            >
              {" "}
              Volunteer Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
