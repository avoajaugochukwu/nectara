import React from "react";
import { Button } from "../Button";
export const TwoHalvesBox = ({
  header1,
  header2,
  subText1,
  subText2,
  description1,
  description2,
  buttonText1,
  buttonText2,
  buttonClick1,
  buttonClick2,
  buttonPrimary1,
  buttonPrimary2,
  backgroundColor1,
  backgroundColor2,
}) => {
  return (
    <div className="sm:flex">
      <div className="w-full sm:w-1/2" style={{ backgroundColor: backgroundColor1 }}>
        <div className="px-12 sm:px-32 py-10 sm:py-24">
          <h3 className="text-3xl pb-2">{header1}</h3>
          <p className="font-extralight pb-8 sm:pb-12">{subText1}</p>
          <p className="h-40 font-light">{description1}</p>

          <>
            {buttonText1 && (
              <Button
                handleClick={buttonClick1}
                primary={buttonPrimary1 ? buttonPrimary1 : false}
                size="small"
                label={buttonText1}
              />
            )}
          </>
        </div>
      </div>
      <div className="w-full sm:w-1/2" style={{ backgroundColor: backgroundColor2 }}>
        <div className="px-12 sm:px-32 py-10 sm:py-24">
          <h3 className="text-3xl pb-2">{header2}</h3>
          <p className="font-extralight pb-8 sm:pb-12">{subText2}</p>
          <p className="h-40 font-light">{description2}</p>

          <>
            {buttonText1 && (
              <Button
                handleClick={buttonClick2}
                primary={buttonPrimary2 ? buttonPrimary2 : false}
                size="small"
                label={buttonText2}
              />
            )}
          </>
        </div>
      </div>
    </div>
  );
};
