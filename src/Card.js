import React from "react";
import styled from "styled-components";
import { isLarge } from "./utils";

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
  flex-direction:${({ cardSize }) => (isLarge(cardSize) ? "row" : "column")}
  height: 382px;
  transition-property: background, border-color, height;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(225, 232, 237);
  overflow: hidden;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;
