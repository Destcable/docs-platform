import { makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
    header: {
        display: 'flex',
        backgroundColor: '#f4f4f4',
        justifyContent: 'space-between',
        paddingRight: '1rem',
        paddingLeft: '1rem',
        paddingTop: '0.5rem',
    },
    headerLogo: { 
        width: '2rem'
    },
    headerActions: { 
        display: 'flex',
        alignItems: 'center',
        color: '#787878'
    },
    headerActionsItem: { 
        display: 'flex',
        gap: '4px',
        alignItems: 'center'
    }
})