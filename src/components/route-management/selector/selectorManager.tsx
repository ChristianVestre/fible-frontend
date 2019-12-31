import { DragDropContext } from 'react-beautiful-dnd'
import React from 'react';
import Selector from './selector';
import { useDispatch, useSelector } from 'react-redux';
import { dataUpdateHtypeOrder, dataUpdateChildHtypeOrder } from '../../../lib/redux/actions/dataActions'
import { DataState, UiState } from '../../../types/reduxTypes';


const SelectorManager = props => {
    const dispatch = useDispatch()
    const dataState = useSelector((state: DataState) => state.data);
    const uiState = useSelector((state: UiState) => state.ui);
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
        //remake probably
        if (destination.droppableId == source.droppableId) {
            const htype = source.droppableId;
            if(source.droppableId == "routes"){
                const newOrder = Array.from(dataState.user[htype]);
                newOrder.splice(source.index, 1);
                newOrder.splice(destination.index, 0, draggableId);
                dispatch(dataUpdateHtypeOrder({ newOrder, htype }))
            } else{
                const htypeParent = htype == "stops" ? "routes" : "stops"
                const newOrder = Array.from(dataState[htypeParent][uiState.routeMgmt.selector['selected' + htypeParent]][htype]);
                newOrder.splice(source.index, 1);
                newOrder.splice(destination.index, 0, draggableId);
                dispatch(dataUpdateChildHtypeOrder({
                    newOrder: newOrder,
                    htype: htype,
                    parentHtype: htypeParent,
                    parentHtypeId: uiState.routeMgmt.selector['selected' + htypeParent]
                }))
            }
        }
    }
    const selectorFunction = props => {
        switch (props.type) {
            case ("routes"): {
                //console.log(props.dataState.routeMgmt.user.routes)
                const selector = dataState.user.routes;
                let listItems
                listItems = selector ? selector.reduce((result, route) => {
                    if (dataState.routes[route] != undefined) { result.push(dataState.routes[route]) }
                    return result
                }, []) : []

                return <Selector key='routes' selector={selector} type="routes" listItems={listItems} />;
            }
            case ("stops"): {
                const selector = dataState.routes[uiState.routeMgmt.selector.selectedroutes].stops;
                let listItems
                listItems = selector ? selector.reduce((result, stop) => {
                    if (dataState.stops[stop] != undefined
                        && dataState.routes[uiState.routeMgmt.selector.selectedroutes] != undefined
                        && dataState.routes[uiState.routeMgmt.selector.selectedroutes].stops.includes(stop)) { result.push(dataState.stops[stop]) }
                    return result
                }, []) : []
                return <Selector key='stops' selector={selector} type="stops" listItems={listItems} />;
            }
            case ("pois"): {
                const selector = dataState.stops[uiState.routeMgmt.selector.selectedstops].pois;
                let listItems
                console.log(dataState.stops[uiState.routeMgmt.selector.selectedstops])
                listItems = selector ? selector.reduce((result, poi) => {
                    console.log(poi)
                    if (dataState.pois[poi] != undefined
                        && dataState.stops[uiState.routeMgmt.selector.selectedstops] != undefined
                        && dataState.stops[uiState.routeMgmt.selector.selectedstops].pois.includes(poi)) { result.push(dataState.pois[poi]) }
                    return result
                }, []) : []
                return <Selector key='pois' selector={selector} type="pois" listItems={listItems} />;
            }
            default: return <p>wrong</p>
        }
    }
    return (<DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        {selectorFunction(props)}
    </DragDropContext>)
}

export default SelectorManager

