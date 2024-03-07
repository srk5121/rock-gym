import {
  equipmentCategories,
  upperBodyEquipment,
  lowerBodyEquipment,
  cardioEquipment,
} from "./index.js";
import Slider from "../../utilities/Slider";

const Equipment = () => {
  return (
    <section id="equipment" className=" mx-auto mb-6 md:max-w-2xl lg:max-w-4xl">
      <div className="relative flex flex-col items-center">
        <h1 className="relative my-6  text-center font-primary text-5xl tracking-[0.4rem] text-primary">
          EQUIPMENT
        </h1>

        <div className="relative flex w-full flex-grow flex-col items-center justify-start gap-6">
          {equipmentCategories.length &&
            equipmentCategories.map((category, i) => {
              return (
                <div
                  key={i}
                  className="mx-auto flex w-[90%] flex-col items-stretch justify-start gap-2 md:w-4/5"
                >
                  <h2 className="relative z-10 text-center text-lg font-semibold tracking-[0.2rem] text-black md:font-bold">
                    <span className="relative z-10">{category.name}</span>

                    <div className="absolute bottom-0 left-1/4 z-0 h-full w-1/2 -skew-x-[30deg] bg-primary md:left-[35%] md:w-[30%]"></div>
                  </h2>
                  <Slider images={category.data} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
