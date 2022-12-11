import {
    EditOutlined,
    DeleteOutlined,
    AttachFileOutlined,
    GifBoxOutlined,
    ImageOutlined,
    MicOutlined,
    MoreHorizOutlined
} from "@mui/icons-material"

import {
    Box, 
    Divider, 
    Typography, 
    InputBase, 
    useTheme,
    IconButton, 
    useMediaQuery
} from "@mui/material"

import Dropzone from "react-dropzone"
import FlexBetween from "../../components/FlexBetween"
import UserImage from "../../components/UserImageWidget"
import WidgetWrapper from "../../components/WidgetWrapper"
import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { setPosts } from "../../state"

const MyPostWidget = ({picturePath}) => {
    const dispatch = useDispatch()
    const [ismage, setIsimage] = useState(false)
    const [image, setimage] = useState(null);
    const [post, setPost] = useState("");
    const {palette} = useTheme();
    const {_id} = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)")
    const mediumMain = palette.neutral.mediumMain;
    const medium = palette.neutral.medium

    const handlePost = async () =>{
        const formData = new FormData();
        formData.append("userId", _id)
        formData.append("description", post)
        
        if(image) {
            formData.append("picture", image)
            formData.append("picturePath", image.name)
        }

        const response = await fetch(`http://localhost:3500/posts`,{
            method:"POST",
            headers: {Authorization: `Bearer ${token}`},
            body: formData
        });

        const posts = await response.json()
        dispatch(setPosts({ posts }))
        setimage(null);
        setPost("")
    }
  return (
    <WidgetWrapper>
        <FlexBetween gap="1.5rem">
            <UserImage image={picturePath}/>
            <InputBase
              placeholder="What's on your Mind"
              onChange={(e) =>setPost(e.target.value)}      
              value={post}
              sx={{
                width: "100%",
                backgroundColor:palette.neutral.light,
                borderRadius:"2rem",
                padding:"1rem 2rem"
              }}
            />
        </FlexBetween>
        {ismage &&(
            <Box 
              borderRadius="5px"
              border={`1px solid ${medium}`}
              mt="1rem"
              p="1rem"
            ></Box>
        )}
    </WidgetWrapper>
  )
}

export default MyPostWidget