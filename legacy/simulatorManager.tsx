import styled from 'styled-components';
import React from 'react';
import {connect} from 'react-redux';



class SimulatorManager extends React.Component<{simulatorState:any,dataState:any}> {
    
  componentChoice = () => {
        console.log(this.props.simulatorState.show)
         switch(this.props.simulatorState.show){
             case("ROUTE"): {
                 return <ForegroundWrapper>
                   <h1>test</h1>
                 </ForegroundWrapper>
             }
      }
  }
 // <h1>{this.props.dataState[this.props.simulatorState.show.toLowerCase()][this.props.dataState.latestId].components[this.props.dataState[this.props.simulatorState.show.toLowerCase()].order[0]].headline}</h1>

  render(){
      return<BackgroundWrapper>
          {this.componentChoice()}
          </BackgroundWrapper>
  }
}

const mapStateToProps = state => {
  return {simulatorState:state.ui.simulator,dataState:state.data};
};

export default connect(mapStateToProps)(SimulatorManager);


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