import {css} from 'glamor'

export const storyWrapper = css({
    overflow: 'hidden',
    maxHeight: '100%'
})

export const storyInterface = css({
    height: '100%',
    width: '100%',
    overflowY: 'scroll',
    border: 'solid 1px white',
    padding: '1rem',
    scrollBar: 'none',
    paddingRight: '70px'
})

const terminal = css.keyframes({
    'from': {width: '0em'},
    'to': {width: '40rem'}
})

export const staticNarration = css({
    fontSize: '1.4rem',
    animation: `${terminal} 4s steps(44) 1s 1 normal both`,
    whiteSpace: 'nowrap',
    overflowX: 'hidden'
})

export const dynamicStory = css({
    fontSize: '1.4rem'
})
