import React from 'react';
import styled from 'styled-components';
import FibleRoute from './route';
import {Droppable} from 'react-beautiful-dnd';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'
import Router from 'next/router'
import {initializeInputScreenUi} from '../../redux/actions/uiActions';
import {initializeHtype} from '../../redux/actions/dataActions';
import {connect} from 'react-redux';




const Container = styled.div`
    margin:1em;
    border: 1px solid lightgray;
    border-radius:2em;
    width:100%;
    height:100%;
    position: relative;

`
const Title = styled.h1`
    padding:8px;
`
const RouteList = styled.div`
    padding:8px;
`


class Column extends React.Component<{column: any, key:any,dataState:any, listItems:any, type:any,initializeInputScreenUi:Function, initializeHtype:Function}> {

    handleInputScreenButton= () =>{
        Router.push({
            pathname: '/inputScreen',
          })
        this.props.initializeHtype({htype:this.props.type})
        this.props.initializeInputScreenUi({dispatch:this.props.type})

    }

    render() {
       return( 
       <Container>
        <Title>{this.props.column.title}</Title> 
        <Droppable droppableId={this.props.column.id}>
        {provided => (       
        <RouteList
        ref={provided.innerRef}
        {...provided.droppableProps}
        >
        {this.props.listItems.map((itemData, index) => <FibleRoute key={itemData.id} type={this.props.type} itemData={itemData} index={index} columnId={this.props.column.id}/>)}
        {provided.placeholder}
        </RouteList>
        )}
        </Droppable>
        <InputScreenButton onClick={this.handleInputScreenButton} >
            <FontAwesomeIcon icon={faPlus}/>
        </InputScreenButton>
        </Container>
        
       )}

}

const mapStateToProps = state => {
    return {dataState:state.data ,initializeInputScreenState:state.initializeInputScreenState};
  };



export default connect(mapStateToProps,{initializeInputScreenUi, initializeHtype  })(Column);



const InputScreenButton = styled.button`
    position:absolute;
    bottom:0;
    right:0;
    font-size:6vh;
    border:0;
    color:none;
    background-color:transparent;

    :focus {
        outline:none;
    }
    `