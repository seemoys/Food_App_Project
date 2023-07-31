import React from "react";
import useOnline from "../utils/useOnline";
import ContactUsImage from "../assets/Contact-Us.png";

const Contact = () => {
  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <h1 className="text-center text-5xl">
        Please Check Your Internet Connection
      </h1>
    );
  }
  return (
    <>
      <div className=" md:flex md:justify-evenly">
        <section className="justify-center mt-7 ">
          <img className="w-44 mx-auto  md:w-72 " src={ContactUsImage} />
        </section>
        <section
          className="mb-28 m-2 md:ml-5 mt-7 md:w-96 bg-orange-200 rounded-xl"
          id="contact">
          <h2 className="text-center font-bold text-3xl">
            Contact <span>Me!</span>
          </h2>
          <form
            className="flex flex-col shadow-2xl rounded-xl"
            action="#"
            id="reset">
            <div className="md:flex md:gap-5 m-2 p-2 mx-auto flex flex-col gap-2">
              <div className="m-2 mx-auto">
                <input
                  className="bg-slate-200 rounded-md  w-64"
                  id="fName"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="m-2 mx-auto">
                <input
                  className="bg-slate-200 rounded-md w-64"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="md:flex md:gap-5 m-2 p-2 mx-auto flex flex-col gap-2">
              <div className="m-2 mx-auto">
                <input
                  className="bg-slate-200 rounded-md w-64"
                  id="phoneNo"
                  type="number"
                  placeholder="Phone Number"
                />
              </div>
              <div className="m-2 mx-auto">
                <input
                  className="bg-slate-200 rounded-md w-64"
                  id="subject"
                  type="email"
                  placeholder="Email Subject"
                />
              </div>
            </div>
            <div className="flex">
              <textarea
                className="bg-slate-100 rounded-md  mx-auto w-64 h-20"
                id="message"
                placeholder="Please Enter Your Message Here !!!"
              />
              <span className="focus" />
            </div>
            <div className="mx-auto border bg-green-400 rounded-md w-24 text-center text-xl mt-2 relative top-4 hover:bg-cyan-300 hover:text-orange-500 hover:font-bold">
              <a href="#" className="btn">
                Submit
              </a>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Contact;
