import { makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
    cardGrid: {
        display: 'grid',
        marginTop: '2rem',
        gap: '2rem', 
        paddingRight: '3rem', 
        paddingLeft: '3rem',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr'
    }
})