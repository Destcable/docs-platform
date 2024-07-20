import { CiSearch } from "react-icons/ci";
import { useStyles } from "./Header.styles";

export const HeaderActions = () => { 
    const classes = useStyles();

    return <div className={classes.headerActions}>
        <div className={classes.headerActionsItem}>
            <CiSearch />
            <span>Поиск</span>
        </div>
    </div>
};