import React from "react";
import { Reveal } from "../../components/reveal";
import { ImageAssets } from "../../assets";
import { ProjectItem } from "./components/projectItem";

const Projects: React.FC = () => {
  return (
    <div className="w-full py-18 bg-white flex flex-col items-center justify-center">
      <Reveal>
        <h1 className="font-bold text-2xl lg:text-4xl text-center">PROJECTS</h1>
      </Reveal>
      <div className="mx-auto h-2 w-10 rounded-full bg-purple-600 my-6" />
      <div className="px-6 lg:px-80 mb-10 lg:mb-20">
        <Reveal>
          <p className="text-sm lg:text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vero
            provident doloribus velit suscipit numquam amet? Dolorem cumque aut
            tempore architecto.
          </p>
        </Reveal>
      </div>
      <div className="space-y-28">
        <ProjectItem
          name="BlinkTalk"
          image={ImageAssets.blinkTalkPreview}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maxime quis libero vero nihil nam sit, voluptate, maiores assumenda nemo repellat possimus cum itaque! Praesentium quidem neque non velit quia?"
        />
        <ProjectItem
          imageInRight
          name="Daily Chronicles"
          image={ImageAssets.dailyChroniclesPreview}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maxime quis libero vero nihil nam sit, voluptate, maiores assumenda nemo repellat possimus cum itaque! Praesentium quidem neque non velit quia?"
        />
        <ProjectItem
          name="Instagram Clone"
          image={ImageAssets.instagramPreview}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maxime quis libero vero nihil nam sit, voluptate, maiores assumenda nemo repellat possimus cum itaque! Praesentium quidem neque non velit quia?"
        />
        <ProjectItem
          imageInRight
          name="QuickPoll"
          image={ImageAssets.quickPollPreview}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maxime quis libero vero nihil nam sit, voluptate, maiores assumenda nemo repellat possimus cum itaque! Praesentium quidem neque non velit quia?"
        />
      </div>
    </div>
  );
};

export default Projects;
