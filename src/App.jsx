import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      onUpdate: function () {
        if (tl.progress() >= 0.9) {
          setShowContent(true);
          tl.kill();
        }
      },
    });

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "expo.inOut",
      transformOrigin: "50% 50%",
      opacity: 0,
    });
  }, []);
  useGSAP(()=>{
    if(!showContent) return;
    gsap.to(".main",{
      scale:1,
      rotate:0,
      duration:2,
      delay:-1,
      ease:"Expo.easeInOut",
    });
    gsap.to(".sky",{
      scale:13,
      rotate:0,
      duration:2,
      delay:-.8,
      ease:"Expo.easeInOut",
    });
    gsap.to(".bg",{
      scale:1.3,
      rotate:0,
      duration:2,
      delay:-.8,
      ease:"Expo.easeInOut",
    });
  },[showContent])

  useGSAP(() => {
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", (e) => {
      const Xmove = (e.clientX / window.innerWidth - 0.5) * 40;

      gsap.to(".imagesdiv .text", {
        x: `${Xmove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: Xmove,
      });
      gsap.to(".bg", {
        x: Xmove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      {!showContent && (
        <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
          <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <mask id="viMask">
                <rect width="100%" height="100%" fill="black" />
                <g className="vi-mask-group">
                  <text
                    x="50%"
                    y="50%"
                    fontSize="250"
                    textAnchor="middle"
                    fill="white"
                    dominantBaseline="middle"
                    fontFamily="Arial Black"
                  >
                    VI
                  </text>
                </g>
              </mask>
            </defs>
            <image
              href="./bg.png"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              mask="url(#viMask)"
            />
          </svg>
        </div>
      )}

      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing relative w-full h-screen bg-black flex items-center justify-center text-white text-4xl">
            <div className="navbar w-full py-10 px-10 absolute top-0 left-0 z-[10] ">
              <div className="logo flex gap-2 -mt-[16px] items-center">
                <div className="lines flex flex-col gap-[3px]">
                  <div className="line w-10 h-1 bg-white "></div>
                  <div className="line w-8 h-1 bg-white "></div>
                  <div className="line w-5 h-1 bg-white "></div>
                </div>
                <h3 className="text-3xl -mt-[7px]  leading-none  text-white">
                  RockStar
                </h3>
              </div>
            </div>

            <div className="imagesdiv overflow-hidden relative w-full h-screen">
              <img
                className="w-full scale-[1.5] rotate-[-20deg] sky absolute top-0 left-0 h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="w-full scale-[1.8] rotate-[-15deg] bg absolute top-0 left-0 h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col  absolute top-12 -ml-20 left-1/2 -translate-x-1/2">
                <h1 className="text-[6rem] leading-none ml-20">Grand</h1>
                <h1 className="text-[6rem] leading-none ml-40 ">theft</h1>
                <h1 className="text-[6rem] leading-none ml-20">auto</h1>
              </div>
              <img
                className="absolute character h-[40vw] -bottom-[25%] left-1/2 -translate-x-1/2 scale-[1.4] "
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbar w-full py-5 px-10 absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="ri-arrow-down-line text-white text-xl"></i>
                <h3 className="text-xl font-[poppins] text-white">
                  Scroll Down
                </h3>
              </div>
              <img
                src="./ps5.png"
                alt=""
                className="h-[45px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex items-center justify-between text-white w-full h-[80%] px-20">
              <div className="limg flex items-center justify-center w-1/2 h-full">
                <img
                  className="h-[43vw] object-contain"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[40%] py-5">
                <h1 className="text-6xl leading-tight">Still Running,</h1>
                <h1 className="text-6xl leading-tight">Not Hunting</h1>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio possimus, asperiores nam, omnis inventore nesciunt
                  a architecto eveniet saepe, ducimus necessitatibus at
                  voluptate.
                </p>

                <button className="bg-yellow-500 px-10 py-5 text-black mt-10 text-2xl rounded-xl shadow-md hover:bg-yellow-400 transition">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
