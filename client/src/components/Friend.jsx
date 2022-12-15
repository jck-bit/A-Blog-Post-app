import { PersonAddOutlined,PersonRemoveOutlined } from "@mui/icons-material";
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
  const main = palette.neutral.main
  const medium = palette.neutral.medium

  //Check if the friend exists in the friends array
  //const isFriend = friends.length.find(friend => friend._id === friendId);

  const patchFriend = async () => {
    const response = await fetch(`http://localhost:3500/users/${_id}/${friendId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-Type": "application/json"
      }
    });
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  }

  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <UserImage image={userPicturePath} size="55px" />
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`);
            // i have no idea what am doing...oh god help me
            navigate(0);
          }}
        >
          <Typography
            color={main}
            variant="h5"
            fontWeight="500"
            sx={{
              "&:hover": {
                color: palette.primary.dark,
                cursor: "pointer"
              }
            }}
          >
            {name}
          </Typography>
          <Typography color={medium} fontSize="0.75rem">
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>
      {/* <IconButton
        onClick={() =>patchFriend()} // Call the patchFriend function directly
        sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
      >
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: primarydark}} />
        ) : (
          <PersonAddOutlined sx={{ color: primarydark}} />
        )}
      </IconButton> */}
    </FlexBetween>
  );
};

export default Friend;