import { Button } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React, { useState } from "react";
import AccountsList from "./AccountsList";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#EEE",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

interface Props {}

export const App = (props: Props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Create Card
      </Button>

      <AccountsList />
    </div>
  );
};

export default App;
