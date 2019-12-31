import styled from 'styled-components';
import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { dataUpdateComponentsOrder } from '../../../lib/redux/actions/dataActions'
import ListItem from './spListItem';
import { UiState } from '../../../types/reduxTypes';
import dynamic from 'next/dynamic';



const  SPSelector = props => {
  const uiState = useSelector((state:UiState) => state.ui)  

  const titleHandler = () => {
    const htypeParentLookup = {stops:"route",
    pois:"stop"
    }
    let title = ""
    if(props.type =="ALL"){
      title = uiState.routeMgmt.selector.htype.toLowerCase() +  " library"
    } else {
      title = uiState.routeMgmt.selector.htype.toLowerCase() +  " in " + htypeParentLookup[uiState.routeMgmt.selector.htype]
    }
    return title
  }

    return (<ContainerStyled>
      <TitleStyle>{titleHandler()}</TitleStyle>
      <Droppable droppableId={props.type}>
        {provided => (
          <SandpContainerStyled
            ref={provided.innerRef}
            {...provided.droppableProps}>
            {
              props.list.map((elem,index) => <ListItem key={elem.id} itemData={elem} index={index} headline={elem.name}/>)
            }
            {provided.placeholder}
          </SandpContainerStyled>

        )}
      </Droppable>
    </ContainerStyled>)
  }

  export default dynamic(() => Promise.resolve(SPSelector), {
    ssr: false
})



const ContainerStyled = styled.div`
  width:30vw;
  height: 88%;
  align-self:center;
  justify-self:flex-end;
  display:flex;
  align-content:center;
  justify-content:center;
  margin-left:5vw;
  margin-right:5vw;
`

const SandpContainerStyled = styled.div`
    background-color:white;
    margin:1em;
    border: 1px solid lightgray;
    border-radius:2em;
    min-width:20vw;
    width:100%;
    height:100%;
    position: relative;
`

const TitleStyle = styled.h2`
    position:absolute;
    top:0;
    font-size: 4vh;
    color:black;
    border:none;
    background:none;
    text-decoration: none;
    padding-left:1em;  
    font-weight:lighter;
    text-align:center;
    margin:0;
    padding:0;
`