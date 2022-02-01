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
    leftColumn: {
        width: '600px',
    },

    map: {
        // gridColumn: '2/4',
        display: 'flex',
        // backgroundColor: 'blue',
        marginTop: '120px',
        width: '1200px'
        
        // position: 'relative',
        // marginLeft: '450px',
        // wrap: 'wrap',
    }
}))

