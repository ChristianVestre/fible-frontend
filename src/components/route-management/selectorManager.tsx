import { DragDropContext } from 'react-beautiful-dnd'
import React from 'react';
import Selector from './selector';
import { connect } from 'react-redux';
import { updateOrder, updateRoutemgmtState } from '../../lib/redux/actions/uiActions'


const SelectorManager = props => {
    //console.log(props)
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
                //console.log(props.dataState.routeMgmt.user.routes)
                const selector = props.dataState.routeMgmt.user.routes;
                let listItems
                listItems = selector ? selector.map((route) => props.dataState.routeMgmt.routes[route.id]):[]
                return <Selector key='routes' selector={selector} type="routes" listItems={listItems} />;
            }
            case ("stops"):{
                const selector =  props.dataState.routeMgmt.user.stops;
                let listItems
                listItems = selector ? listItems = selector.map((stop) => props.dataState.routeMgmt.stops[stop.id]) : []
                return <Selector key='stops' selector={selector} type="stops" listItems={listItems} />;
            }
            case ("pois"): {
                const selector = props.dataState.routeMgmt.user.stops;
                let listItems
                listItems = selector ? selector.map((poi) => props.dataState.routeMgmt.pois[poi.id]): []
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

export default connect(mapStateToProps, { updateOrder, updateRoutemgmtState})(SelectorManager);

