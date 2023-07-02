import React, { useEffect, useState } from "react";
import style from "./Box.module.css";
import { FaStar } from "react-icons/fa";

const Box = ({ percentage, title, Date, time }) => {
  const [star, setStar] = useState(0);
  const [starHover, setStarHover] = useState(0);

  return (
    <div className={style.mainBoxSection}>
      <div className={`${style.ratingBox} d-flex align-items-center`}>
        <div className={style.ratingStar}>
          {[...Array(5)].map((item, index) => {
            index += 1;
            return (
              <FaStar
                size={20}
                key={index}
                className={
                  index <= (starHover || star)
                    ? `${style.selected} me-2`
                    : `${style.Unselected} me-2`
                }
                onClick={() => setStar(index)}
                onMouseEnter={() => setStarHover(index)}
                onMouseLeave={() => setStarHover(star)}
              />
            );
          })}
        </div>
        {/* <div>
          8 reviews
        </div> */}
      </div>
    </div>
  );
};

export default Box;
