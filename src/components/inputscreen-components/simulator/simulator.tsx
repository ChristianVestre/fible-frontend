import styled from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import HeadlineText from './simulatorComponents/headline'
import {updateComponentsOrder} from '../../../lib/redux/actions/dataActions'



const Simulator = props => {
    const componentCreator = props => {
        return props.dataState.inputScreen[props.uiState.inputScreen.simulator.show][props.dataState.inputScreen.selectedHtypeId].components.length > 0 ?
        props.dataState.inputScreen[props.uiState.inputScreen.simulator.show][props.dataState.inputScreen.selectedHtypeId].components.map((id,index) =>{

            if(id != ""){ 
             //console.log(id)
             //console.log(props.dataState.components)
            let component =  props.dataState.inputScreen.components[id];
            switch (component.type) {
                case ("HEADLINE"): {
                    return <HeadlineText key={component.id} component={component} index={index}></HeadlineText>
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
        const newOrder = Array.from(props.dataState.inputScreen[props.uiState.inputScreen.simulator.show][props.dataState.inputScreen.selectedHtypeId].components)
        const htype = props.uiState.inputScreen.simulator.show
        const selectedHtypeId = props.dataState.inputScreen.selectedHtypeId
       // const columnId = source.droppableId;
        //const column = props.uiState.columns[source.droppableId]
        //const newOrder = Array.from(column.ids);

        newOrder.splice(source.index, 1);
        newOrder.splice(destination.index, 0, draggableId);
        console.log(newOrder)
        props.updateComponentsOrder({ newOrder,htype,selectedHtypeId  })
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
                </FilledSimulator>

                )}
                </Droppable>
                </DragDropContext>
            
        </BackgroundWrapper>
        )
}

const mapStateToProps = state => {
    return { uiState: state.ui, dataState: state.data };
};

export default connect(mapStateToProps,{updateComponentsOrder})(Simulator);


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