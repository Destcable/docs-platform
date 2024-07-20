import {
    Caption1,
    CardHeader,
    mergeClasses,
    Text,
    Card as CardFluentUI
} from '@fluentui/react-components'
import '../../../app/assets/styles/card.css'
import React from 'react'
import { useStyles } from './Card.styles';



export const Card = ({ name }) => {
    const styles = useStyles();

    const onClick = React.useCallback(() => console.log('Interactive!'), []);
    const CardName = <Text weight='semibold'>{name}</Text>
    const CardDescription = <Caption1 className={styles.caption}>...</Caption1>

    return <CardFluentUI
        className={mergeClasses(styles.main, styles.card)}
        onClick={onClick}
    >
        <CardHeader
            header={CardName}
            description={CardDescription}
        />

    </CardFluentUI>
};