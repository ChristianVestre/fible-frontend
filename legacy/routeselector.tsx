import styled from 'styled-components';
import ListEntry from '../src/components/route-management/routemanagement-components/list-entry';




const RouteSelector = props => (
    <Wrapper>
        {console.log(props)}
        {props.data.routes.map(route => (
        <ListEntry headline={route.headline} stops={route.stops} ></ListEntry>
        ))}
    </Wrapper>
);




export default RouteSelector

const Wrapper = styled.div`
    border:solid;
    border-radius:3em;

    width:30vw;
    height:80vh;
    position: absolute;
    left: 35%;
    top:15%
`
