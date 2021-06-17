import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CssBaseline from "@material-ui/core/CssBaseline";
import ButtonList from "../Common/buttonList";
import CheckIcon from "@material-ui/icons/Check";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ServicesGuide() {
  const classes = useStyles();
  const servicesList = ["Netflix", "Amazon Prime", "Hulu", "Disney+"];

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h1" justify="center">
          Lambda
        </Typography>
        <Typography justify="center">
          Please select all of the streaming services you use from the list
          below
        </Typography>
        <Grid container spacing={2} justify="center">
          <ButtonList listToIterate={servicesList} endIconButton1={<CheckIcon />} endIconButton2={<AddIcon />} />
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              href="/home"
              className={classes.submit}
            >
              Continue
              <ArrowForwardIcon />
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
