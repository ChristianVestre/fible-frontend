import styled from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd'
import HeadlineText from './simulatorComponents/headline'



class SimulatorComponentManager extends React.Component<{component:any, index:any}> {

    componentChoice = () => {
        switch (this.props.component.type) {
            case ("HEADLINE"): {
                return <HeadlineText component={this.props.component} index={this.props.index}></HeadlineText>
            }
            default:
                return<div></div>
        }

    }
    onDragEnd = () =>{

    }

    render() {
        return <Draggable draggableId={this.props.component.id} index={this.props.index}><div>{this.componentChoice()}</div></Draggable>
      }

}

const mapStateToProps = state => {
    return { uiState: state.ui, dataState: state.data };
};

export default connect(mapStateToProps)(SimulatorComponentManager);


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

const ForegroundWrapper = styled.div`
  width: 40%;
  height: 80vh;
  align-self:center;
  display:flex;
  border-style:solid;
  border-radius: 1.5em;
  border-color:lightgrey;
  border-width:0.05em;
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