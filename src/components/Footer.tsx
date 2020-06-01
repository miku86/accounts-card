import { makeStyles, Theme } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  link: {
    textDecoration: "none",
    color: theme.palette.primary.dark,
  },
}));

interface Props {}

const Footer = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <a
        className={classes.link}
        href="https://miku86.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Built by miku86
      </a>
    </div>
  );
};

export default Footer;
