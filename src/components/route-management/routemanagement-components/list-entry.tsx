import styled from 'styled-components';
import Draggable from 'react-draggable';



const ListEntry = props => (
    <Draggable axis="y">
    <Wrapper>
        <Headline>{props.headline}</Headline>
        <StopsWrapper>
        {props.stops.map(stop => <Stops>{stop} - </Stops>)}
        </StopsWrapper>
        
    </Wrapper>
    </Draggable>
)

export default ListEntry;

const Wrapper = styled.div`
    height:10%;
    border:solid;
    position:relative;
    left:1%;
    width:98%;
    border-radius:2em;
    margin-top:1em;
    border-width:0.1em;
    border-color:grey;
`

const Headline = styled.h3`
    font-size: 1.2em;
    font-weight:lighter;
    position:relative;
    user-select:none;
    top:10%;
    left:20%;
    margin:0;
    color:black;
    border:none;
    background:none;
    text-decoration: none;
    
`

const StopsWrapper = styled.ul`
    display:flex;
    flex-direction:row;
`

const Stops = styled.h4`
    font-size: 0.8em;
    font-weight:lighter;
    position:relative;
    user-select:none;
    top:48%;
    left:23%;
    margin:0;
    margin-left:0.2em;
    color:black;
    border:none;
    background:none;
    text-decoration: none;
`