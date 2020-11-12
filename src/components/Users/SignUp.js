import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import {useHistory} from "react-router-dom";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="">
        Yes, Chef
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// const handleChange = (event) => {
//   // setState({ ...state, [event.target.name]: event.target.checked });
// };

const useStyles = makeStyles((theme) => ({
  checkedbox: {
    display: "flex",
    alignItems: "center",
  },
  root: {
    height: "100vh",
    display: "flex",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(3),
  },
  sugar: {
    alignItems: "center",
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [profile, setProfile] = useState ({});
  const [pref, setPref] = useState([]);
  const {peanut, treeNut, vegan, vegetarian, sugar} = pref;
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const getPref = (e) => {
    const ename = e.target.name;
    const checked = e.target.checked;
    console.log(checked)
    if (checked === true) {
        setPref([...pref, ename])
    } else if (checked === false) {
        // console.log(ename)
        let prefFilter = pref.filter(pref => {
            return pref !== ename
        })
        setPref(prefFilter)
    }
  }

  console.log(pref)

  const signUp = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          username: user,
          password: password,
          preferences: pref,
        },
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.user)
      const profile = data.user;
        setProfile(profile);
        let path = `/profile/${profile.id}`;
        history.push(path,{profile:profile})
    });
  };
  console.log(profile)
  //console.log(pref);
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form onSubmit={(e) => signUp(e)} className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  value={user}
                  autoComplete="username"
                  onChange={(e) => setUser(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <div className={classes.checkedbox}>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">
                    Choose Your Dietary Preferences
                  </FormLabel>
                  <FormGroup>
                    <div className={classes.checkedbox}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={peanut}
                            onChange={getPref}
                            name="Peanut-Free"
                          />
                        }
                        label="Peanut Free"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={treeNut}
                            onChange={getPref}
                            name="TreeNut-Free"
                          />
                        }
                        label="Tree Nut Free"
                      />
                    </div>
                    <div className={classes.checkedbox}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={vegetarian}
                            onChange={getPref}
                            name="Vegetarian"
                          />
                        }
                        label="Vegetarian"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={sugar}
                            onChange={getPref}
                            name="Sugar-Conscious"
                          />
                        }
                        label="Sugar-Conscious"
                      />
                    </div>
                    <div className={classes.sugar}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={vegan}
                            onChange={getPref}
                            value={pref}
                            name="Vegan"
                          />
                        }
                        label="Vegan"
                      />
                    </div>
                  </FormGroup>
                </FormControl>
              </div>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
