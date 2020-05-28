import List from "@material-ui/core/List";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { getPlatforms } from "../config/platforms";
import AccountsListItem from "./AccountsListItem";

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    minWidth: "400px",
  },
}));

interface Props {}

export const AccountsList = (props: Props) => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {getPlatforms().map((platform) => (
        <AccountsListItem key={platform.text} platform={platform} />
      ))}
    </List>
  );
};

export default AccountsList;
