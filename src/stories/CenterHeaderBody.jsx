import React from "react";
import { Button } from "./Button";

import "./centerHeaderBody.css";

/**
 * UI for components with header and body that are centered
 */

export const CenterHeaderBody = ({
  label,
  header,
  body,
  buttonText,
  primary,
}) => {
  return (
    <div className="text-center">
      <div className="w-full md:w-3/5 mx-auto mt-10">
        <div className="mt-8 text-green-800">{label}</div>
        <div className="mt-8 text-5xl">{header}</div>
        <div className="my-8">{body}</div>
        {/*  */}
        {buttonText && (
          <div>
            <Button primary={primary ? primary : false} size="small" label={buttonText} />
          </div>
        )}
        {/*  */}
      </div>
    </div>
  );
};
