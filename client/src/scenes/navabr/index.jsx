import { useState } from "react"
import { Box,Typography,Select,MenuItem,InputBase,IconButton,FormControl,useTheme,useMediaQuery } from "@mui/system"

import {
    Search,
    message,
    DarkMode,
    LightMode,
    Notifications,
    Help,
    Menu,
    Close
} from '@mui/icons-material'

import { useDispatch, useSelector } from "react-redux"
import { setMode, setLogout} from "state"
import { useNavigate } from "react-router-dom"
import FlexBetween from "components/FlexBetween"

const Navbar = () =>{
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) =>state.user);
    const isNonMobileScreens = useMediaQuery("(min-width: 100px)");

    const theme = useTheme()
    const neutralLight = theme.palette.neutral.light
    const dark = theme.palette.neutral.dark
    const backgraound = theme.palette.backgraound.default;
    const PrimaryLight = theme.palette.primary.light
    const alt = theme.palette.backgraound.alt;

    const fullname = `${user.firstname} ${user.lastname}`

    return <FlexBetween padding="1rem 6%" backgroundColor={alt}>
        <FlexBetween gap="1.75rem">
            <Typography fontWeight="bold" ></Typography>
        </FlexBetween>
    </FlexBetween>
}

export default Navbar
