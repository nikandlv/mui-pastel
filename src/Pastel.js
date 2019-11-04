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
        '&.style-1': {
            backgroundColor: green['A100'],
        },
        '&.style-2': {
            backgroundColor: amber['A100'],
        },
        '&.style-3': {
            backgroundColor: red['A100'],
        },
        '&.style-4': {
            backgroundColor: blue['A100'],
        },
        '&.style-5': {
            backgroundColor: orange['A100'],
        },
        '&.style-6': {
            backgroundColor: lime['A100'],
        },
        '&.style-7': {
            backgroundColor: purple['A100'],
        },
        '&.style-8': {
            backgroundColor: teal['A100'],
        },
        '&.style-9': {
            backgroundColor: pink['A100'],
        },
        '&.style-9': {
            backgroundColor: indigo['A100'],
        },
        '&.style-10': {
            backgroundColor: deepPurple['A100'],
        },
        '&.style-11': {
            backgroundColor: deepOrange['A100'],
        },
        '&.style-12': {
            backgroundColor: cyan['A100'],
        },
        '&.style-13': {
            backgroundColor: lightBlue['A100'],
        },
        '&.style-14': {
            backgroundColor: lightBlue['A100'],
        },
        '&.style-15': {
            backgroundColor: yellow['A100'],
        },
        '&.style-16': {
            backgroundColor: lightGreen['A100'],
        },
        '&.style-17': {
        },
    }
}

class Pastel extends React.Component {

    constructor(props) {
        super(props)
        this.rand = randomBetween(
            seededGenerator(props.label),
            1,
            17
        )
    }

    render() {
        const props = this.props
        const classes = this.props.classes
        return (
            <Chip 
                color="inherit"
                className={
                    `${classes.chip} style-${this.rand}`
                }
                {...props} classes={null}
            />
        )
    }
}

export default withStyles(styles)(Pastel)