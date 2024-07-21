import {
    CardHeader,
    Card as CardFluentUI
} from '@fluentui/react-components'
import '../../../app/assets/styles/card.css'
import React from 'react'
import { useStyles } from './styles/Card.styles';
import { CardTitle } from './components/CardTitle';
import { CardDescription } from './components/CardDescription';

export const Card = ({ title, description }) => {
    const classes = useStyles();

    const onClick = React.useCallback(() => console.log('Interactive!'), []);

    return <CardFluentUI className={classes.card} onClick={onClick}>
        <CardHeader
            header={<CardTitle>{title}</CardTitle>}
            description={
                <CardDescription classes={classes}>
                    {description}
                </CardDescription>
            }
        />
    </CardFluentUI>
};