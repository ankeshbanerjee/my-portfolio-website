import React from "react";
import { Reveal } from "../../../../components/reveal";
import { CustomButton } from "../../../../components/customButton";
import { SlideInRight } from "../../../../components/slideInRight";

interface Props {
  name: string;
  description: string;
  image: string;
  imageInRight?: boolean;
  link: string;
}

const ProjectItem: React.FC<Props> = ({
  name,
  description,
  image,
  imageInRight = false,
  link,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-14 justify-center items-center gap-10">
      <div
        className={`col-span-1 space-y-6 flex flex-col items-center order-1 ${
          imageInRight ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <SlideInRight>
          <img src={image} alt={name} className="h-[250px] lg:h-[450px]" />
        </SlideInRight>
      </div>
      <div
        className={`col-span-1 space-y-6 flex flex-col items-center justify-center lg:block order-2 ${
          imageInRight ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <Reveal>
          <h1 className="font-bold text-lg lg:text-2xl">{name}</h1>
        </Reveal>
        <Reveal>
          <p className="text-sm text-center lg:text-lg lg:text-start">
            {description}
          </p>
        </Reveal>
        <CustomButton
          onClick={() => {
            window.open(link, "_blank");
          }}
          text="DETAILS"
          styles="w-fit mt-4 lg:mt-10"
        />
      </div>
    </div>
  );
};

export default ProjectItem;
