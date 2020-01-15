import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const Item = props => (
  <li
    css={css`
      position: relative;
      display: inline;
      transition: color, opacity 0.3s ease-out;

      &:hover,
      &:active {
        opacity: 0.6;
      }
    `}
    {...props}
  />
)

export default ({ text, url, color, underline }) => (
  <Item css={[color, underline]}>
    <AniLink paintDrip to={`${url}`}>
      {text}
    </AniLink>
  </Item>
)
