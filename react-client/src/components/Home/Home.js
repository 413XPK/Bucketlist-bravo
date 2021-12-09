import React, {useState, useEffect} from 'react'
import {Container, Grow, Grid} from '@material-ui/core'
import Posts from '../posts/Posts';
import Form from '../Form/Form';
import {useDispatch} from 'react-redux'
import {getPosts} from '../../actions/posts'
import useStyles from './styles'

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch(); //a hook
  
    useEffect(() => {
      dispatch(getPosts()); 
    },[currentId, dispatch]); 
    //since clearing the handleSubmit in app.js, that changes the currentid, need a currentId dependency 

    return (
      //mui transition
    <Grow in> 
          <Container>
            <Grid className={classes.Container} container  justify='space-between' alignItems='stretch' spacing={3}>
              <Grid item xs={12} sm={5}>
                <Posts setCurrentId={setCurrentId}/>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
              </Grid>
            </Grid>
          </Container>
      </Grow>
    )

    
}

export default Home;