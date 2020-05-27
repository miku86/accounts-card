import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { GitHub } from "@material-ui/icons";
import React from "react";
import { accounts } from "../config/accouts";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#EEE",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  list: {
    minWidth: "400px",
  },
  listItem: {
    backgroundColor: theme.palette.background.paper,
    margin: "10px 0",
    borderRadius: "4px",
    boxShadow:
      "0 1px 1px 0 rgba(0,0,0,0.2),0 2px 1px -1px rgba(0,0,0,0.2),0 1px 3px 0 rgba(0,0,0,0.2)",
  },
}));

interface Props {}

export const App = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List className={classes.list}>
        {accounts.map((account) => (
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <GitHub />
            </ListItemIcon>
            <ListItemText primary={account.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default App;
