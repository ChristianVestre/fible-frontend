import styled from 'styled-components';

const Attribute = () => (

    <Wrapper draggable>
        <StyledH2>Christian's Norway Route</StyledH2>
        <StyledP>Headline</StyledP>

    </Wrapper>

)
export default Attribute;


const Wrapper = styled.div`
    display:flex;
    width: 99%;
    height: 10vh;
    align-content:flex-start;
    justify-content:center;
    margin-top:0.8em;
    background:white;
    border-radius: 1.5em;
    border:solid;
    border-color:lightgray;
    border-width:0.05em;
    flex-direction:column;
`
const StyledH2 = styled.h2`
    padding-left:1em;
    align-self:flex-start;
    justify-content:center;
    font-size:1.5em;
    font-weight:lighter;
    margin:0;
    padding-bottom:0;
    padding-top:1.5em;
    
`
const StyledP = styled.p`
    font-size:1em;
    font-weight:lighter;
    align-self:flex-start;
    color:black;
    font-style:italic;

    margin-top:0.4em;;
    padding-left:1.8em;

`