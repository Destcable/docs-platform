export const HeaderLogo = ({ image, classes }) => { 
    return <img 
        src={image} 
        className={classes.headerLogo}
        alt='icon' 
    />
}