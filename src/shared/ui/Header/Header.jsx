import Icon from '../../../app/assets/icons/docs.png'
import { useStyles } from './Header.styles';
import { HeaderActions } from './HeaderActions'

export const Header = () => { 
    const classes = useStyles();
    
    return <header className={classes.header}>
        <img src={Icon} alt='icon' className={classes.headerLogo}/>
        <HeaderActions />
    </header>
};
