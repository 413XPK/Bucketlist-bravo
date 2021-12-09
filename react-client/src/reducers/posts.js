//reducers are a function, accepting state and action. if action.type === create then return action, or state changed by action
//action.type is the key, initial value of state (posts)

//prev actions //step 5, then components -> Post


 const reducers = (posts = [], action) => {
    switch(action.type){

        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload); 
            //keep the posts, filter out the one that is deleted
        case 'LIKE':
        case 'UPDATE':
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
            //if post._id is equal to updated post then return action.payload, otherwise reutrn original post
        case 'FETCH_ALL':
            return action.payload; //return the actual posts
        case 'CREATE':
            return [...posts, action.payload]
        default:
            return posts;
    }
}

export default reducers