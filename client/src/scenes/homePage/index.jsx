import { Box, useMediaQuery } from "@mui/material"
import { useSelector } from "react-redux"
import Navbar from "../navabr/index"
import MyPostWidget from "../widgets/MyPostWidget"
import UserWidget from "../widgets/UserWidgets"
import PostsWidgets from "../widgets/PostsWidgets"

const HomePage = () =>{
    const isNonMobileScreens = useMediaQuery("(min-width:100px)")
    const {_id, picturePath} = useSelector((state) => state.user)
    return (
    <Box>
        <Navbar/>
        <Box 
          width="100%"
          padding="2rem 6%"
          display="flex"
          gap="0.5rem"
          justifyContent="space-between"
    
         >
           <Box
           // zIndex="1"
            marginTop="5rem"
            >
              <UserWidget userId={_id} picturePath={picturePath}/>
            </Box>
         
         <Box
           flexBasis={isNonMobileScreens ? "42%" : undefined}
           mt={isNonMobileScreens ? undefined : "2rem"}
          // zIndex="1"
           marginTop="5rem"
          >
            <MyPostWidget picturePath={picturePath}/>
            <PostsWidgets userId={_id}/>
          </Box>
         {isNonMobileScreens && (
            <Box flexBasis="26%"></Box>
         )}
       </Box>
    </Box>
    )
}

export default HomePage