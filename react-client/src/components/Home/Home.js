import React, {useState, useEffect} from 'react'
import {Container, Grow, Grid} from '@material-ui/core'
import Posts from '../posts/Posts';
import Form from '../Form/Form';
import Map from './Map/Map'
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
              
            <Grid  className={classes.Container} container  justify='space-between' spacing={3}>

              <Grid  className={classes.map} xs={8}  md={8}>
                <Map />
              </Grid>

              <Grid className={classes.form} item xs={4} md={8}>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
              </Grid>

              <Grid item xs={12} sm={5} md={8}>
                <Posts setCurrentId={setCurrentId}/>
              </Grid>
              
            </Grid>
              
            {/* alignItems='stretch' */}

            
          </Container>
      </Grow>
    )

    
}

export default Home;