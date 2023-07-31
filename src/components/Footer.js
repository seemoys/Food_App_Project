import React from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandsPraying,
  faHeartCrack,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className=" bg-yellow-300 md:flex md:justify-around text-center md:h-10 h-auto  w-full bottom-0 fixed z-40">
      <div className=" ">
        Hey {user?.name ? user?.name : "..."} Thanks for using Bite's & Burp{" "}
        <FontAwesomeIcon
          icon={faHandsPraying}
          beat
          size="lg"
          style={{ color: "#6fa2fb" }}
        />
      </div>
      <div className="">
        Developed with{" "}
        <FontAwesomeIcon
          icon={faHeartCrack}
          beat
          size="xl"
          style={{ color: "#e73236" }}
        />{" "}
        by CmoY
      </div>
      <div className="">
        <FontAwesomeIcon
          icon={faCopyright}
          beat
          size="lg"
          style={{ color: "#6fa2fb" }}
        />{" "}
        Copyright 2023 by CmoY
      </div>
    </div>
  );
};

export default Footer;
