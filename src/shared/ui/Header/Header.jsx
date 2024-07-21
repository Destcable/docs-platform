import Icon from '../../../app/assets/icons/docs.png'
import { HeaderActionsSearch } from './components/actions/HeaderActionsSearch';
import { HeaderActionsSpace } from './components/actions/HeaderActionsSpace';
import { useStyles } from './components/styles/Header.styles'
import { HeaderActionsWrapper } from './components/actions/HeaderActionsWrapper'
import { HeaderLogo } from './components/HeaderLogo';

export const Header = () => { 
    const classes = useStyles();

    return <header className={classes.header}>
        <HeaderLogo image={Icon} classes={classes}/>
        <HeaderActionsWrapper classes={classes}>
            <HeaderActionsSpace />
            <HeaderActionsSearch />
        </HeaderActionsWrapper>
    </header>
};
