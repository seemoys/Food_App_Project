import React, { useState } from "react";
import useOnline from "../utils/useOnline";
import { FAQ } from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Section = ({ id, title, description, isVisible, toggleVisibility }) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div  className="border p-2 m-2 shadow-lg mb-5 rounded-lg">
      <div  className="flex justify-between">
        <h3>{title}</h3>
        <FontAwesomeIcon className="text-gray-500"
          icon={isVisible ? faChevronUp : faChevronDown}
          onClick={toggleVisibility}
          size="xl" beatFade
        />
      </div>

      {isVisible && <p className="text-gray-500">{description}</p>}
    </div>
  );
};

const Help = () => {
  const [visibleSection, setVisibleSection] = useState(null);
  function handleToggleVisibility(sectionName) {
    setVisibleSection(sectionName === visibleSection ? null : sectionName);
  }
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1 className="text-center text-5xl">Please Check Your Internet Connection</h1>;
  }
  return (
    <div className="p-2 m-5 md:m-24 border border-gray-500 mt-5 md:p-5 mb-28 rounded-3xl shadow-gray-700 shadow-2xl ">
      <h1 className="text-center m-4 font-extrabold text-4xl font-[cursive] ">FAQs</h1>
      <div className="md:ml-24 md:mr-24 p-2 ">
        {FAQ.map((queries) => {
          return (
            <Section
              key={queries.id}
              id={queries.id}
              title={queries.title}
              description={queries.description}
              isVisible={visibleSection === queries.id}
              toggleVisibility={() => handleToggleVisibility(queries.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Help;
