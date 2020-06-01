import { Button } from "@material-ui/core";
import React, { useState } from "react";
import AccountsList from "./AccountsList";
import CreateCard from "./CreateCard";

interface Props {}

export const Home = (props: Props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Create Card
      </Button>
      <CreateCard open={open} handleClose={handleClose} />
      <AccountsList />
    </>
  );
};

export default Home;
