import styled from '@emotion/styled'
import { MOBILE_BREAKPOINT } from 'shared/constants'
import { primaryColor } from 'styles/global'
import { pixelToRem } from 'utils/pixelToRem'

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
`

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1;

  padding: 0 ${pixelToRem(32)};

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding: 0 ${pixelToRem(16)};
  }
`

export const LeftSide = styled(SideContainer)`
  background-color: ${primaryColor};
  color: #fff;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    display: none;
  }

  h1 {
    line-height: 1.5;
  }

  span {
    background-color: #fff;
    border-radius: 8px;
    padding: 0px 4px;
    color: ${primaryColor};
  }
`

export const RightSide = styled(SideContainer)``

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  gap: 16px;
`
