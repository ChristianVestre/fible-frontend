import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd'
import React from 'react';
import Selector from './selector';
import { connect } from 'react-redux';
import { updateOrder, updateSelectorManagerState } from '../../redux/actions/uiActions'
import {cleanNonsavedHtypes} from '../../redux/actions/dataActions';
import gql from 'graphql-tag';
import { withApollo } from '../../lib/apollo';



const SelectorManager = props => {
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
        switch (props.type) {
            case ("routes"): {
                const selector = props.dataState.user.routes;
                console.log(props.dataState.user)
                let listItems
                listItems = selector ? selector.map((route) => props.dataState.routes[route]):[]
           //    console.log(listItems)
                return <Selector key='routes' selector={selector} type="routes" listItems={listItems} />;
            }
            case ("stops"):{
                const selector =  props.dataState.user.stops;
                let listItems
                listItems = selector ? listItems = selector.map((stop) => props.dataState.stops[stop]) : []
                return <Selector key='stops' selector={selector} type="stops" listItems={listItems} />;
            }
            case ("pois"): {
                const selector = props.dataState.user.stops;
                let listItems
                listItems = selector ? selector.map((poi) => props.dataState.pois[poi]): []
                return <Selector key='pois' selector={selector} type="pois" listItems={listItems} />;
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

export default connect(mapStateToProps, { updateOrder, updateSelectorManagerState, cleanNonsavedHtypes })(SelectorManager);

