import React, {useState, useEffect} from 'react'
import { InputBase, Box, AppBar, Typography, Avatar, Toolbar, Button} from '@material-ui/core';
import useStyles from './styles'
import travel from '../../images/travel.png';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import decode from 'jwt-decode'



const Navbar = () => {
    

    const classes = useStyles();
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    // console.log(user);

    const dispatch = useDispatch();
    const location = useLocation(); //once fulfilling auth the main homepage refreshes

    const logout = () => {
        dispatch({type: 'LOGOUT'});
        setUser(null)
        window.location.reload(false)
    }

    useEffect(() => {
        const token = user?.token;

        if(token){
            const decodedToken = decode(token);
            if(decodedToken.exp * 1000 < new Date().getTime()) logout(); 
            //if expiry of token is less than current time, then logout
        }

        setUser(JSON.parse(localStorage.getItem('profile')));

    }, [location])

    return (
        <div>
        <AppBar className={classes.appBar}  color='inherit'>
            <div className={classes.brandContainer}>
            <Typography className={classes.heading} component={Link} to='/' variant='h2' align='center'>Bucketlist </Typography>  
            <img className={classes.image} src={travel} alt='Bravo Travel' height='60' width='60' />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.avatar} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                        <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to='/auth' variant='contained' color='primary'>Sign In</Button>
                )}
            </Toolbar>
        </AppBar> 
        </div>
    );
}

export default Navbar