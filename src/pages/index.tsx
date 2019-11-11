import styled from 'styled-components'
import MenuItem from '../components/homepage-components/list-menu';

const Wrapper = styled.div`
  background: white;
  height: 100%;
  width:100%;
  display:flex;
  justify-content: center;
  align-items: center;
  
`;

const HeaderImage = styled.img`
    padding: 10vh;
    height: 10vh;
`


const List = styled.ul`
  display:flex;
  flex-direction:column;
`



function Home() {
  return (
    <Wrapper>
      <List>
        <HeaderImage src="/logo_fible.png" alt="my image" />
        <MenuItem  page="/routemanagement" name="Routes"/>
      </List>
    </Wrapper>
  )
}

export default Home

