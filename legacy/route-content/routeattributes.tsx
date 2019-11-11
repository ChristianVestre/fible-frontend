import styled from 'styled-components';
import './routecontent'
import Attribute from './attribute';

const RouteAttributes = () => (

        <Wrapper>
            <Attribute></Attribute>
        </Wrapper>

)
export default RouteAttributes;


const Wrapper = styled.div`

    align-content:center;
    display:flex;
    justify-content:center;
    width: 100%;
    height: 60vh;
    background:white;
    border-radius: 1.5em;

    border:solid;
    border-color:lightgrey;
    border-width:0.05em;

`