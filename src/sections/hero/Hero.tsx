import React from "react";
import { Reveal } from "../../components/reveal";
import { SideMenu } from "./components/sideMenu";
import { LottieAssets, SvgAssets } from "../../assets";
import Lottie from "lottie-react";
import { CustomButton } from "../../components/customButton";

const Hero: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-repeat h-[100vh] w-full flex flex-col gap-10 items-center justify-center"
      style={{
        background: `linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(${SvgAssets.heroBg})`,
      }}
    >
      <div className="flex-1" />
      <Reveal>
        <h2 className="font-bold text-3xl lg:text-5xl text-center">
          HEY, I'M ANKESH BANERJEE
        </h2>
      </Reveal>
      <div className="px-6 lg:px-80">
        <Reveal>
          <p className="text-lg lg:text-xl text-center">
            I am a passionate Mobile App Developer, dedicated to creating
            intuitive and innovative digital experiences. Skilled in crafting
            user-friendly interfaces, I thrive on turning ideas into impactful
            applications.
          </p>
        </Reveal>
      </div>
      <CustomButton
        text="PROJECTS"
        onClick={() => {
          document.getElementById("projects")?.scrollIntoView();
        }}
        styles="mt-8"
      />
      <SideMenu />
      <div className="flex-1" />
      <Lottie animationData={LottieAssets.scroll} loop className="mb-6" />
    </div>
  );
};

export default Hero;
