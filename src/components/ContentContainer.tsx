import React from "react";
import {
  ContentContainerDiv,
  ContentSectionContainerDiv,
  ContentSectionContainerContentDiv, ContentSectionContainerContentChildDiv, ContentSectionTitleH1
} from '../themes/containers'

type ContentContainerProps = {
  children: JSX.Element | JSX.Element[],
  title?: string
};

export const ContentSectionContainer = ({children, title}: ContentContainerProps) => {
  return(
    <ContentSectionContainerDiv>
      {title ? <ContentSectionTitleH1>{title}</ContentSectionTitleH1> : null}
      <ContentSectionContainerContentDiv>
        {React.Children.toArray(children).map((child, index) => <ContentSectionContainerContentChildDiv
          key={`content-section-container-child-${index}`}
        >
          {child}
        </ContentSectionContainerContentChildDiv>)}
      </ContentSectionContainerContentDiv>
    </ContentSectionContainerDiv>
  )
}


export const ContentContainer = ({children}: ContentContainerProps) => {
  return(
    <ContentContainerDiv>
      {React.Children.toArray(children)}
    </ContentContainerDiv>
  )
}
