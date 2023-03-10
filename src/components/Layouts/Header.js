import sushiImage from "../../assets/sushi.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return <>
        <header>
            <h1>Main Page Title</h1>
            <HeaderCartButton/>
        </header>
        <img src={sushiImage} alt="MDN logo"/>
    </>
}
export default Header;