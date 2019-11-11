import styled from 'styled-components'
import Link from 'next/link'
require('@material/ripple')


const MenuItem = props => (
    <Wrapper>
    <Link href={props.page}>
    <Container>
    <StyledText>{props.name}</StyledText>
    <Arrow src="/arrow.svg" alt="my arrow"/>
    </Container>
    </Link>
    </Wrapper>
  );

export default MenuItem


const Arrow = styled.img`
height: 2em;
display: flex;
justify-content:flex-end;
padding-left:10em;
`

const Wrapper = styled.li`
display:flex;
justify-content:flex-start;
`

const StyledText = styled.a`
font-size: 2em;
color:black;
border:none;
background:none;
text-decoration: none;
padding-left:1em;
`
const Container = styled.div`
display:flex;
flex-direction: row;
cursor: pointer;
`
