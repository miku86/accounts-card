import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Switch,
  Theme,
  Typography,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import React, { useState } from "react";
import { connect } from "react-redux";
import { createCard, toggleAccountVisibility } from "../state/accountsSlice";
import { Account, AppState, CardId, Name } from "../utils/types";
import CopyButton from "./CopyButton";

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    display: "flex",
    flexDirection: "row",
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
  accounts?: Account[];
  open: boolean;
  createCard: any;
  createdCardId: CardId;
  handleClose: () => void;
  toggleAccountVisibility: (name: Name) => void;
}

export const CreateCard = ({
  accounts,
  open,
  createCard,
  createdCardId,
  handleClose,
  toggleAccountVisibility,
}: Props) => {
  const classes = useStyles();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    toggleAccountVisibility(event.currentTarget.name);
  };

  const handleSubmit = async () => {
    const accountsToShow = accounts
      ? accounts.filter((account) => account.showInCard)
      : [];

    if (accountsToShow && accountsToShow.length) {
      const card = {
        userId: "anonymous",
        accounts: accountsToShow,
      };

      await createCard(card);

      setIsSuccess(true);
    }
  };

  const createdUrl = `https://accounts-card.netlify.app/${createdCardId}`;

  return (
    <>
      {isSuccess ? (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="create-card-dialog"
          fullWidth={true}
        >
          <DialogContent className={classes.content}>
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              <div>{createdUrl}</div>
            </Alert>
            <CopyButton text={createdUrl} />
          </DialogContent>
          <DialogActions />
        </Dialog>
      ) : (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="create-card-dialog"
        >
          <DialogTitle id="create-card-dialog-title">
            Control which accounts to share
          </DialogTitle>
          <DialogContent>
            <List className={classes.list} dense={true}>
              {accounts && accounts.length ? (
                accounts.map((account: Account) => (
                  <ListItem
                    key={account.id}
                    className={classes.listItem}
                    dense={true}
                  >
                    <ListItemText
                      primary={account.name}
                      secondary={account.url}
                    />
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
      )}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  accounts: state.accounts.items,
  createdCardId: state.accounts.createdCardId,
});

const mapDispatchToProps = {
  createCard,
  toggleAccountVisibility,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCard);
