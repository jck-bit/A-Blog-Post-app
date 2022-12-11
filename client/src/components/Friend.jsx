import { PersonAddOutlined,PersonremovedOutlined } from "@mui/icons-material";
import { Box,Typography, IconButton,useTheme } from "@mui/material";
import state, { setFriends } from "../state";
import { useDispatch, useSelector } from "react-redux";
import UserImage from "./UserImageWidget";
import { useNavigate } from "react-router-dom";


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
    }

  return (
    <div>Friend</div>
  )
}

export default Friend