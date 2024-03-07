import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        // className={`mobile-hero-height md:section-height mx-auto flex items-center justify-items-start bg-black bg-hero bg-[length:auto_80%] bg-right bg-no-repeat md:max-w-2xl md:bg-[length:auto_90%] md:bg-right lg:max-w-4xl lg:bg-[length:40%_auto] lg:bg-right `}
        className={`mobile-hero-height md:section-height mx-auto flex items-center justify-items-start bg-black bg-hero bg-[length:auto_80%] bg-[100%_0%] bg-no-repeat md:max-w-2xl md:bg-[length:auto_70%] md:bg-[80%_50%] lg:max-w-4xl lg:bg-[length:auto_100%]`}
      >
        <h1 className="flex flex-col gap-6 p-4 *:tracking-[0.4rem] lg:gap-1">
          <span className="font-primary text-8xl text-primary md:text-9xl">
            ROCK
          </span>
          <span className="font-primary text-5xl text-primary">GYM</span>
          <span className="font-primary text-xl">AND</span>
          <span className="font-primary text-5xl">FITNESS</span>
          <span className="font-primary text-5xl">STUDIO</span>
          {/* <span className="font-primary text-5xl text-slate-500">WORKOUT</span> */}
          <ReactTyped
            className="font-primary text-5xl text-gray-500"
            strings={["EAT", "WORKOUT", "SLEEP", "REPEAT"]}
            typeSpeed={50}
            backSpeed={50}
            loop
          ></ReactTyped>
        </h1>
      </section>
    </>
  );
};

export default Hero;
