import {makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    Container: {
        display: 'grid',
        gridTemplateColumns: ' 1fr 1fr',
        gridTemplateAreas: 'a b',
        // flexDirection:'column-reverse', 

    },
    form:{
        // gridColumn: 'a-start'
    },

    map: {
        gridColumn: '2/4',
        display: 'flex',
        backgroundColor: 'blue',
        // position: 'absolute',
        // marginLeft: '450px',
        // wrap: 'wrap',
    }
}))

