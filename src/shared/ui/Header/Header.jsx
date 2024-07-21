import Icon from '../../../app/assets/icons/docs.png'
import { HeaderActionsSearch } from './components/actions/HeaderActionsSearch';
import { HeaderActionsSpace } from './components/actions/HeaderActionsSpace';
import { useStyles } from './styles/Header.styles'
import { HeaderActionsWrapper } from './components/actions/HeaderActionsWrapper'
import { HeaderLogo } from './components/HeaderLogo';
import { HeaderCreateSpaceDialogWrapper } from './components/HeaderCreateSpaceDialogWrapper';
import { Button } from '@fluentui/react-components';
import { Layer20Regular } from '@fluentui/react-icons';
import { HeaderCreateSpaceButton } from './components/HeaderCreateSpaceButton';

export const Header = () => {
    const classes = useStyles();

    return <header className={classes.header}>
        <HeaderLogo image={Icon} classes={classes} />
        <HeaderActionsWrapper classes={classes}>
            <HeaderActionsSpace>
                <HeaderCreateSpaceDialogWrapper>
                    <HeaderCreateSpaceButton />
                </HeaderCreateSpaceDialogWrapper>
                <hr />
                <Button appearance="subtle" icon={<Layer20Regular />}>
                    Основное пространство
                </Button>
            </HeaderActionsSpace>
            <HeaderActionsSearch />
        </HeaderActionsWrapper>
    </header>
};
