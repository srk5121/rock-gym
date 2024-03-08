import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { reviews } from "./index.js";
import { useState } from "react";

let translatePercentage = 0;
let touchStartPosition;
let touchEndPosition;
const Reviews = () => {
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
    if (index !== reviews.length - 1) {
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
      touchStartPosition - touchEndPosition > 70 && moveRight();
    } else {
      touchEndPosition - touchStartPosition > 70 && moveLeft();
    }
  };
  const handleTouchMove = (e) => {
    touchEndPosition = e.touches[0].pageX;
  };

  return (
    <section
      id="reviews"
      className=" mx-auto mb-6 scroll-m-[-1px] md:max-w-2xl lg:max-w-4xl"
    >
      <div className="relative flex flex-col items-center">
        <h1 className="relative my-6 text-center font-primary text-5xl tracking-[0.4rem] text-primary">
          REVIEWS
        </h1>

        <div className="relative flex w-full flex-col items-stretch justify-start gap-3 lg:w-4/5">
          <div className="flex w-full items-center justify-center">
            <div
              onClick={moveLeft}
              className="grid aspect-square w-[10%] place-content-center"
            >
              <MdKeyboardArrowLeft
                className={`text-4xl text-gray-500 md:text-5xl
                ${index === 0 ? "invisible" : "visible"}`}
              />
            </div>

            <div
              className="flex w-4/5 items-center overflow-hidden rounded-lg"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onTouchMove={handleTouchMove}
            >
              {reviews.length &&
                reviews.map((review, i) => {
                  return (
                    <div
                      key={i}
                      className=" flex h-full w-full flex-shrink-0 flex-grow-0 flex-col items-stretch gap-4 rounded bg-neutral-800 p-6 transition-all md:p-10"
                      style={{
                        transform: `translateX(-${translatePercentage}%)`,
                      }}
                    >
                      <div className="flex gap-6">
                        <img
                          loading="lazy"
                          src={review.img}
                          alt={review.name}
                          className="aspect-square w-1/5 rounded-full border-2 border-primary"
                        />
                        <div className="flex flex-col justify-center gap-1">
                          <h3 className="font-semibold tracking-wide">
                            <span className="tracking-[0.3rem] text-primary md:text-lg md:font-bold md:tracking-[0.4rem]">
                              {review.firstName}{" "}
                            </span>
                            <span className=" tracking-[0.3rem] text-white md:text-lg md:font-bold">
                              {review.lastName}
                            </span>
                          </h3>
                          <div className="flex gap-1 text-primary">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                          </div>
                        </div>
                      </div>

                      <div className="">
                        <p className=" break-word no-scrollbar aspect-[3/2] overflow-y-scroll text-neutral-200 md:aspect-auto">
                          {review.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="grid aspect-square w-[10%] place-content-center">
              <MdKeyboardArrowRight
                className={`text-4xl text-gray-500 md:text-5xl
                ${index === reviews.length - 1 ? "invisible" : "visible"}
                `}
                onClick={moveRight}
              />
            </div>
          </div>

          <div className="mx-auto flex w-4/5 justify-center gap-2">
            {reviews.map((_, i) => {
              return (
                <li
                  className="inline-block leading-[0]"
                  key={i}
                  id={i}
                  onClick={moveToIndex}
                >
                  <span
                    style={{
                      borderColor: `${index === i ? "#fdd100" : "#6b7280"}`,
                    }}
                    className=" inline-block rounded-full border-4 border-gray-500"
                    id={i}
                  ></span>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
