import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React, { createElement, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { findIcon } from "../config/platforms";
import { fetchCard } from "../state/accountsSlice";
import { Account, AppState, Card, CardId, Error } from "../utils/types";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#EEE",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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

interface Props {
  fetchCard: (cardId: CardId) => void;
  fetchedCard: Card;
  error: Error["message"] | null;
}

const CardDetails = ({ fetchCard, fetchedCard, error }: Props) => {
  const classes = useStyles();
  let { id: cardId } = useParams();

  useEffect(() => {
    fetchCard(cardId);
  }, [cardId, fetchCard]);

  const createIcon = (platform: string) => createElement(findIcon(platform));

  return (
    <div className={classes.root}>
      <List className={classes.list}>
        {error ? (
          <ListItem className={classes.listItem}>
            <ListItemText primary={error} />
          </ListItem>
        ) : fetchedCard && fetchedCard.accounts ? (
          fetchedCard.accounts.map((account: Account) => (
            <ListItem className={classes.listItem}>
              <ListItemIcon>{createIcon(account.name)}</ListItemIcon>
              <ListItemText primary={account.url} secondary={account.name} />
            </ListItem>
          ))
        ) : (
          <ListItem className={classes.listItem}>
            <ListItemText primary="Loading" />
          </ListItem>
        )}
      </List>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  fetchedCard: state.accounts.fetchedCard,
  error: state.accounts.error,
});

const mapDispatchToProps = {
  fetchCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);
