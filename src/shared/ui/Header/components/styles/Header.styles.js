import { makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingRight: '3rem',
        paddingLeft: '3rem',
        paddingTop: '0.5rem',
    },

    headerLogo: { width: '2rem' },

    headerActions: { 
        display: 'flex',
        alignItems: 'center',
        color: '#787878',
    },
})