import {css} from 'glamor'
import {gauntlet} from '../../common.styles.js'

export const textBox = css({
    border: 'solid 1px white',
    padding: '1rem'
})

export const commandLine = css({
    fontSize: '1.4rem',
    fontStyle: 'bold',
    textTransform: 'uppercase',
    width: '10%'
})

export const input = css({
    backgroundColor: '#000000',
    width: '90%',
    border: 'none',
    color: 'white',
    fontFamily: 'VT323',
    fontSize: '1.5rem',
    lineHeight: 1.25,
    cursor: gauntlet,
    ':hover': {
        outline: 'none'
    },
    ':focus': {
        outline: 'none'
    }
    // caretColor: 'transparent'
})
