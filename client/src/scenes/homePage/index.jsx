import { Box, useMediaQuery } from "@mui/material"
import { useSelector } from "react-redux"
import Navbar from "../navabr/index"
import MyPostWidget from "../widgets/MyPostWidget"
import UserWidget from "../widgets/UserWidgets"
import PostsWidgets from "../widgets/PostsWidgets"
import AdvertWidget from "../widgets/AdvertWidget"

const HomePage = () =>{
    const isNonMobileScreens = useMediaQuery("(min-width:100px)")
    const {_id, picturePath} = useSelector((state) => state.user)
    return (
    <>
        <Navbar/>
        <Box 
          width="100%"
          padding="2rem 6%"
          display="flex"
          gap="0.5rem"
          justifyContent="space-evenly"
    
         >
          <Box
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
            <Box flexBasis="26%" marginTop="5rem">
              <AdvertWidget/>
                  <Box m="2rem 0" />
        
          </Box>
            
         )}
       </Box>
    </>
    )
}

export default HomePage