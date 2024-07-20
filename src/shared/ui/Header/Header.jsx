import '../../../app/assets/styles/header.css'
import Icon from "../../../app/assets/icons/docs.png"
import { HeaderActions } from "./HeaderActions"

export const Header = () => { 
    return <header>
        <img src={Icon} alt="icon" className="header-logo"/>
        <HeaderActions />
    </header>
};
