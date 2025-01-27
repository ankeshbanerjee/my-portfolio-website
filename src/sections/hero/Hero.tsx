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
          <p className="text-sm lg:text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vero
            provident doloribus velit suscipit numquam amet? Dolorem cumque aut
            tempore architecto, aliquam provident vero sed commodi deserunt iste
            sequi, praesentium possimus porro nostrum corrupti magnam.
          </p>
        </Reveal>
      </div>
      <CustomButton text="PROJECTS" onClick={() => {}} styles="mt-8" />
      <SideMenu />
      <div className="flex-1" />
      <Lottie animationData={LottieAssets.scroll} loop className="mb-6" />
    </div>
  );
};

export default Hero;
