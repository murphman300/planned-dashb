import PropTypes, {InferProps} from "prop-types";
import React from "react";
import {PlannedCTAButtonButton, PlannedCTAButtonButtonDiv} from "../themes/components";


const PlannedCTAButtonPropTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.any,
}

type PlannedCTAButtonTypes = InferProps<typeof PlannedCTAButtonPropTypes>

export const PlannedCTAButton = ({buttonText, onClick}: PlannedCTAButtonTypes) => {
  return(
    <PlannedCTAButtonButtonDiv>
      <PlannedCTAButtonButton onClick={onClick} className={'planned-cta-button'}>{buttonText}</PlannedCTAButtonButton>
    </PlannedCTAButtonButtonDiv>
  )
}
