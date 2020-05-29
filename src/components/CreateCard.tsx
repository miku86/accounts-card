import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Switch,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { createCard, toggleAccountVisibility } from "../state/accountsSlice";
import { Account, AppState, Card, Name } from "../utils/types";

const useStyles = makeStyles((theme: Theme) => ({
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
  accounts?: Account[];
  open: boolean;
  createCard: (card: Card) => void;
  handleClose: () => void;
  toggleAccountVisibility: (name: Name) => void;
}

export const CreateCard = ({
  accounts,
  open,
  createCard,
  handleClose,
  toggleAccountVisibility,
}: Props) => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    toggleAccountVisibility(event.currentTarget.name);
  };

  const handleSubmit = () => {
    const accountsToShow = accounts
      ? accounts.filter((account) => account.showInCard)
      : [];

    if (accountsToShow && accountsToShow.length) {
      const card = {
        cardId: "1",
        userId: "1",
        accounts: accountsToShow,
      };

      createCard(card);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="create-card-dialog"
    >
      <DialogTitle id="create-card-dialog-title">
        Control which accounts to share
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please check your data and control which accounts you want to share.
        </DialogContentText>
        <List className={classes.list} dense={true}>
          {accounts && accounts.length ? (
            accounts.map((account: Account) => (
              <ListItem
                key={account.id}
                className={classes.listItem}
                dense={true}
              >
                <ListItemText primary={account.name} secondary={account.url} />
                <Switch
                  checked={account.showInCard}
                  onChange={handleChange}
                  color="primary"
                  name={account.id}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </ListItem>
            ))
          ) : (
            <Typography variant="body1" align="center" color="error">
              Please add at least one account.
            </Typography>
          )}
        </List>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          disabled={!accounts || !accounts.length}
          onClick={handleSubmit}
        >
          Create Card
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state: AppState) => ({
  accounts: state.accounts.items,
});

const mapDispatchToProps = {
  createCard,
  toggleAccountVisibility,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCard);
