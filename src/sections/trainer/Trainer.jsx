import TrainerPNG from "./trainer.webp";

const Trainer = () => {
  return (
    <section id="trainer" className="mb-6 flex flex-col overflow-hidden">
      <h1 className="stroke bg-primary py-6 text-center font-primary text-5xl tracking-[0.4rem] text-black">
        TRAINER
      </h1>

      <div className="mx-auto flex flex-col items-center justify-center gap-4  p-6 md:max-w-2xl lg:max-w-4xl widescreen:lg:flex-row">
        <div className="flex w-full flex-col items-center gap-2">
          <img
            src={TrainerPNG}
            alt="Trainer"
            loading="lazy"
            className="w-[50%]"
          />
          <h2 className="flex flex-wrap justify-center text-2xl font-semibold tracking-[0.3rem] md:font-bold md:tracking-[0.4rem]">
            <span className="text-">&nbsp;FIRSTNAME&nbsp;</span>
            <span className="text-gray-500">LASTNAME</span>
          </h2>
        </div>
        <div className="w-full items-stretch justify-center widescreen:lg:flex widescreen:lg:self-stretch">
          <p className="mx-auto grid place-content-center rounded bg-primary p-4 font-medium text-black lg:w-4/5 lg:text-lg widescreen:lg:text-lg">
            <span className="self-center">
              Hello there! I am _________. I am a professional fitness trainer
              with _ years of experience in body building. I provide personal
              training which includes customized diet and workout plans based on
              your fitness goals. I can help you in your weight loss/ weight
              gain journey to achieve your dream physique.{" "}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trainer;
