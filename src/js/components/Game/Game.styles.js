import {css} from 'glamor'

export const wrapper = css({
    height: '100vh',
    background: '#000'
})

export const upperGrid = css({
    padding: '1rem 1rem 0 1rem',
    gridTemplateColumns: '3fr 1fr',
    height: '90vh',
    display: 'grid'
})

export const lowerGrid = css({
    padding: '0 1rem 1rem 1rem',
    gridTemplateColumns: '1fr',
    height: '6vh',
    display: 'grid'
})
