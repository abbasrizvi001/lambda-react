import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CreateIcon from "@material-ui/icons/Create";
import SearchIcon from "@material-ui/icons/Search";
import {
  Grid,
  Button,
  IconButton,
  InputBase,
  Typography,
  Toolbar,
  AppBar,
} from "@material-ui/core";
import {
  profileOptions,
  filmGenres,
  tvGenres,
} from "../../Utils/optionsConfig";
import MenuIconButton from "../Common/menuIconButton";
import TextButton from "../Common/textButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  MenuIconButton: {
    marginRight: theme.spacing(2),
  },
  buttons: {},
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  dropDownButton:{
    columns: "2 auto",
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <div className={classes.MenuIconButton}>
            <Button color="inherit" href="/home">
              <Typography variant="h4" noWrap>
                Lambda
              </Typography>
            </Button>
          </div>
          <Grid container maxWidth="md" justify="left">
            <Grid item md={1}>
              <Button color="inherit" href="/home">
                Home
              </Button>
            </Grid>
            <Grid item md={1}>
              <TextButton textForButton={"FILMS"} items={filmGenres} className={classes.dropDownButton}/>
            </Grid>
            <Grid item md={1}>
              <TextButton textForButton={"SERIES"} items={tvGenres} className={classes.dropDownButton}/>
            </Grid>
          </Grid>
          <MenuIconButton iconType={AccountCircleIcon} items={profileOptions} />
          <IconButton color="inherit" href="/services">
            <CreateIcon />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
