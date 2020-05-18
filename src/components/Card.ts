import styled, { css } from 'styled-components'
import { isLarge, media } from '../utils'
import { ReactTinyLinkType } from '../ReactTinyLinkTypes'

// Media Style
const smallMediaStyle = css`
  height: 127px;
`
const largeMediaStyle = css`
  height: ${({ isShownGraphic }) => (isShownGraphic ? '382px;' : 'auto')};
`

// Content Style
const largeContentStyle = css`
  flex: 0 0 125px;
`

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
`

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
`
// Styled Components for cards
export const Media = styled('div')`
    display: block;
    height: auto;
    position: relative;
    background: ${({ src, placeholderBg, type }) =>
      src
        ? `url(${src}) center center / ${
            type === ReactTinyLinkType.TYPE_AUDIO ? `contain` : `cover`
          } no-repeat rgb(225, 232, 237)`
        : placeholderBg};
    
    flex: ${({ cardSize }) => (isLarge(cardSize) ? '1 1 0%;' : '0 0 125px;')}
    overflow: hidden;
    transition: flex-basis 0.25s ease-in-out 0s;
`
Media.defaultProps = {
  placeholderBg: `rgb(225, 232, 235)`,
}

export const Video = styled('video')`
width:100%;
display: block;
height: 100%;
    position: relative;
    flex: ${({ cardSize }) => (isLarge(cardSize) ? '1 1 0%;' : '0 0 125px;')}
    overflow: hidden;
object-fit:cover
`

export const ContentWrapper = styled('div')`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex: 1;
  padding: 10px 15px;
  min-width: 0;
  box-sizing: border-box;
  ${({ cardSize }) => isLarge(cardSize) && largeContentStyle};
`

export const Header = styled('header')`
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  flex-grow: 1.2;

  ${({ cardSize }) => (!isLarge(cardSize) ? smallDescriptionStyle : largeDescriptionStyle)};
`
export const Content = styled('div')`
  text-align: left;
  font-size: 14px;
  flex-grow: 1;
  margin: auto 0;
  line-height: 18px;

  ${({ cardSize }) => (!isLarge(cardSize) ? smallDescriptionStyle : largeDescriptionStyle)};
`

export const Footer = styled('footer')`
  text-align: left;
  font-size: 12px;
  margin: 0;
  flex-grow: 0;
`

export const Card = styled('a')`
  max-width: ${({ width }) => (width ? width : `100vw`)};
  background-color: rgb(255, 255, 255);
  color: rgb(24, 25, 25);
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  display: flex;
  opacity: 1;
  position: relative;
  transition-duration: 0.35s;
  transition-timing-function: ease-in-out;
  flex-direction: ${({ cardSize }) => (isLarge(cardSize) ? 'column' : 'row')}
    ${({ cardSize }) => (isLarge(cardSize) ? largeMediaStyle : smallMediaStyle)};

  transition-property: background, border-color, height;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(225, 232, 237);
  overflow: hidden;
  text-decoration: none;
  -webkit-tap-highlight-color: rgb(245, 248, 250);
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  &:hover {
    background: rgb(245, 248, 250);
  }
`
Card.defaultProps = {
  rel: 'noopener noreferrer',
  target: '_blank',
}
