import styled from 'styled-components'
import React from 'react'
import { updateInputScreenState} from '../../../lib/redux/actions/uiActions'
import {connect} from 'react-redux';
import { dataAddNewComponent } from '../../../lib/redux/actions/dataActions';




const GridElement = props => {
      
    
    const handleInputMenuUpdate = (props) => {
        const dispatch = props.dispatch
      //  console.log(dispatch)
        console.log(props)
        props.updateInputScreenState(dispatch);
        props.dataAddNewComponent({
          type:props.type,
          htype:props.dataState.inputScreen.selectedHtype,
          selectedHtypeId:props.dataState.inputScreen.selectedHtypeId,
          user:props.dataState.inputScreen.user })
    };
    
  

      return(
        <Wrapper onClick={() => handleInputMenuUpdate(props)}>
        <StyledText>{props.name}</StyledText>
        </Wrapper>
      )
  
}

const mapStateToProps = state => {
  return {dataState:state.data};
};



export default connect(mapStateToProps,{ updateInputScreenState, dataAddNewComponent })(GridElement);


/*
const GridElement = props => (
    <Wrapper>
    <StyledText>{props.name}</StyledText>
    </Wrapper>
  );

export default GridElement
*/

const Wrapper = styled.div`
    min-width: ${46.9 / 2}vw;
    margin:1vh;
    box-sizing: border-box;
    height:10vh;
    display:flex;
    cursor: pointer;
    -ms-user-select: none; 
    user-select: none;

    :hover {
        border:solid 0.1vh lightgray;
        border-radius:2vh;
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
        background-image: radial-gradient(circle,#d4d4d4 10%, transparent 10.01%);
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

const StyledText = styled.h2`
    font-size: 3vh;
    color:black;
    border:none;
    background:none;
    font-weight:lighter;
    text-decoration: none;
    padding-left:1vw;
    text-justify:center;
    vertical-align:center;
    text-align:center;
`

