import { Description, Title, Wrapper } from "./styled";

const Header = ({title, description}) =>

<Wrapper>
<Title> {title} </Title>
<Description> {description} </Description>
</Wrapper>


export default Header;