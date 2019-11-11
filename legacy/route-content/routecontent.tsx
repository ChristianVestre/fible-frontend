import styled from 'styled-components';
import RouteAttributes from './routeattributes';
import Inputs from './inputs';

const RouteContent = () => (
    <ContentWrapper>
        <List>
            <RouteAttributes></RouteAttributes>
            <Inputs></Inputs>
        </List>
    </ContentWrapper> 
)
export default RouteContent;

const List = styled.ul`
    display:flex;
    flex-direction:column;
    margin: 0;
    padding: 0;
`

const ContentWrapper = styled.div`
    width: 50vw;
    height: 100vh;
    flex-direction:column;
    display:flex;
`;

