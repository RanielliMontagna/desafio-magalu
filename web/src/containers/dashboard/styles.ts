import styled from '@emotion/styled'
import { MOBILE_BREAKPOINT } from 'shared/constants'
import { primaryColor } from 'styles/global'
import { pixelToRem } from 'utils/pixelToRem'

export const DashboardContainer = styled.div`
  height: 100vh;
`

export const HeaderContainer = styled.div`
  position: relative;
  background-color: ${primaryColor};
  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  height: ${pixelToRem(400)};

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    height: ${pixelToRem(300)};
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${pixelToRem(8)};

  height: calc(100vh - ${pixelToRem(400)});

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    height: calc(100vh - ${pixelToRem(300)});
  }
`

export const DataContainer = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;

  gap: ${pixelToRem(8)};
`
