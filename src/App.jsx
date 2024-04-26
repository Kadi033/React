import React from "react";
import "./App.css";
import logo from "./assets/logo.png";
import first from "./assets/image-hero-left.png";
import second from "./assets/image-hero-right.png";
import third from "./assets/image-woman-in-videocall.jpg";
import fourth from "./assets/image-women-videochatting.jpg";
import fiveth from "./assets/image-men-in-meeting.jpg";
import sixth from "./assets/image-man-texting.jpg";

function App() {
  return (
    <div className="container">
      <header className="flex justify-center items-center">
        <img src={logo} className="max-w-full max-h-full kadi" />
      </header>
      <div className="first-container flex justify-around items-center">
        <img src={first} alt="Logo" className="" />
        <div className="first-container-center-text">
          <h1>Group Chat for Everyone</h1>
          <p>
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <div className="buttons flex justify-center gap-4">
            <span className="w-193 h-58 rounded-full flex gap-1 ">
              <p>Download</p>
              <p>v1.3</p>
            </span>
            <span className="w-139 h-58 rounded-full">
              <p>What is it?</p>
            </span>
          </div>
        </div>
        <img src={second} />
      </div>
      <div className="pop grid justify-center justify-items-center ">
        <div className="stick"></div>
        <div className="round">
          <p>01</p>
        </div>
      </div>

      <div className="second-container flex justify-center gap-8 mt-16 ">
        <img src={third} alt="" className="w-[255px] h-[242px] rounded-md" />
        <img src={fourth} alt="" className="w-[255px] h-[242px] rounded-md" />
        <img src={fiveth} alt="" className="w-[255px] h-[242px] rounded-md" />
        <img src={sixth} alt="" className="w-[255px] h-[242px] rounded-md" />
      </div>
      <div className="third-container grid justify-center text-center mt-20">
        <h2 className="text-xl ">Built for modern use</h2>
        <h1 className="text-4xl pt-4 w-[445px] mx-auto">
          Smarter meetings, all in one place
        </h1>
        <p className="pt-8 w-[540px]">
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </div>

      <footer className="relative">
        <div className="bg-image">
          <div className="overlay">
            <div className="footer-content">
              <h1>Experience more together</h1>
              <p>
                Stay connected with reliable HD meetings and unlimited
                one-on-one and group video sessions.
              </p>
              <div className="buttons flex justify-center gap-4 ">
                <span className="w-193 h-58 rounded-full flex gap-1 bg-purple-600">
                  <p>Download</p>
                  <p>v1.3</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="pop grid justify-center justify-items-center absolute top-[-74%] left-1/2 transform -translate-x-1/2">
          <div className="stick"></div>
          <div className="round">
            <p>02</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
