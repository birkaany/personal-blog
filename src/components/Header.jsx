import React from "react";

import profilePic from "/src/assets/profile.jpg";
import { Link } from "react-router-dom";
import Icon from "./Icon";

function SocialLink(props) {
  return (
    <a href={props.link} target="_blank">
      {props.children}
    </a>
  );
}

export default function Header() {
  return (
    <header className="py-6 flex justify-between items-center border-b">
      <div className="logo flex gap-3 items-center">
        <Link to="/">
          <img src={profilePic} alt="" className="rounded-full max-w-[4rem]" />
        </Link>
        <h2 className="flex flex-col font-bold text-xl">
          Birkan Yılmaz
          <span className="font-normal text-by-gray-400 text-sm ">Frontend Developer</span>
        </h2>
      </div>
      <ul className="social-media flex gap-3 text-by-gray-400">
        <li>
          <SocialLink link="https://github.com/birkaany/">
            <Icon icon="logo-github" size={20} />
          </SocialLink>
        </li>
        <li>
          <SocialLink link="https://www.linkedin.com/in/birkan-yilmaz/">
            <Icon icon="logo-linkedin" size={20} />
          </SocialLink>
        </li>
        <li>
          <SocialLink link="https://twitter.com/adimcikmis9a">
            <Icon icon="logo-twitter" size={20} />
          </SocialLink>
        </li>
      </ul>
    </header>
  );
}
