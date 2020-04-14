import * as React from 'react';

import styled, { css, keyframes } from 'styled-components';

// Key Frames
const shimmerKeyFrame = keyframes`
   0%{
        background-position: 100% 80%;
    }
    100%{
        background-position: 0 80%;
    }
`
const loadingStyle = css`
  animation-duration: 1.4s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ${shimmerKeyFrame};
  background: darkgray;
  background: linear-gradient(90deg, #cacaca 25%, #e4e4e4 37%, #f7f6f6 63%);
  background-size: 800px 100%;
  color: transparent;
  -webkit-line-clamp: 1;
  border-radius: 10px;
  width: ${({ loadingWidth }) => (loadingWidth ? `${100 / loadingWidth}%` : `100%`)};
`

const UnstyledDescription = ({ loading, loadingWidth, maxLine, minLine, className, ...props}) => {
    return (
        <p {...props} className={className}>{...props.children}</p>
    );
}

export const Description = styled(UnstyledDescription)<{ loading: boolean }>`
  &&& {
    text-align: inherit;
    font-weight: inherit;
    font-family: inherit;
    color: inherit;
    margin: 0;
    ${({ loading }) => loading && loadingStyle}
  }
`

export default Description;
