import styled from 'styled-components'
import Link from 'next/link'
import { RotateSpinner } from 'react-spinners-kit'


export const GrayRotatingSpinner = props => (
  <SpinnerContainer>
  <RotateSpinner color="gray" size={60}/>
  </SpinnerContainer>
  );

  const SpinnerContainer = styled.div`
  position:absolute;  
  top:50vh;
  left:50vw;
  transform: translate(-50%, 0); 
`