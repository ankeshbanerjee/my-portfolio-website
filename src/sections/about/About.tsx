import React from "react";
import { Reveal } from "../../components/reveal";
import { CustomButton } from "../../components/customButton";
import { SkillItem } from "./components/skillItem";
import { TbBrandReactNative } from "react-icons/tb";
import { FaAndroid, FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import {
  SiDart,
  SiExpo,
  SiExpress,
  SiJavascript,
  SiJetpackcompose,
  SiKotlin,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { IoCubeOutline, IoLogoFirebase } from "react-icons/io5";

const About: React.FC = () => {
  return (
    <div className="w-full py-20 lg:py-32 bg-gray-50 flex flex-col items-center justify-center">
      <Reveal>
        <h1 className="font-bold text-2xl lg:text-4xl text-center">ABOUT ME</h1>
      </Reveal>
      <div className="mx-auto h-2 w-10 rounded-full bg-purple-600 my-6" />
      <div className="px-6 lg:px-80 mb-10 lg:mb-20">
        <Reveal>
          <p className="text-sm lg:text-lg text-center">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 px-6 lg:px-14 items-start">
        <div className="col-span-1 flex flex-col items-start justify-center gap-6">
          <Reveal>
            <h1 className="font-bold text-base lg:text-xl text-start">
              GET TO KNOW ME
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-xs lg:text-base text-start text-gray-700">
              I am a Computer Science & Engineering undergraduate from Kalyani
              Government Engineering College (Batch - 2025) with a passion for
              Mobile App Development. As a{" "}
              <strong>Smart India Hackathon'22 Winner</strong> and 1st runner-up
              in <strong>InCode'23 by InDrive</strong>, I excel in building
              innovative solutions.
              <br />
              <br />
              Currently, I am honing my skills as an{" "}
              <strong>SDE Intern at Mind Webs Ventures</strong>, where I focus
              on creating impactful mobile applications. My dedication to
              coding, problem-solving, and delivering exceptional user
              experiences reflects in my work, making me a driven developer with
              a keen eye for detail and innovation.
            </p>
          </Reveal>
          <CustomButton
            text="MY RESUME"
            onClick={() => {
              window.open(
                "https://drive.google.com/drive/folders/1TQHoxHBjNiuh5ghKdmDtPI3qDBeycDNI?usp=drive_link",
                "_blank"
              );
            }}
            styles="mt-4"
          />
        </div>
        <div className="col-span-1 flex flex-col items-start justify-center gap-6">
          <Reveal>
            <h1 className="font-bold text-base lg:text-xl text-start">
              MY SKILLS
            </h1>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            <Reveal>
              <SkillItem
                icon={<TbBrandReactNative className="size-5 lg:size-6" />}
                name="React Native"
              />
            </Reveal>
            <Reveal>
              <SkillItem
                icon={<SiExpo className="size-5 lg:size-6" />}
                name="Expo"
              />
            </Reveal>
            <Reveal>
              <SkillItem
                icon={<SiRedux className="size-5 lg:size-6" />}
                name="Redux"
              />
            </Reveal>
            <Reveal>
              <SkillItem
                icon={<SiTailwindcss className="size-5 lg:size-6" />}
                name="Tailwind CSS"
              />
            </Reveal>
            <Reveal>
              <SkillItem
                icon={<SiTypescript className="size-5 lg:size-6" />}
                name="Typescript"
              />
            </Reveal>
            <Reveal>
              <SkillItem
                icon={<SiJavascript className="size-5 lg:size-6" />}
                name="Javascript"
              />
            </Reveal>
            <Reveal>
              <SkillItem
                icon={<FaFlutter className="size-5 lg:size-6" />}
                name="Flutter"
              />
            </Reveal>
            <Reveal>
              <SkillItem
                icon={<IoCubeOutline className="size-5 lg:size-6" />}
                name="Flutter BLoC"
              />
            </Reveal>
            <Reveal>
              <SkillItem
                icon={<SiDart className="size-5 lg:size-6" />}
                name="Dart"
              />
            </Reveal>
            <Reveal>
              <SkillItem
                icon={<FaAndroid className="size-5 lg:size-6" />}
                name="Native Android"
              />
            </Reveal>
            <Reveal>
              <SkillItem
                icon={<SiJetpackcompose className="size-5 lg:size-6" />}
                name="Jetpack Compose"
              />
            </Reveal>
            <Reveal>
              <SkillItem
                icon={<SiKotlin className="size-5 lg:size-6" />}
                name="Kotlin"
              />
            </Reveal>
            <Reveal>
              <SkillItem
                icon={<FaReact className="size-5 lg:size-6" />}
                name="React.js"
              />
            </Reveal>
            <Reveal>
              <SkillItem
                icon={<FaGitAlt className="size-5 lg:size-6" />}
                name="Git / Github"
              />
            </Reveal>
            {/* <Reveal>
              <SkillItem icon={<FaNodeJs className="size-5 lg:size-6" />} name="Node.js" />
            </Reveal>
            <Reveal>
              <SkillItem icon={<SiExpress className="size-5 lg:size-6" />} name="Express.js" />
            </Reveal>
            <Reveal>
              <SkillItem icon={<SiMongodb className="size-5 lg:size-6" />} name="MongoDB" />
            </Reveal> */}
            <Reveal>
              <SkillItem
                icon={<IoLogoFirebase className="size-5 lg:size-6" />}
                name="Firebase"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
