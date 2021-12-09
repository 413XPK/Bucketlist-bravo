import {AUTH} from '../constants/actionTypes';
import * as api from '../API/index.js';

export const signin = (formData, navigate) => async (dispatch) => {
        

    try {

        const {data} = await api.signIn(formData); //makes call to API

        dispatch({type:AUTH, data});

        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, navigate) => async (dispatch) => {
    

    try {

        const {data} = await api.signUp(formData); //makes call to API

        dispatch({type:AUTH, data});

        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

//create the routes, model, controllers