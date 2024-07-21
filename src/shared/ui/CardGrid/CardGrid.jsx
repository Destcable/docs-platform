import { useStyles } from './styles/CardGrid.styles'

export const CardGrid = ({ children }) => { 
    const classes = useStyles()

    return <div className={classes.cardGrid}>
        {children}
    </div>
}