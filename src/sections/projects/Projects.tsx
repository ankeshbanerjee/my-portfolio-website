import React from "react";
import { Reveal } from "../../components/reveal";
import { ImageAssets } from "../../assets";
import { ProjectItem } from "./components/projectItem";

const Projects: React.FC = () => {
  return (
    <div className="w-full py-20 lg:py-32 bg-white flex flex-col items-center justify-center">
      <Reveal>
        <h1 className="font-bold text-2xl lg:text-4xl text-center">PROJECTS</h1>
      </Reveal>
      <div className="mx-auto h-2 w-10 rounded-full bg-purple-600 my-6" />
      <div className="px-6 lg:px-80 mb-10 lg:mb-20">
        <Reveal>
          <p className="text-sm lg:text-lg text-center">
            Here you'll find a collection of innovative projects that highlight
            my technical expertise, problem-solving skills, and passion for
            impactful development.
          </p>
        </Reveal>
      </div>
      <div className="space-y-24">
        <ProjectItem
          name="BlinkTalk"
          image={ImageAssets.blinkTalkPreview}
          link="https://github.com/ankeshbanerjee/rn_blinkTalk"
          description="A full-stack real-time chat application made using React Native, with one-to-one and group chats, push notifications via FCM, real-time typing indicators, file attachments, and a dynamic interface supporting light and dark modes."
        />
        <ProjectItem
          imageInRight
          name="Daily Chronicles"
          image={ImageAssets.dailyChroniclesPreview}
          link="https://github.com/ankeshbanerjee/daily-chronicles"
          description="A diary app for android, built with Jetpack Compose, featuring dark/light mode, Hilt for dependency injection, Room database, biometric authentication, notification reminders with WorkManager, and Kotlin Coroutines for reactive data handling."
        />
        <ProjectItem
          name="Instagram Clone"
          image={ImageAssets.instagramPreview}
          link="https://github.com/ankeshbanerjee/instagram-clone"
          description="Features include Add Post, Like, Comment, Follow/Unfollow, and Favorites. Utilized Firebase for real-time database, implemented BLoC architecture, and managed dynamic themes with flutter-bloc and Inherited Widget."
        />
        <ProjectItem
          imageInRight
          name="QuickPoll"
          image={ImageAssets.quickPollPreview}
          link="https://github.com/ankeshbanerjee/QuickPoll"
          description="Developed a full-stack Android app for poll creation, voting, and image attachments with user authentication, using MVVM, Hilt, Preferences Datastore, Firebase Messaging, Retrofit, OkHttp, Kotlin Flow, and Coroutines."
        />
      </div>
    </div>
  );
};

export default Projects;
