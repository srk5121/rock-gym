import Slider from "../../utilities/Slider.jsx";
import { galleryImages } from "./index.js";

const Gallery = () => {
  return (
    // <section
    //   id="gallery"
    //   className=" lg:section-height mx-auto rounded bg-primary pb-6"
    // >
    //   <div className="relative flex h-full w-full flex-col items-center overflow-hidden">
    //     <h1 className="stroke relative z-10 self-stretch bg-primary py-6 text-center font-primary text-5xl tracking-[0.4rem] text-black">
    //       GALLERY
    //     </h1>
    //     <div className="relative z-10 flex  w-full items-center justify-center gap-6">
    //       <div className="widescreen:lg:w-[45%]">
    //         <Slider
    //           images={galleryImages}
    //           textColor="text-black"
    //           color="black"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section
      id="gallery"
      // removed mobilesectionheight and changed md to widescreen:lg
      className="mx-auto overflow-hidden pb-6 widescreen:lg:min-h-[section-height]"
    >
      <div className="relative flex h-full w-full flex-col items-center">
        <h1 className="stroke relative z-10 self-stretch bg-primary py-6 text-center font-primary text-5xl tracking-[0.4rem] text-black">
          GALLERY
        </h1>
        {/* added widescreen:lg:w56rem */}
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 widescreen:lg:w-[56rem] ">
          <div className="z-10 flex h-full flex-col items-center justify-center">
            <div className="widescreen:lg:w-[65%]">
              <Slider
                images={galleryImages}
                // textColor="text-black"
                // color="black"
              />
            </div>
          </div>
          {/* <div className="absolute top-[50%] z-0 h-[100vh]  w-[600%] origin-[50%_0%] rotate-[35deg] lg:top-[40%] lg:rotate-[30deg] widescreen:lg:rotate-[10deg]">
            <div className="h-[2%] w-full bg-slate-500"></div>
            <div className="h-[2%] w-full bg-white"></div>
            <div className="h-[96%] w-full bg-primary"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
