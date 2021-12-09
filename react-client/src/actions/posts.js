import * as api from '../API'

// prev API  //step 4, then reducers (posts)

//Action creators
export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload: data}); 
        //dispatch(action) using redux, used from components->home, then reducer
    } catch (err) {
        console.log(err.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try{
        const {data} = await api.createPost(post);
        console.log(data);
        dispatch ({type: 'CREATE', payload: data});

    } catch (err) {
        console.log(err);
    }
    
}

export const updatePost = (id, post) => async (dispatch) => {
    try{
        //const response, or immediately get data
        const {data} = await api.updatePost(id, post) //providing what you have to do with updatepost 

        dispatch({type: 'UPDATE', payload: data});

    } catch (err) {
        console.log(err);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)

        dispatch ({type: 'DELETE', payload: id});
    } catch(err){
        console.log(err);
    }
}

export const likePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.likePost(id)

        dispatch({type: 'UPDATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}