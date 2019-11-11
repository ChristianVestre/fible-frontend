import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd'
import React from 'react';
import Column from './column';
import { connect } from 'react-redux';
import { updateOrder, updateSelectorManagerState } from '../../redux/actions/uiActions'



class Selector extends React.Component<{ uiState: any,selectorState:any, type: string, updateOrder: Function }> {

    onDragEnd = result => {
        const { destination, source, draggableId } = result;
        if (!destination) {
            return;
        }

        if (destination.droppableId == source.droppableId &&
            destination.index == source.index) {
            return;
        }
        const columnId = source.droppableId;
        const column = this.props.uiState.columns[source.droppableId]
        const newOrder = Array.from(column.ids);

        newOrder.splice(source.index, 1);
        newOrder.splice(destination.index, 0, draggableId);

        this.props.updateOrder({ newOrder, columnId })
    }


    selectorFunction = () => {
        //fix reordering problem
        switch (this.props.type) {
            case ("ROUTES"): {
                const columnId = "column-1";
                const column = this.props.uiState.columns[columnId];
                const routes = column.ids.map((routeId) => this.props.uiState.routes[routeId])
                return <Column key={columnId} column={column} type="ROUTES" listItems={routes} />;
            }
            case ("STOPS"):{
                const columnId = "column-2";
                const column = this.props.uiState.columns[columnId];
                const stops = column.ids.map((stopId) => this.props.uiState.stops[stopId])
                return <Column key={columnId} column={column} type="STOPS" listItems={stops} />;
            }
            case ("POIS"): {
                const columnId = "column-3";
                const column = this.props.uiState.columns[columnId];
                let pois = []
                column.ids.length>0 ?
                pois = column.ids.map((poiId) => this.props.uiState.pois[poiId]) :
                pois = [];
                return <Column key={columnId} column={column} type="POIS" listItems={pois} />;
            }
            default:
                return <p>wrong</p>
        }
    }
    render() {
        return <DragDropContext onDragEnd={this.onDragEnd}>
            {this.selectorFunction()}
        </DragDropContext>
    }
}


const mapStateToProps = state => {
    return { selectorState: state.selector, uiState:state.ui, updateOrder: state.updateOrder };
};

export default connect(mapStateToProps, { updateOrder, updateSelectorManagerState })(Selector);

