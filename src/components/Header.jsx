import React from "react";
import profilePic from "/src/assets/profile.jpg";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

function SocialLink(props) {
  return (
    <a href={props.link} target="_blank">
      {props.children}
    </a>
  );
}

export default function Header() {
  return (
    <header className="container mx-auto py-6 flex justify-between items-center border-b">
      <div className="logo flex gap-3 items-center">
        <img src={profilePic} alt="" className="rounded-full max-w-[4rem]" />
        <h2 className="flex flex-col font-bold text-xl">
          Birkan Yılmaz
          <span className="font-normal text-by-gray-400 text-sm ">Frontend Developer</span>
        </h2>
      </div>
      <ul className="social-media flex gap-3 text-by-gray-400">
        <li>
          <SocialLink link="https://github.com/birkaany/">
            <BsGithub />
          </SocialLink>
        </li>
        <li>
          <SocialLink link="https://www.linkedin.com/in/birkan-yilmaz/">
            <BsLinkedin />
          </SocialLink>
        </li>
        <li>
          <SocialLink link="https://twitter.com/adimcikmis9a">
            <BsTwitter />
          </SocialLink>
        </li>
      </ul>
    </header>
  );
}
