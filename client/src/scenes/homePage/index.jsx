import { Box, useMediaQuery } from "@mui/material"
import { useSelector } from "react-redux"
import Navbar from "../navabr/index"
import MyPostWidget from "../widgets/MyPostWidget"
import UserWidget from "../widgets/UserWidgets"

const HomePage = () =>{
    const isNonMobileScreens = useMediaQuery("(min-width:100px)")
    const {_id, picturePath} = useSelector((state) => state.user)
    return (<Box>
        <Navbar/>
        <Box 
          width="100%"
          padding="2rem 6%"
          display="flex"
          gap="0.5rem"
          justifyContent="space-between"
         >
            <Box>
              <UserWidget userId={_id} picturePath={picturePath}/>
            </Box>
         </Box>
         <Box
           flexBasis={isNonMobileScreens ? "42%" : undefined}
           mt={isNonMobileScreens ? undefined : "2rem"}
          >
            <MyPostWidget picturePath={picturePath}/>
          </Box>
         {isNonMobileScreens && (
            <Box flexBasis="26%"></Box>
         )}
    </Box>)
}

export default HomePage