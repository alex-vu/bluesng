import React, { Children } from "react"
/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core"
import emotionNormalize from "emotion-normalize"

export default ({ children }) => (
  <div>
    <Global
      styles={css`
        ${globalStyles}

        html {
          font-size: 10px;
        }

        body {
          font-family: Noto Sans KR, sans-serif;
          font-size: 1.6rem;
          overflow: hidden;
        }

        .tl-edges {
          overflow-x: initial;
        }
      `}
    />
    {children}
  </div>
)

const globalStyles = css`
  ${emotionNormalize}

  html {
    box-sizing: border-box;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body,
  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    list-style: none;
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }

  img,
  svg {
    vertical-align: middle;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  button {
    border: 0;
  }

  p,
  figure {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
