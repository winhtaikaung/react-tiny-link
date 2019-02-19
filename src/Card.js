import React from "react";
import styled, { css } from "styled-components";
import { isLarge, media } from "./utils";

const smallMediaStyle = css`
  height: 127px;
`;
const largeMediaStyle = css`
  height: 382px;
`;

const largeContentStyle = css`
  flex: 0 0 125px;
`;

const smallDescriptionStyle = css`
  p {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: ${({ maxLine }) => (maxLine ? maxLine : 2)};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
  ${media.mobile`
    > p {
      
  -webkit-line-clamp: ${({ minLine }) => (minLine ? minLine : 1)};
 
    }
  `};
`;

const largeDescriptionStyle = css`
  p {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: ${({ maxLine }) => (maxLine ? maxLine : 2)};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
  ${media.mobile`
    > p {
      -webkit-line-clamp: ${({ minLine }) => (minLine ? minLine : 1)};
    }
  `};
`;

export const Media = styled("div")`
    display: block;
    height: auto;
    position: relative;
    background: ${({ src }) =>
      src && `url(${src}) center center / cover no-repeat rgb(225, 232, 237)`};
    flex: ${({ cardSize }) => (isLarge(cardSize) ? "1 1 0%;" : "0 0 125px;")}
    overflow: hidden;
    transition: flex-basis 0.25s ease-in-out 0s;
`;

export const ContentWrapper = styled("div")`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex: 1;
  padding: 10px 15px;
  min-width: 0;
  box-sizing: border-box;
  ${({ cardSize }) => isLarge(cardSize) && largeContentStyle};
`;

export const Header = styled("header")`
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  flex-grow: 1.2;

  ${({ cardSize }) =>
    !isLarge(cardSize) ? smallDescriptionStyle : largeDescriptionStyle};
`;
export const Content = styled("div")`
  text-align: left;
  font-size: 14px;
  flex-grow: 2;
  margin: auto 0;
  line-height: 18px;
  ${({ cardSize }) =>
    !isLarge(cardSize) ? smallDescriptionStyle : largeDescriptionStyle};
`;

export const Description = styled("p")`
  &&& {
    text-align: inherit;
    font-weight: inherit;
    font-family: inherit;
    color: inherit;
    margin: 0;
  }
`;

export const Footer = styled("footer")`
  text-align: left;
  font-size: 12px;
  margin: 0;
  flex-grow: 0;
`;

export const Card = styled("a")`
  max-width: 500px;
  background-color: rgb(255, 255, 255);
  color: rgb(24, 25, 25);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: flex;
  opacity: 1;
  position: relative;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
  flex-direction: ${({ cardSize }) => (isLarge(cardSize) ? "column" : "row")}
    ${({ cardSize }) => (isLarge(cardSize) ? largeMediaStyle : smallMediaStyle)};

  transition-property: background, border-color, height;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(225, 232, 237);
  overflow: hidden;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    background: rgb(245, 248, 250);
    border-color: rgba(136, 153, 166, 0.5);
  }
`;
