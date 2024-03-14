import Slider from "../../utilities/Slider.jsx";
import { galleryImages } from "./index.js";

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="mx-auto overflow-hidden pb-6 widescreen:lg:min-h-[section-height]"
    >
      <div className="relative flex h-full w-full flex-col items-center">
        <h1 className="stroke relative z-10 self-stretch bg-primary py-6 text-center font-primary text-5xl tracking-[0.4rem] text-black">
          GALLERY
        </h1>
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 widescreen:lg:w-[56rem] ">
          <div className="z-10 flex h-full flex-col items-center justify-center">
            <div className="widescreen:lg:w-[65%]">
              <Slider images={galleryImages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
