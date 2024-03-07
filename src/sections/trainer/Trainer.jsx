import TrainerPNG from "./trainer.webp";

const Trainer = () => {
  return (
    <section
      id="trainer"
      className="md:section-height mobile-section-height mx-auto overflow-hidden"
    >
      <div className="relative flex h-full w-full flex-col items-center">
        <h1 className="stroke relative self-stretch bg-primary py-6 text-center font-primary text-5xl tracking-[0.4rem] text-black">
          TRAINER
        </h1>

        <div className="relative flex w-full flex-grow flex-col items-center justify-center gap-4 overflow-x-hidden overflow-y-hidden">
          {/* changing mw4xl to w4xl equivalent */}
          <div className="flex h-full flex-col items-center justify-center widescreen:lg:w-[56rem]">
            <img
              loading="lazy"
              src={TrainerPNG}
              alt="Trainer"
              className=" z-10 h-3/5 widescreen:lg:h-4/5"
            />
            <h1 className="z-10 flex flex-col items-center text-3xl font-extrabold tracking-[0.4rem] *:block  md:font-black md:tracking-[0.5rem] lg:text-2xl">
              <span className="text-black">FIRSTNAME</span>
              <span className=" text-slate-500">LASTNAME</span>
            </h1>
          </div>
          <div className="absolute top-[50%] z-0 h-[100vh]  w-[600%] origin-[50%_0%] rotate-[45deg] lg:top-[40%] lg:rotate-[30deg] widescreen:lg:rotate-[10deg]">
            <div className="h-[2%] w-full bg-slate-500"></div>
            <div className="h-[2%] w-full bg-white"></div>
            <div className="h-[96%] w-full bg-primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainer;
