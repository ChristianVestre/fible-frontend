import styled from 'styled-components';
import React from 'react';




const Headline = props => {
    return(
        <HeadlineText>{JSON.parse(props.component.content).headline}</HeadlineText>
    )
}

export default Headline

const HeadlineText = styled.h1`
    font-weight: lighter;
    position:relative;
    user-select: none;
    left:2%;
    height: 94%;
    width: 96%;
    font-size:3vh;
    margin:0.1vh;
    padding:0.5vh;
    text-align:center;
`