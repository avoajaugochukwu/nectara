import React from "react";
import PropTypes from 'prop-types';
import { Button } from "./Button";

import "./centerHeaderBody.css";

/**
 * UI for components with header and body that are centered
 */

export const CenterHeaderBody = ({
  label,
  header,
  body,
  backgroundColor,
  buttonText,
  buttonPrimary,
  buttonClick,
}) => {
  const background = backgroundColor ? backgroundColor : 'gray';
  return (
    <div className="text-center" style={{backgroundColor: background}}>
      <div className="w-full md:w-2/4 mx-auto py-24">
        {label && <div className="mt-8 text-green-800 font-light text-xl">{label}</div>}
        <div className="mt-8 text-5xl">{header}</div>
        <div className="my-8">{body}</div>
        {/*  */}
        {buttonText && (
          <div>
            <Button handleClick={buttonClick} primary={buttonPrimary ? buttonPrimary : false} size="small" label={buttonText} />
          </div>
        )}
        {/*  */}
      </div>
    </div>
  );
};

CenterHeaderBody.prototype = {
  /**
   * Small header 
   */
  label: PropTypes.string,
  /**
   * Header
   */
  header: PropTypes.string,
  /**
   * Body
   */
  body: PropTypes.string,
  /**
   * Optional button
   */
  buttonText: PropTypes.string,
  /**
   * Type of button
   */
  buttonPrimary: PropTypes.bool
}

CenterHeaderBody.defaultProps = {
  label: '',
  header: '',
  body: '',
  buttonText: '',
  buttonPrimary: ''
}
