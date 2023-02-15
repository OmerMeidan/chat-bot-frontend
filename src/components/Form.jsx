import React from 'react';
import { useContext } from 'react';
import { FormContext } from '../App';
import { useForm } from "react-hook-form";
import {  Box, Button, IconButton, Slider, TextField, Typography,InputLabel, Select,FormControl,MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function Form() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => navigate('/') ;
    const {x}=useContext(FormContext)
    return (
        <Box>
            {x}
             <form onSubmit={handleSubmit(onSubmit)}>
                <TextField type='text' {...register("FullName")} />
                {/* {errors.FullName && <span>This field is required</span>} */}
                <TextField type='email' {...register("Email")} />
                {/* <br />
                {errors.Email && <span>This field is required</span>} */}
                <TextField {...register("Phone")} />
                <FormControl sx={{width:'10%'}}>
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select label="Gender" {...register("Gender")}>
                        <MenuItem value={"Male"}>Male</MenuItem>
                        <MenuItem value={"Female"}>Female</MenuItem>
                        <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                    </FormControl>
                <TextField type='text' {...register("City")} />
      {/* errors will return when field validation fails  */}
      {/* 
      {errors.Phone && <span>This field is required</span>}
      {errors.Gender && <span>This field is required</span>}
      {errors.City && <span>This field is required</span>}
       */}
      <TextField type="submit" />
    </form>
        </Box>
    );
}

export default Form;