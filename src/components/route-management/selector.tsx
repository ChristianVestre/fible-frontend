import React from 'react';
import styled from 'styled-components';
import FibleRoute from './selectorItem';
import { Droppable } from 'react-beautiful-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'
import Router from 'next/router'
import { initializeInputScreenUi, stopAndPoiManagerController, setTitle } from '../../redux/actions/uiActions';
import { initializeHtype } from '../../redux/actions/dataActions';
import { connect } from 'react-redux';




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


const Selector = props => {

    const handleInputScreenButton = () => {
        if (props.type == "routes") {
            Router.push({
                pathname: '/inputscreen',
            })
            props.initializeHtype({ htype: props.type })
            props.initializeInputScreenUi({ dispatch: props.type })
        } else {
            props.stopAndPoiManagerController({ htype: props.type })
            let firstLetter = props.type.substring(0, 1)
            let rest = props.type.substring(1)
            let title = firstLetter + rest.toLowerCase() + " manager"
            props.setTitle({ title: title })

        }
    }

    return (
        <Container>
            <Title>{props.type.substring(0,1).toUpperCase() + props.type.substring(1,)}</Title>
            <Droppable droppableId={props.type}>
                {provided => (
                    <RouteList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {console.log(props.listItems)}
                        {props.listItems.map((itemData, index) => <FibleRoute key={itemData.id} type={props.type} itemData={itemData} index={index} />)}
                        {provided.placeholder}
                    </RouteList>
                )}
            </Droppable>
            <InputScreenButton onClick={() => handleInputScreenButton()} >
                <FontAwesomeIcon icon={faPlus} />
            </InputScreenButton>
        </Container>
    )
}

//const mapStateToProps = state => {
//    return { dataState: state.data, initializeInputScreenState: state.initializeInputScreenState, stopAndPoiManagerController: state.stopAndPoiManagerController, setTitle: state.setTitle };
//};

export default Selector

//export default connect(mapStateToProps, { initializeInputScreenUi, initializeHtype, stopAndPoiManagerController, setTitle })(Selector);



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