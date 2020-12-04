import * as api from '../api';

//action creators
export const getPosts=()=>async(dispatch)=>{
    try{
        const { data } =await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data});
    } catch(error){
        console.log(error.message);
    }
}

export const createPost=(post)=>async(dispatch) =>{
    try{
        const { data } = await api.createPost(post);

        dispatch({type: 'CREATE', payload: data});

    } catch (error) {
        console.log(error);
    }
}

export const updatePosts=(id, post)=> async(dispatch)=>{
    try{
        const{data}= await api.updatePosts(id, post);

        dispatch({type: 'UPDATE', payload: data})
    } catch (error){
        console.log(error);
    }
}

export const deletePosts=(id)=> async(dispatch)=>{
    try{
        await api.deletePosts(id);

        dispatch({type: 'DELETE', payload: id})
    } catch (error){
        console.log(error);
    }
}

