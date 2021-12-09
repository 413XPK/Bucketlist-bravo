import React, {useState} from 'react'
import {Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import Input from './input'
import {GoogleLogin} from 'react-google-login'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {signin, signup} from '../../actions/auth'

const initialState = {firstName: '', lastName:'', email:'', password:'', confirmPassword:''}

const Auth = () => {
    const classes = useStyles();
    const [isSignup, setIsSignup] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword) //toggle show
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData)

        if(isSignup){
            dispatch(signup(formData, navigate))
        } else {
            dispatch(signin(formData, navigate))  //goes to actions (auth)

        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
        setShowPassword(false)
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({type: 'AUTH', data: {result, token}})
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const googleFailure = (err) => {
        console.log(err)
        console.log('google sign in was unsuccessful.')
    }

    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignup &&(
                            <>
                            <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus xs={6}/>
                            <Input name='lastName' label='last Name' handleChange={handleChange} xs={6}/>
                            </>
                        )
                    }
                    <Input name='email' label='Email Address' handleChange={handleChange} type='email'/>
                    <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
                    {isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password'/>}
                </Grid>
                <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                    {isSignup ? 'Sign Up' : 'Sign In'}
                </Button>
                <GoogleLogin 
                    clientId='815814231098-no7cphf29p6n3rran0e04m3tlaouoj6j.apps.googleusercontent.com'
                    render={(renderProps) => (
                        <Button 
                            className={classes.googleButton} 
                            color='primary' 
                            fullWidth 
                            onClick={renderProps.onClick} 
                            disabled={renderProps.disabled} 
                            // startIcon={<Icon/>} 
                            variant='contained'
                        > Google Login
                        </Button> 
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy='single_host_origin'
                />
                
                <Grid container justify='flex-end'>
                    <Grid item>
                        <Button onClick={switchMode}>
                            {isSignup ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
                        </Button>
                    </Grid>

                </Grid>
                </form>
            </Paper>  
        </Container>
    )
}

export default Auth