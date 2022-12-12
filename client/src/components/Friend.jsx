import { PersonAddOutlined,PersonremovedOutlined } from "@mui/icons-material";
import { Box,Typography, IconButton,useTheme } from "@mui/material";
import  { setFriends } from "../state";
import { useDispatch, useSelector } from "react-redux";
import UserImage from "./UserImageWidget";
import { useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";


const Friend = ({friendId, name, subtitle, userPicturePath}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {_id } = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) =>state.user.friends);

    const {palette } = useTheme();
    const primaryLight = palette.primary.light;
    const primarydark = palette.neutral.dark
    const main = palette.neutral.medium

    const isFriend = friends.find((friend) => friend._id === friendId)
    const patchFriend = async () =>{
        const response = await fetch(`http://localhost:3500/users/${_id}/${friendId}`,{
            method:"PATCH",

            headers:{
                Authorization: `Bearer ${token}`,
                "content-Type":"application/json"
            }
        })
        const data = await response.json();
        dispatch(setFriends({ friends: data}));
    }

  return (
    <FlexBetween gap="1rem">
        <UserImage image={userPicturePath} size="55px" />
        <Box 
          onClick={() =>{
            navigate(`/profile/${friendId}`)
            // i have no idea what am doing...oh god help me
            navigate(0);
          }}></Box>
    </FlexBetween>
  )
}

export default Friend