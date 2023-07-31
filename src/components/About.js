import React, { useEffect, useState } from "react";
import useOnline from "../utils/useOnline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DisplayPicture from "../assets/My-Image.png";
import {
  faGithub,
  faLinkedinIn,
  faGoogle,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { GIT_ID_URL } from "../config";

const About = () => {
  const [repositories, setRepositories] = useState(null);
  useEffect(() => {
    getRepoInfo();
  }, []);

  async function getRepoInfo() {
    const response = await fetch(GIT_ID_URL);
    const responseDataJson = await response.json();
    setRepositories(responseDataJson);
  }
  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <h1 className="text-center text-5xl">
        Please Check Your Internet Connection
      </h1>
    );
  }
  return (
    <div className="mt-7 mb-28 md:flex md:justify-evenly md:gap-7 md:mr-7 md:ml-7 md:p-7">
      <div className="border md:w-2/5 p-5 m-5 shadow-2xl shadow-blue-300">
        <h1 className="text-center text-green-500 font-extrabold text-xl">
          About Me
        </h1>
        <img
          className="rounded-full p-5 justify-center shadow-xl shadow-blue-300"
          src={DisplayPicture}
          alt=""
        />
        <h2 className="text-center text-green-800 font-bold mt-5">
          React JS{" "}
          <FontAwesomeIcon
            className="text-cyan-900"
            icon={faReact}
            spin
            size="2xl"
          />{" "}
          Frontend Developer
        </h2>
        <p className="p-5 text-left font-sans  text-cyan-800 font-semibold">
          Entry-level experience specializing in web development, user interface
          design using HTML5, CSS3, Bootstrap, Tailwind,SQL, JavaScript, ReactJS
          & Redux. Adept at identifying opportunities to enhance front-end
          design & improve the user experience as well as hands-on experience in
          testing including Functional ,Integration, System, V&V, Regression,
          UAT & Compatibility. Supportive & enthusiastic team player dedicated
          to streamlining processes & efficiently resolving project issues.
        </p>
        <div className="mt-5 flex justify-evenly ">
          <a href="https://github.com/seemoys">
            <FontAwesomeIcon
              className="shadow-md shadow-black cursor-pointer bg-cyan-50 text-black rounded-md"
              icon={faGithub}
              bounce
              size="2xl"
            />
          </a>
          <a href="https://www.linkedin.com/in/seemoy-shome-016613243/">
            <FontAwesomeIcon
              className="shadow-md shadow-black cursor-pointer cursor-pointer text-blue-900 bg-cyan-50 rounded-md"
              icon={faLinkedinIn}
              bounce
              size="2xl"
            />
          </a>
          <a href="mailto:seemoys@gmail.com">
            <FontAwesomeIcon
              className="shadow-md shadow-black cursor-pointer text-white bg-red-500 rounded-md"
              icon={faGoogle}
              bounce
              size="2xl"
            />
          </a>
        </div>
      </div>
      <div className="border p-5 m-5 shadow-2xl shadow-blue-300">
        <h1 className="text-center font-extrabold text-green-500">
          About This Project
        </h1>
        <div className="md:flex">
          <div className="">
            <img
              className="h-48 w-72"
              src="https://avatars.githubusercontent.com/u/121758749?v=4"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <h1 className="text-left font-bold text-yellow-700">
              Learn React With Cmoy
            </h1>
            <h1 className="text-left font-bold text-blue-700">
              My PortFolio{" "}
              <Link to="https://seemoyshome.netlify.app/">
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  beat
                  size="lg"
                />
              </Link>
            </h1>
            {repositories ? (
              <Link to="https://github.com/seemoys?tab=repositories">
                <p className="text-blue-700">
                  GitHub Repositories {repositories?.public_repos}{" "}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    beat
                    size="lg"
                  />
                </p>
              </Link>
            ) : (
              "null"
            )}
            <p className="text-left text-md text-cyan-800">
              My learning experience of Namaste React Live course conducted by
              Akshay Saini. Each repository contains every session's assignments
              and class notes.
            </p>
            <p className="text-3xl md:text-6xl  text-center font-extrabold font-[cursive] text-green-100">
              Coming Soon...
            </p>
            <p className="text-3xl md:text-6xl  text-center font-extrabold font-[cursive] text-green-200">
              Coming Soon...
            </p>
            <p className="text-3xl md:text-6xl  text-center font-extrabold font-[cursive] text-green-300">
              Coming Soon...
            </p>
            <p className="text-3xl md:text-6xl  text-center font-extrabold font-[cursive] text-green-400">
              Coming Soon...
            </p>
            <p className="text-3xl md:text-6xl  text-center font-extrabold font-[cursive] text-green-500">
              Coming Soon...
            </p>
            <p className="text-3xl md:text-6xl  text-center font-extrabold font-[cursive] text-green-600">
              Coming Soon...
            </p>
            <p className="text-3xl md:text-6xl  text-center font-extrabold font-[cursive] text-green-700">
              Coming Soon...
            </p>
            <p className="text-3xl md:text-6xl text-center font-extrabold font-[cursive] text-green-800">
              Coming Soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
