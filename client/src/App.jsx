import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from './scenes/homePage'
import Login from "./scenes/loginPage";
import Profile from "./scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return <div className='app'>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
       <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
        <Route path='/profile/:userId' element={<Profile/>}></Route>
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </div>
}

export default App