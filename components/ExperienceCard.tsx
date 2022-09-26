/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BigHead } from "@bigheads/core";

type Props = {
  title: string;
  subtitle: string;
  icons: Array<string>;
  topics: Array<string>;
};

export default function ExperienceCard({...props}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div className="w-32">
        <BigHead
          accessory="none"
          body="chest"
          circleColor="blue"
          clothing="shirt"
          clothingColor="black"
          eyebrows="raised"
          eyes="simple"
          faceMask={false}
          faceMaskColor="black"
          facialHair="none"
          graphic="graphQL"
          hair="afro"
          hairColor="black"
          hat="none"
          hatColor="white"
          lashes={false}
          lipColor="purple"
          mask
          mouth="grin"
          skinTone="dark"
        />
      </div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{props.title}</h4>
        <p className="font-bold text-2xl mt-1">{props.subtitle}</p>
        <div className="flex space-x-2 my-2">
          {props.icons.map((icon, i) => {
            return (<div key={i} className={`h-10 w-10 rounded-full bg-cover ${icon}`}></div>)
          })}
        </div>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {props.topics.map((topic, i) => {
            return (<li key={i}>{topic}</li>)
          })}
        </ul>
      </div>
    </article>
  );
}
