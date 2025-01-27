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
    <div className="w-full py-16 bg-gray-50 flex flex-col items-center justify-center">
      <Reveal>
        <h1 className="font-bold text-2xl lg:text-4xl text-center">ABOUT ME</h1>
      </Reveal>
      <div className="mx-auto h-2 w-10 rounded-full bg-purple-600 my-10" />
      <div className="px-6 lg:px-80 mb-10 lg:mb-20">
        <Reveal>
          <p className="text-sm lg:text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vero
            provident doloribus velit suscipit numquam amet? Dolorem cumque aut
            tempore architecto.
          </p>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-14 items-start">
        <div className="col-span-1 flex flex-col items-start justify-center gap-6">
          <Reveal>
            <h1 className="font-bold text-base lg:text-xl text-start">
              GET TO KNOW ME
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-xs lg:text-base text-start text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              vero provident doloribus velit suscipit numquam amet? Dolorem
              cumque aut tempore architecto. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Beatae vero provident doloribus
              velit suscipit numquam amet? Dolorem cumque aut tempore
              architecto.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              vero provident doloribus velit suscipit numquam amet? Dolorem
              cumque aut tempore architecto. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Beatae vero provident doloribus
              velit suscipit numquam amet? Dolorem cumque aut tempore
              architecto.
            </p>
          </Reveal>
          <CustomButton text="MY RESUME" onClick={() => {}} styles="mt-4" />
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
                icon={<TbBrandReactNative size={24} />}
                name="React Native"
              />
            </Reveal>
            <Reveal>
              <SkillItem icon={<SiExpo size={24} />} name="Expo" />
            </Reveal>
            <Reveal>
              <SkillItem icon={<SiRedux size={24} />} name="Redux" />
            </Reveal>
            <Reveal>
              <SkillItem
                icon={<SiTailwindcss size={24} />}
                name="Tailwind CSS"
              />
            </Reveal>
            <Reveal>
              <SkillItem icon={<SiTypescript size={24} />} name="Typescript" />
            </Reveal>
            <Reveal>
              <SkillItem icon={<SiJavascript size={24} />} name="Javascript" />
            </Reveal>
            <Reveal>
              <SkillItem icon={<FaFlutter size={24} />} name="Flutter" />
            </Reveal>
            <Reveal>
              <SkillItem
                icon={<IoCubeOutline size={24} />}
                name="Flutter BLoC"
              />
            </Reveal>
            <Reveal>
              <SkillItem icon={<SiDart size={24} />} name="Dart" />
            </Reveal>
            <Reveal>
              <SkillItem icon={<FaAndroid size={24} />} name="Native Android" />
            </Reveal>
            <Reveal>
              <SkillItem
                icon={<SiJetpackcompose size={24} />}
                name="Jetpack Compose"
              />
            </Reveal>
            <Reveal>
              <SkillItem icon={<SiKotlin size={24} />} name="Kotlin" />
            </Reveal>
            <Reveal>
              <SkillItem icon={<FaReact size={24} />} name="React.js" />
            </Reveal>
            <Reveal>
              <SkillItem icon={<FaGitAlt size={24} />} name="Git / Github" />
            </Reveal>
            {/* <Reveal>
              <SkillItem icon={<FaNodeJs size={24} />} name="Node.js" />
            </Reveal>
            <Reveal>
              <SkillItem icon={<SiExpress size={24} />} name="Express.js" />
            </Reveal>
            <Reveal>
              <SkillItem icon={<SiMongodb size={24} />} name="MongoDB" />
            </Reveal> */}
            <Reveal>
              <SkillItem icon={<IoLogoFirebase size={24} />} name="Firebase" />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
