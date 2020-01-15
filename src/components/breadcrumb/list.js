import React from "react"
/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const Breadcrumb = props => (
  <ul
    css={css`
      position: relative;
    `}
    {...props}
  />
)

export default ({ children }) => <Breadcrumb>{children}</Breadcrumb>
