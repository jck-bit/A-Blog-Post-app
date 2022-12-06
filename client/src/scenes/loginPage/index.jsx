import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme,
  } from "@mui/material";


const Login = () =>{
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("min-width: 1000px");

    return (
    <Box>
        <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
            <Typography 
            fontWeight="bold"
            fontSize="320px"
            color="primary"
            >
                sociopidia
            </Typography>
        </Box>
        <Box></Box>
    </Box>
    )
}

export default Login