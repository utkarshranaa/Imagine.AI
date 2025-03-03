import { QuoteIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  name: string;
  role: string;
};

const ReviewCard = ({ image, name, role }: Props) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <QuoteIcon className="w-10 h-10 text-yellow-300" />
      <p className="text-center mt-4 text-white text-base md:text-lg lg:text-xl font-semibold text-opacity-80">
  Imagine.AI is honestly such a fun and impressive tool. I just type a few words, and the AI instantly turns it into stunning visuals. Whether I need futuristic artwork or fantasy landscapes, it delivers every time. As someone with zero design skills, this website makes me feel like a pro artist. Plus, the interface is super clean and easy to use. Highly recommended for anyone who loves experimenting with AI art!
</p>
<div className="mt-8">
  <h1 className="text-base md:text-2xl font-bold text-white text-center">
    {name}
  </h1>
  <p className="text-sm md:text-lg font-bold text-white text-center">
    {role}
  </p>
  <Image
    src={image}
    alt={name}
    height={80}
    width={80}
    className="mt-6 rounded-full mx-auto"
  />
</div>

    </div>
  );
};

export default ReviewCard;
