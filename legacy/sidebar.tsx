import styled from 'styled-components';
import Link from 'next/link';


function Sidebar() {
    return (
        <Wrapper>
            <Images>
                <HeaderImage src="/logo_fible.png" alt="my image"></HeaderImage>
                <Link href="/">
                    <BackImage src="/back.svg"></BackImage>
                </Link>

            </Images>
            <List>
                <StyledText>
                    Headline
                    </StyledText>
                <StyledText>
                    Subheadline
                </StyledText>
                <StyledText>
                    Map
                </StyledText>
            </List>

        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`
    width: 20%; 
    height: 100vh;
    display:flex;
    justify-content:flex-start;
    flex-direction:column;
    padding-left:0;
`;


const List = styled.ul`
   position: relative;
   z-index:-1;
`
const Images = styled.div`
height:8em;
margin:0;
padding-left:1em;
display:flex;
justify-content:flex-start;



`

const HeaderImage = styled.img`
    height:4em;
    width:7em;
    padding-left:2em;
    padding-top:1em;
    padding-bottom:2em;
    position: absolute;
    margin:0;
    z-index:-1;

`
const BackImage = styled.img`
    padding-top:0.5em;
    height:2em;
    width:2em;
    z-index:1;
    position: absolute;
`

const StyledText = styled.li`
    font-size: 1.5em;
    color:black;
    border:none;
    background:none;
    text-decoration: none;
    align-content: flex-start;
    list-style-type: none;
    padding-bottom:1em;

    
`