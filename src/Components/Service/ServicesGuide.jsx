import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CheckIcon from "@material-ui/icons/Check";
import AddIcon from "@material-ui/icons/Add";
import CssBaseline from "@material-ui/core/CssBaseline";

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
  const [selectedService, setSelectedService] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  function ButtonSelected(service) {
    if (selectedService.includes(service)) {
      const uncheckedService = selectedService.filter((e) => e !== service);
      setSelectedService(uncheckedService);
      setIsChecked(false);
    } else {
      const newSelected = [...selectedService, service];
      setSelectedService(newSelected);
      setIsChecked(true);
    }
  }

  const defaultButtonList = servicesList.map((service, index) => (
    <Grid item xs={12}>
      <Button
        key={service + index}
        id={service}
        onClick={() => ButtonSelected(service)}
        fullWidth
        variant="contained"
        color={isChecked ? "secondary" : "primary"}
        className={classes.Button}
        endIcon={
          isChecked ? (
            <CheckIcon className={classes.icon} />
          ) : (
            <AddIcon className={classes.icon} />
          )
        }
      >
        {service}
      </Button>
    </Grid>
  ));

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
          {defaultButtonList}
          <pre> {selectedService} </pre>
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
