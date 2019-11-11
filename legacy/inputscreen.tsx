import Link from 'next/link';
import Sidebar from './sidebar';
import RouteContent from './route-content/routecontent';
import Simulator from '../src/components/inputscreen-components/simulator/simulator';
import styled from 'styled-components';



const Container = styled.section`
    width: 100vw;
    height: 100vh;
    display:flix;
    flex-direction:row;
    margin:0;
    padding:0;
`




function InputScreen() {
  return (
    <Container>
    <Sidebar></Sidebar>
    <RouteContent></RouteContent>
    <Simulator></Simulator>
    </Container>
  )
}

export default InputScreen