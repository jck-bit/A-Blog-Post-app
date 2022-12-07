import { useState } from "react";

import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";

import  EditOutlinedIcon  from "@mui/icons-material/EditOffOutlined";
import { Formik } from "formik";
import * as yup from "yup"

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state/index";
import Dropzone from "react-dropzone";
import FlexBetween from "../../components/FlexBetween";

const registerSchema = yup.object().shape({
    firstname:yup.string().required("required"),
    lastname:yup.string().required("required"),
    email:yup.string().email("invalid email").required("required"),
    password:yup.string().required("required"),
    occupation:yup.string().required("required"),
    picture:yup.string().required("required")
})


const loginSchema = yup.object().shape({
    email:yup.string().email("invalid email").required("required"),
    password:yup.string().required("required")
})

const initialValueRegister = {
    firstname: "",
    lastname:"",
    password:"",
    location:"",
    occupation:"",
    picture:""
}

const initalValueLogin ={
    email:"",
    password:""
}

export default function Form() {
    const [pageType, setPageType] = useState("login")
    const {palette} = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const isLogin = pageType ==="login";
    const isRegister= pageType === "register";

    const handleFormSubmit = async(value, onSubmit) =>{}

  return (
    <Formik onSubmit={handleFormSubmit}
      initialValues ={isLogin ? initalValueLogin : initialValueRegister}
      validationSchema ={isLogin ? loginSchema : registerSchema}
     >
        {({
            values,
            errros,
            touched,
            handleBlur,
            resetForm,
            handleChange,
            handleValue,
            handleSubmit
        }) =>(
            <form onSubmit={handleSubmit}>
                <Box 
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    "& > div":{gridColumn: isNonMobile ? undefined : "span 4"}
                  }}
                 >
                    {isRegister && (
                        <>
                         <TextField 
                          label=" first Name"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.firstname}
                          name="firstname"
                          error={Boolean(touched.firstname) && Boolean(errros.firstname)}
                          helperText={touched.firstname && errros.firstname}
                          sx={{gridColumn: "span 2"}}
                          />
                          
                         <TextField 
                          label=" Last Name"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.lastname}
                          name="lastname"
                          error={Boolean(touched.lastname) && Boolean(errros.lastname)}
                          helperText={touched.lastname && errros.lastname}
                          sx={{gridColumn: "span 2"}}
                          />

                         <TextField 
                          label="Location"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.location}
                          name="location"
                          error={Boolean(touched.location) && Boolean(errros.location)}
                          helperText={touched.location && errros.location}
                          sx={{gridColumn: "span 2"}}
                          />

                         <TextField 
                          label=" Occupation"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.occupation}
                          name="occupation"
                          error={Boolean(touched.occupation) && Boolean(errros.occupation)}
                          helperText={touched.occupation && errros.occupation}
                          sx={{gridColumn: "span 2"}}
                          />
                        </>
                    )}
                 </Box>
            </form>
        )}
     </Formik>
  )
}