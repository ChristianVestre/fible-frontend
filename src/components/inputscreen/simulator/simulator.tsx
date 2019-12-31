import styled from 'styled-components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import Headline from './simulatorComponents/headline'
import {dataUpdateComponentsOrder} from '../../../lib/redux/actions/dataActions'
import { UiState, DataState } from '../../../types/reduxTypes';
import SimulatorTemplate from './simulatorTemplate';



const Simulator = props => {
    console.log(props)
    const dispatch = useDispatch()
    const uiState = useSelector((state:UiState) => state.ui)
    const dataState = useSelector((state:DataState) => state.data)
    const componentCreator = props => {
        console.log(dataState[dataState.selectedHtype])
        console.log(dataState[dataState.selectedHtype][dataState.selectedHtypeId])
        return dataState[dataState.selectedHtype][dataState.selectedHtypeId].components.length > 0 ?
        dataState[dataState.selectedHtype][dataState.selectedHtypeId].components.map((id,index) =>{
            
            if(id != ""){ 
            let component =  dataState.components[id];
            switch (component.type) {
                case ("HEADLINE"): {
                    //return <HeadlineText key={component.id} component={component} index={index}></HeadlineText>
                    return <SimulatorTemplate key={component.id} component={component} index={index} 
                    underComponent={<Headline key={component.id} component={component}/>}>
                    </SimulatorTemplate>
                }
                default:
                    return<div></div>
            }
        }

        }): [1].map((index) => <div key={index}></div>)
        
    }

    const onDragEnd = result =>{
        const { destination, source, draggableId } = result;
        if (!destination) {
            return;
        }

        if (destination.droppableId == source.droppableId &&
            destination.index == source.index) {
            return;
        }
        const newOrder = Array.from(dataState[dataState.selectedHtype][dataState.selectedHtypeId].components)
        const htype = dataState.selectedHtype
        const selectedHtypeId = dataState.selectedHtypeId
       // const columnId = source.droppableId;
        //const column = props.uiState.columns[source.droppableId]
        //const newOrder = Array.from(column.ids);

        newOrder.splice(source.index, 1);
        newOrder.splice(destination.index, 0, draggableId);
        dispatch(dataUpdateComponentsOrder({ newOrder,htype,selectedHtypeId  }))
    }

    
        return (<BackgroundWrapper>
                <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="simulator">
                {provided => (
                <FilledSimulator
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                >{componentCreator(props)}
                    {provided.placeholder}
                </FilledSimulator>)}
                </Droppable>
                </DragDropContext>
                </BackgroundWrapper>
                )
}
export default Simulator


/*
function Simulator() {
    return (
        <BackgroundWrapper>
            <ForegroundWrapper>
                <Image src="mountains.png"></Image>
            </ForegroundWrapper>
        </BackgroundWrapper>
    )
}

export default Simulator
*/
const BackgroundWrapper = styled.div`
  width: 50vw;
  height: 100vh;
  display:flex;
  background:white;
  align-content:center;
  justify-content:center;
`;

const FilledSimulator = styled.div`
  width:40vh;
  height: 84vh;
  align-self:center;
  display:flex;
  border-style:solid;
  border-radius: 1.5em;
  border-color:lightgrey;
  border-width:0.05em;
  flex-direction:column;
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