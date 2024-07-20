import { useStyles } from "./Header.styles";
import { AddRegular, Layer20Regular, Search20Regular } from "@fluentui/react-icons";
import { Button, Popover, PopoverSurface, PopoverTrigger } from "@fluentui/react-components";
export const HeaderActions = () => {
    const classes = useStyles();

    return <div className={classes.headerActions}>
        <Popover positioning="below-start">
            <PopoverTrigger disableButtonEnhancement>
                <Button appearance="transparent" icon={<Layer20Regular />}>
                    Основное пространство
                </Button>
            </PopoverTrigger>
            <PopoverSurface style={{ minWidth: 100, padding: 0 }}>
                <Button appearance="subtle" icon={<AddRegular />}>Добавить пространство</Button>
                <hr />
                <Button appearance="subtle" icon={<Layer20Regular />}>
                    Основное пространство
                </Button>
            </PopoverSurface>
        </Popover>
        <Button appearance="transparent" icon={<Search20Regular />}>
            Поиск
        </Button>
    </div>
};