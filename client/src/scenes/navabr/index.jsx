import { useState } from "react"

import {
    Box,
    IconButton,
    InputBase,
    Typography,
    Select,
    MenuItem,
    FormControl,
    useTheme,
    useMediaQuery,
  } from "@mui/material";

import {
    Search,
    DarkMode,
    LightMode,
    Notifications,
    Help,
    Message
} from '@mui/icons-material'

import { useDispatch, useSelector } from "react-redux"
import { setMode, setLogout} from "../../state/index"
import { useNavigate } from "react-router-dom"
import FlexBetween from "../../components/FlexBetween"

const Navbar = () =>{
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) =>state.user);
    const isNonMobileScreens = useMediaQuery("(min-width: 100px)");

    const theme = useTheme()
    const neutralLight = theme.palette.neutral.light
    const dark = theme.palette.neutral.dark
    const PrimaryLight = theme.palette.primary.light
    const alt = theme.palette.background.alt;

     const fullname = `${user.firstname} ${user.lastname}`

    return <FlexBetween width="100%" padding="1rem" backgroundColor={alt} position="fixed" zIndex="1">
        <FlexBetween gap="1.75rem">
            <Typography fontWeight="bold" 
            fontSize="clamp(1rem ,2rem, 2.25rem"
            color="primary"
            onClick={() => navigate("/home")}
            sx={{
                "&:hover":{
                    color:PrimaryLight,
                    cursor:"pointer"
                }
            }}
            ></Typography>
            {isNonMobileScreens && (
               <FlexBetween backgroundColor={neutralLight}
                 borderRadius="9px"
                 gap="3rem"
                 padding="0.1rem 1.5rem"
                 >
                    <InputBase placeholder="search ..."/>
                    <IconButton>
                        <Search/>
                    </IconButton>
                 </FlexBetween>   
            )}
        </FlexBetween>
        {/*Desktop nav*/}

        {isNonMobileScreens ? (
            <FlexBetween gap="2rem">
                <IconButton onClick={() => dispatch(setMode())}>
                    {theme.palette.mode === "dark" ? (
                       <DarkMode sx={{ fontSize: "25px" }} />
                        ) : (
                    <LightMode sx={{ color: dark, fontSize: "25px" }} />
                    )}
                </IconButton>
                <Message sx={{ color: dark, fontSize: "25px" }} />

                <Notifications sx={{ color: dark, fontSize: "25px" }} />

                <Help sx={{ color: dark, fontSize: "25px" }} />
                <FormControl variant="standard" value={{fullname}} >
                    <Select value={fullname} sx={{
                        backgroundColor: neutralLight,
                        width: "150px",
                        borderRadius: "0.25rem",
                        p: "0.25rem 1rem",

                        "& .MuiSvgIcon-root" :{
                            pr:"0.25rem",
                            width:"3rem"
                        },
                        "& .MuiSelect-select:focus": {
                            backgroundColor: neutralLight,
                          }
                    }} 
                      input={<InputBase />}
                    >
                        <MenuItem value={fullname}>
                            <Typography>{fullname}</Typography>
                        </MenuItem>
                        <MenuItem onClick={() =>dispatch(setLogout())}>Log out</MenuItem>

                    </Select>
                </FormControl>
            </FlexBetween>
        ) : (
           <IconButton onClick={() =>setIsMobileMenuToggled(!isMobileMenuToggled)}>
             {/* <Menu/> */}
           </IconButton>
    )}
    </FlexBetween>
}

export default Navbar