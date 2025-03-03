import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className="order-2 xl:order-1">
          <Image
            src="/images/about.jpg"
            alt="about"
            width={400}
            height={400}
            className="rounded-lg w-full"
          />
        </div>


        {/* content */}
        <div className="order-1 xl:order-2">
          <h1 className="text-gray-300 mb-4 font-semibold text-lg capitalize">
            What we do
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Create your own AI Image
          </h1>
          <p className="text-gray-200 mb-8 text-base">
            Welcome to my personal AI image generator project! I created this site to explore how artificial intelligence can transform simple text prompts into stunning visuals. Whether you’re curious about AI, looking for creative inspiration, or just want to experiment, this platform is all about learning and having fun with cutting-edge technology.
          </p>
         <Button className="bg-rose-500 w-36 h-12 text-base uppercase" size={"lg"}><a href="https://github.com/utkarshranaa">
        About Me</a></Button>
        </div>
      </div>
    </div>
  );
};

export default About;
