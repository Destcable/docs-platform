import '../../../../app/assets/styles/header.css'
import Icon from "../../../assets/icons/docs.png"
import HeaderActions from "./HeaderActions";

const Header = () => { 
    return <header>
        <img src={Icon} alt="icon" className="header-logo"/>
        <HeaderActions />
    </header>
};

export default Header;