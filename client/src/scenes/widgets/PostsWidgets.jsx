import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPosts } from '../../state'
import PostWidget from './PostWidget'


const PostsWidgets = ({userId, isProfile = false}) => {
    const dispatch  = useDispatch()
    const posts  = useSelector((state) =>state.posts)
    const token = useSelector((state) =>state.token)

    const getPosts = async () =>{
        const response = await fetch("http://localhost:3500/posts", {
            method:"GET",
            headers: {Authorization : `Bearer ${token}`}
        });

        const data = await response.json()
        dispatch(setPosts({ posts: data }))
    }

    const getUserPosts = async () =>{
        const response = await fetch(`http://localhost:3500/posts/${userId}/posts`, {
            method:"GET",
            headers: {Authorization : `Bearer ${token}`}
        });

        const data = await response.json()
        dispatch(setPosts({ posts: data }))
    }
    useEffect(() =>{
        if(isProfile) {
            getUserPosts()
        }else{
            getPosts()
        }
    },[])  //eslint-disable-line react-hooks
  return (
    <>
      {posts.map(
        ({
            _id,
            userId,
            firstname,
            description,
            location,
            occupation,
            userPicturePath,
            lastname,
            likes,
            comments
        }) =>(
            <PostWidget 
            key={_id}
            postId = {_id}
            postUserId = {userId}
            name = {`${firstname} ${lastname}`}
            description = {description}
            location = {location}
            occupation = {occupation}
            //picturePath = {picturePath}
            userPicturePath={userPicturePath}
            likes = {likes}
            comments={comments}
            />
        )
      )}
    </>
  )
}

export default PostsWidgets


