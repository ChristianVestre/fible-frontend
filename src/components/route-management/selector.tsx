import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd'
import React from 'react';
import Column from './column';
import { connect } from 'react-redux';
import { updateOrder, updateSelectorManagerState } from '../../redux/actions/uiActions'
import {cleanNonsavedHtypes} from '../../redux/actions/dataActions';
import gql from 'graphql-tag';
import { withApollo } from '../../lib/apollo';



const Selector = props => {    
    const onDragEnd = result => {
        const { destination, source, draggableId } = result;
        if (!destination) {
            return;
        }

        if (destination.droppableId == source.droppableId &&
            destination.index == source.index) {
            return;
        }
        const columnId = source.droppableId;
        const column = props.uiState.columns[source.droppableId]
        const newOrder = Array.from(column.ids);

        newOrder.splice(source.index, 1);
        newOrder.splice(destination.index, 0, draggableId);

       // this.props.updateOrder({ newOrder, columnId })
    }


    const selectorFunction = props => {
        //fix reordering problem
        switch (props.type) {
            case ("ROUTES"): {
                const columnId = "column-1";
                const column = props.uiState.columns[columnId];
                return <Column key='column-1' column={column} type="ROUTES" listItems={props.routes.data.getRoutes} />;
            }
            case ("STOPS"):{
                const columnId = "column-2";
                const column = props.uiState.columns[columnId];
                const stops = column.ids.map((stopId) => props.uiState.stops[stopId])
                return <Column key={columnId} column={column} type="STOPS" listItems={stops} />;
            }
            case ("POIS"): {
                const columnId = "column-3";
                const column = props.uiState.columns[columnId];
                let pois = []
                column.ids.length>0 ?
                pois = column.ids.map((poiId) => props.uiState.pois[poiId]) :
                pois = [];
                return <Column key={columnId} column={column} type="POIS" listItems={pois} />;
            }
            default:
                return <p>wrong</p>
        }
    }

        return( <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
            {selectorFunction(props)}
        </DragDropContext>)
    }


const mapStateToProps = state => {
    return { selectorState: state.selector, uiState:state.ui,dataState:state.data , updateOrder: state.updateOrder };
};

export default connect(mapStateToProps, { updateOrder, updateSelectorManagerState, cleanNonsavedHtypes })(withApollo(Selector));

