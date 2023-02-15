import React from "react";
import axios from "axios";
import { useContext } from "react";
import { FormContext } from "../App";
import { useForm } from "react-hook-form";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PsychologyAltRoundedIcon from "@mui/icons-material/PsychologyAltRounded";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
function Form() {
  const Navigate = useNavigate();
  const { x } = useContext(FormContext);
  const [Gender, setGender] = React.useState("");

  const Genderpick = (event) => {
    setGender(event.target.value);
  };

  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://www.ardc-israel.org/">
          ARDC
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const res = await axios.post("http://localhost:8000/Register", {
        Email: data.get("Email"),
        FullName: data.get("FullName"),
        City: data.get("City"),
        Phone: data.get("Phone"),
        Gender: Gender,
      });

      if (res.data) {
        console.log("Response:", res.data);
        localStorage.setItem("Email", JSON.stringify(data.get("Email")));
        Navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <PsychologyAltRoundedIcon sx={{}} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Hello and Welcom to our
            <br />
            Bot-Assisted assesment to Help You get the best service!
            <br />
            <br />
            Please fill our Form
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="FullName"
              label="Full Name"
              type="string"
              id="FullName"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Email"
              label="Email"
              name="Email"
              autoComplete="Email"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="Phone"
              label="Phone"
              type="string"
              id="Phone"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="City"
              label="City"
              type="string"
              id="City"
            />
            <FormControl fullWidth>
              <InputLabel id="Gender">Gender</InputLabel>
              <Select
                labelId="Gender"
                id="Gender"
                value={Gender}
                label="Gender"
                onChange={Genderpick}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Continue
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Form;
