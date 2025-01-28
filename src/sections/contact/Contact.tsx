import React, { useState } from "react";
import { SvgAssets } from "../../assets";
import { Reveal } from "../../components/reveal";
import { CustomTextInput } from "../../components/customTextInput";
import { SlideInUp } from "../../components/slideInUp";
import { CustomButton } from "../../components/customButton";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-32 w-full flex flex-col items-center justify-center"
      style={{
        background: `linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(${SvgAssets.heroBg})`,
      }}
    >
      <Reveal>
        <h1 className="font-bold text-2xl lg:text-4xl text-center">CONTACT</h1>
      </Reveal>
      <div className="mx-auto h-2 w-10 rounded-full bg-purple-600 my-6" />
      <div className="px-6 lg:px-80 mb-10 lg:mb-20">
        <Reveal>
          <p className="text-sm lg:text-lg text-center">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible.
          </p>
        </Reveal>
      </div>
      <SlideInUp>
        <div className="p-6 lg:p-10 rounded-lg bg-white shadow-lg w-[90vw] mx-6 lg:w-[60vw] lg:mx-0">
          <CustomTextInput
            label="Name"
            value={name}
            onChange={setName}
            placeholder="Enter Your Name"
            required
          />
          <CustomTextInput
            label="Email"
            value={email}
            onChange={setEmail}
            placeholder="Enter Your Email"
            required
          />
          <CustomTextInput
            label="Message"
            value={message}
            onChange={setMessage}
            placeholder="Enter Your Message"
            rows={6}
            required
          />
          <div className="flex justify-center lg:justify-end">
            <CustomButton onClick={() => {}} text="SUBMIT" styles="" />
          </div>
        </div>
      </SlideInUp>
    </div>
  );
};

export default Contact;
