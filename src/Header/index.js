import "./style.css";

const Header = ({title, description}) =>

<header className="header">
<h1 className="header__title"> {title} </h1>
<p className="hedaer__desription"> {description} </p>
</header>


export default Header;