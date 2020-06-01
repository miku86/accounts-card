import { TextField } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React, { ChangeEvent, createElement } from "react";
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
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const AccountsListItem = ({ platform, handleChange }: Props) => {
  const classes = useStyles();

  const { icon, id, text, placeholder } = platform;

  return (
    <ListItem className={classes.listItem}>
      <ListItemIcon>{createElement(icon)}</ListItemIcon>
      <TextField
        id={id}
        label={text}
        name={text}
        placeholder={placeholder}
        variant="filled"
        size="small"
        onChange={handleChange}
      />
    </ListItem>
  );
};

export default AccountsListItem;
