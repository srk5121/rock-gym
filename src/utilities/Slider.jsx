import React, { useState } from "react";
import { LiaChevronLeftSolid, LiaChevronRightSolid } from "react-icons/lia";
let translatePercentage = 0;
let touchStartPosition;
let touchEndPosition;
const Slider = ({ images, textColor = "text-primary", color = "#fdd100" }) => {
  const [index, setIndex] = useState(0);
  const moveLeft = () => {
    if (index !== 0) {
      setIndex((index) => {
        translatePercentage = 100 * (index - 1);
        return index - 1;
      });
    }
  };
  const moveRight = () => {
    if (index !== images.length - 1) {
      setIndex((index) => {
        translatePercentage = 100 * (index + 1);

        return index + 1;
      });
    }
  };
  const moveToIndex = (e) => {
    setIndex(() => {
      translatePercentage = 100 * +e.target.id;
      return +e.target.id;
    });
  };
  const handleTouchStart = (e) => {
    touchStartPosition = e.touches[0].pageX;
  };
  const handleTouchEnd = () => {
    if (touchStartPosition > touchEndPosition) {
      moveRight();
    } else {
      moveLeft();
    }
  };
  const handleTouchMove = (e) => {
    touchEndPosition = e.touches[0].pageX;
  };
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <div className="flex w-full items-center justify-center ">
        <div onClick={moveLeft}>
          <LiaChevronLeftSolid
            className={`text-4xl md:text-6xl ${index === 0 ? "text-gray-500" : textColor} cursor-pointer`}
          />
        </div>

        <div
          className={`flex h-full w-4/5 overflow-hidden`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          {images.map((image, i) => (
            <div
              key={i}
              className="flex h-full w-full flex-shrink-0 flex-grow-0 flex-col items-center"
            >
              <span
                className="inline-block w-full text-center text-xs font-semibold leading-6 tracking-[0.3rem] md:font-bold"
                style={{ transform: `translateX(-${translatePercentage}%)` }}
              >
                {image.firstName}
                <span className="text-xs font-semibold leading-6 tracking-[0.3rem] text-gray-500 md:font-bold">
                  {image.lastName}
                </span>
              </span>

              <img
                loading="lazy"
                src={image.src}
                key={i}
                className={`h-full w-full rounded transition-all`}
                style={{ transform: `translateX(-${translatePercentage}%)` }}
              />

              {/* <img
              loading="lazy"
                src={image.src}
                key={i}
                style={{ transform: `translateX(-${translatePercentage}%)` }}
                className={`h-full w-full flex-shrink-0 flex-grow-0 rounded transition-all`}
              /> */}
            </div>
          ))}
        </div>

        <div onClick={moveRight}>
          <LiaChevronRightSolid
            className={`text-4xl md:text-6xl ${index === images.length - 1 ? "text-gray-500" : textColor} cursor-pointer`}
          />
        </div>
      </div>

      <div className=" flex w-4/5 justify-center gap-2">
        {images.map((_, i) => {
          return (
            <li
              className="inline-block cursor-pointer leading-[0]"
              key={i}
              id={i}
              onClick={moveToIndex}
            >
              <span
                style={{
                  borderColor: `${index === i ? color : "#6b7280"}`,
                }}
                className=" inline-block rounded-full border-4 border-gray-500"
                id={i}
              ></span>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
