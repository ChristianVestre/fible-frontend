import styled from 'styled-components';
import {DragDropContext} from 'react-beautiful-dnd'
import React from 'react';
import Column from './column';
import {connect} from 'react-redux';
import {updateOrder} from '../../redux/actions/uiActions'



class RouteSelector extends React.Component<{state:any, updateOrder:Function}> {
    
    onDragEnd = result => {
        const {destination,source,draggableId} = result;
        if(!destination) {
            return;
        }

        if (destination.droppableId == source.droppableId &&
            destination.index == source.index){
                return;
            }
        const columnId = source.droppableId;
        const column = this.props.state.columns[source.droppableId]
        const newOrder = Array.from(column.routeIds);

        newOrder.splice(source.index,1);
        newOrder.splice(destination.index,0,draggableId);


       this.props.updateOrder({newOrder,columnId})
    }

    render(){
        return <DragDropContext
            onDragEnd={this.onDragEnd}
        >
        {this.props.state.columnOrder.map( (columnId) => {
            const column = this.props.state.columns[columnId];
            const routes = column.routeIds.map((routeId)=> this.props.state.routes[routeId])

            return <Column key={columnId} column={column} type="ROUTE" listItems={routes}/>;
            //return <Column key={columnId} column={column} routes={routes}/>;
            }   
        )
    }</DragDropContext>
    
    
    }

    
}

const mapStateToProps = state => {
    return {state:state.ui, updateOrder:state.updateOrder};
  };

export default connect(mapStateToProps,{updateOrder})(RouteSelector);
