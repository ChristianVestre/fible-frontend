import styled from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { updateComponentsOrder } from '../../../redux/actions/dataActions'
import ListItem from './listItem';



class SandpSelector extends React.Component<{ dataState: any, uiState: any, type: String, list:any }> {
  

  titleHandler = () => {
    const htypeParentLookup = {STOPS:"route",
    POIS:"stop"
    }
    let title = ""
    if(this.props.type =="ALL"){
      title = this.props.uiState.selector.htype.toLowerCase() +  " library"
    } else {
      title = this.props.uiState.selector.htype.toLowerCase() +  " in " + htypeParentLookup[this.props.uiState.selector.htype]
    }
    return title
  }

  render() {
    return <ContainerStyled>
      <TitleStyle>{this.titleHandler()}</TitleStyle>
      <Droppable droppableId="simulator">
        {provided => (
          <SandpContainerStyled
            ref={provided.innerRef}
            {...provided.droppableProps}>
            {
              this.props.list.map((elem,index) => <ListItem key={index} headline={elem.id}/>)
            }
            {provided.placeholder}
          </SandpContainerStyled>

        )}
      </Droppable>
    </ContainerStyled>
  }
}

const mapStateToProps = state => {
  return { uiState: state.ui, dataState: state.data };
};

export default connect(mapStateToProps)(SandpSelector);



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
  width:30vw;
  height: 96%;
  align-self:center;
  justify-self:center;
  display:flex;
  align-content:center;
  justify-content:center;
  border-style:solid;
  border-radius: 1.5em;
  border-color:lightgrey;
  border-width:0.05em;
`

const Image = styled.img`
  border-radius:1.5em;
  max-width:100%;
  max-height:30%;
  height:auto;
  width:auto;
  display: block;
  object-fit: cover;
  overflow: hidden;
`

const TitleStyle = styled.h2`
    position:absolute;
    top:5%;
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