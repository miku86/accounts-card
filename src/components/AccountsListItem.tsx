import { TextField } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React, { createElement } from "react";
import { Platform } from "../utils/types";

const useStyles = makeStyles((theme: Theme) => ({
  listItem: {
    backgroundColor: theme.palette.background.paper,
    margin: "10px 0",
    borderRadius: "4px",
    boxShadow:
      "0 1px 1px 0 rgba(0,0,0,0.2),0 2px 1px -1px rgba(0,0,0,0.2),0 1px 3px 0 rgba(0,0,0,0.2)",
  },
}));

interface Props {
  platform: Platform;
}

export const AccountsListItem = ({ platform }: Props) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.listItem}>
      <ListItemIcon>{createElement(platform.icon)}</ListItemIcon>
      <TextField
        id={platform.id}
        label={platform.text}
        placeholder={platform.placeholder}
        variant="filled"
        size="small"
      />
    </ListItem>
  );
};

export default AccountsListItem;
