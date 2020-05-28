import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import AccountsList from "./AccountsList";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#EEE",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

interface Props {}

export const App = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AccountsList />
    </div>
  );
};

export default App;
