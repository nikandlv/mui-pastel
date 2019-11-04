import React from 'react'
import Chip from '@material-ui/core/Chip'
import { cyan,
        lightBlue,
        green,
        red,
        blue,
        amber,
        lime,
        orange,
        purple,
        teal,
        pink,
        indigo,
        deepOrange,
        deepPurple,
        yellow,
        lightGreen,
} from '@material-ui/core/colors'
import { withStyles } from '@material-ui/styles'
import Generator from 'random-seed';

export function seededGenerator(str) {
    if(typeof str === 'undefined') {
        return Generator.create()
    }
    str = `${str}`.substr(0,20) + str.length
    var seed = str;
    return Generator.create(seed);
}

export function randomBetween(generator,min, max) { // min and max included 
    return generator.intBetween(min, max)
}

const styles = {
    chip: {
        margin: 1,
        color: '#000000',
        '&.style-1,&.style-green': {
            backgroundColor: green['A100'],
        },
        '&.style-2,&.style-amber': {
            backgroundColor: amber['A100'],
        },
        '&.style-3,&.style-red': {
            backgroundColor: red['A100'],
        },
        '&.style-4,&.style-color': {
            backgroundColor: blue['A100'],
        },
        '&.style-5,&.style-color': {
            backgroundColor: orange['A100'],
        },
        '&.style-6,&.style-color': {
            backgroundColor: lime['A100'],
        },
        '&.style-7,&.style-color': {
            backgroundColor: purple['A100'],
        },
        '&.style-8,&.style-color': {
            backgroundColor: teal['A100'],
        },
        '&.style-9,&.style-color': {
            backgroundColor: pink['A100'],
        },
        '&.style-9,&.style-color': {
            backgroundColor: indigo['A100'],
        },
        '&.style-10,&.style-color': {
            backgroundColor: deepPurple['A100'],
        },
        '&.style-11,&.style-color': {
            backgroundColor: deepOrange['A100'],
        },
        '&.style-12,&.style-color': {
            backgroundColor: cyan['A100'],
        },
        '&.style-13,&.style-color': {
            backgroundColor: lightBlue['A100'],
        },
        '&.style-14,&.style-yellow': {
            backgroundColor: yellow['A100'],
        },
        '&.style-15,&.style-lightGreen': {
            backgroundColor: lightGreen['A100'],
        },
        '&.style-16,&.style-default': {
        },
    }
}

class Pastel extends React.Component {

    constructor(props) {
        super(props)
        this.rand = randomBetween(
            seededGenerator(props.label),
            1,
            16
        )
    }

    render() {
        const props = this.props
        const classes = this.props.classes
        const color = this.props.color || null
        return (
            <Chip 
                className={
                    `${classes.chip} style-${color === null ? this.rand : color}`
                }
                {...props} classes={null} color="default"
            />
        )
    }
}

export default withStyles(styles)(Pastel)