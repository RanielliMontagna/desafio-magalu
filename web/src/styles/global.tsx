import { Global, css } from '@emotion/react'

export const primaryColor = '#0086ff'

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;

        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
    `}
  />
)
