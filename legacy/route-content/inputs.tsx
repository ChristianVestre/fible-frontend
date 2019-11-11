import styled from 'styled-components';
import './routecontent'
import '@material/ripple';

const Inputs = () => (

        <Wrapper>
            <StyledButton>Save</StyledButton>
            <StyledTextArea placeholder="Content text">
            </StyledTextArea>
        </Wrapper>

)
export default Inputs;


const StyledTextArea = styled.textarea`
    height: 94%;
    width: 97%;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;
    align-self:center;
    font-size:16px;
    border:0;
    display:flex;
    resize:none;
    :focus {
        outline:none;
        caret-color:salmon;
    }
`


const Wrapper = styled.div`
    align-content:center;
    display:flex;
    justify-content:center;
    width: 100%;
    height: 39.6vh;
    background:white;
    border-radius: 1.5em;
    margin:0;
    border:solid;
    border-color:lightgrey;
    border-width:0.05em;
`

const StyledButton = styled.button`
    position:absolute;
    bottom:2%;
    right:33%;
    z-index:1;
    color:white;
    border:0;
    background:salmon;
    font-size:20px;
    font-weight:bold;
    padding:0.7em;
    padding-left:2em;
    padding-right:2em;
    border-radius:0.3em;
    text-align:center;

    :focus {
        outline:none;
    }

    overflow: hidden;
    transform: translate3d(0, 0, 0);
        
    :after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
        background-repeat: no-repeat;
        background-position: 50%;
        transform: scale(10, 10);
        opacity: 0;
        transition: transform .5s, opacity 1s;
        }

    :active:after {
        transform: scale(0, 0);
        opacity: .3;
        transition: 0s;
    }


`
