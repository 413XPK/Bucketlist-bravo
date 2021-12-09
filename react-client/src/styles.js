import {makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '20px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    heading: {
        color: 'rgba(0,183,255,1)'
    },
    image: {
        marginLeft: '10px'
    },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection:'column-reverse'
        },
        appBar: {
            marginBottom: '-70px',
        },
        heading: {
            fontSize: '40px;'
        }
    },
    mainContainer: {
        flexDirection:'column-reverse'
    }
}))