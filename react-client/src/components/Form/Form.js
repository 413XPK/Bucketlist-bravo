import React, {useState, useEffect} from 'react';
import useStyles from './styles'
import {InputBase, Box, TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch, useSelector} from 'react-redux';
import {createPost, updatePost} from '../../actions/posts'
import {Autocomplete} from '@react-google-maps/api';
import SearchIcon from '@material-ui/icons/Search'

const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({
        title: '', description: '', tags: '', selectedFile: ''
    });
    
    //get data from one post
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));  //will grab the user

    useEffect(() => {
        if(post) setPostData(post); //if post exists then setPostData (populate) with the post
    },[post]) //when the function should be ran, when what changes

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents refresh of the browser

        if(currentId === 0){
            dispatch(createPost({...postData, name: user?.result?.name})); 
            //import createPost from actions

        }else{
            dispatch(updatePost(currentId, {...postData, name: user?.result?.name}));
            
        }
        clear()
        
        setTimeout(function(){ window.location.reload(false); }, 600);
    }

    

    if(!user?.result?.name){
        return (
            <Paper className={classes.paper}>
                <Typography cariant='h6' align='center'>
                    Please sign in to create Bucketlist posts and to like others' posts
                </Typography>
            </Paper>
        )
    }

    

    const clear = () => {
        setCurrentId(null);
        setPostData({ title: '', description: '', tags: '', selectedFile: ''})
    }

    

    return (
        <Paper className={classes.paper}> 
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <div className={classes.top}>
                <Typography className={classes.Typography} variant='h6'>{currentId ? 'Editing' : 'Creating'} a Pin</Typography>
                
                <Box className={classes.Box} display='flex'>
                {/* <Autocomplete> */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder='Search...' classes={{root: classes.inputRoot, input: classes.inputInput}} />
                    </div>
                {/* </Autocomplete> */}
                </Box>
                </div>
                
                <TextField 
                    name='title' 
                    variant='outlined' 
                    label='Title' 
                    fullWidth value={postData.title} 
                    onChange={(e) => setPostData({...postData, title: e.target.value})}>
                        {/* update just one of the objects properties (state value), all other data will stay the same */}
                </TextField>
                <TextField 
                    name='description' 
                    variant='outlined' 
                    label='Description'
                    fullWidth value={postData.description} 
                    onChange={(e) => setPostData({...postData, description: e.target.value})}>
                </TextField>
                <TextField 
                    name='tags' 
                    variant='outlined' 
                    label='Tags' 
                    fullWidth value={postData.tags} 
                    onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})}>
                </TextField>
                <div className={classes.fileInput}>
                    <FileBase 
                    type='file'
                    multiple={false}
                    onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
                    />
                </div>
                <Button 
                    className={classes.buttonSubmit} 
                    variant='contained' 
                    color='primary' 
                    size='large' 
                    type='submit' 
                    fullWidth>
                        Submit
                </Button>
                <Button  variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    );
}
export default Form