export const type = 'addPost';


// action
const addPost = (isPostAdd: number) => ({
    type,
    payload: isPostAdd,
});


export default addPost;