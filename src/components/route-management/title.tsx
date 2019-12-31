import styled from 'styled-components';



const Title = props => (
        <TitleStyle>Welcome {props.name}, here are your routes!</TitleStyle>
    )
export default Title


//export default connect(mapStateToProps)(Title);
const TitleStyle = styled.h2`
    position:absolute;
    top:3%;
    font-size: 2.5em;
    color:black;
    border:none;
    background:none;
    text-decoration: none;
    padding-left:1em;  
    font-weight:lighter;
    text-align:center;
    margin:0;
    padding:0;
    @media screen and (max-width: 1024px) {
    {
        display:none !important;
    }
}
`